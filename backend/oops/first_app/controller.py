from django.shortcuts import render
from .models import *
from django.http import JsonResponse
import uuid
import PyPDF2
import openai
import numpy as np
import faiss
import os
import pickle
from dotenv import load_dotenv

load_dotenv()
# Create your views here.


# first_app/views.py
def add_user(email, name, role):
    """
    Adds a user to the user_table.

    Parameters:
    - email: str
    - name: str
    - role: str (student, TA, or faculty)

    Returns:
    - A dictionary with the status of the operation.
    """
    # Check if role is valid
    if role not in ["student", "TA", "faculty"]:
        return {
            "status": "error",
            "message": 'Invalid role. Use "student", "TA", or "faculty".',
        }

    # Check if the email already exists
    if UserTable.objects.filter(email=email).exists():
        return {"status": "error", "message": "A user with this email already exists."}

    # Create and save the new user
    try:
        user = UserTable(email=email, name=name, role=role)
        user.save()
        return {"status": "success", "message": "User added successfully."}
    except Exception as e:
        return {"status": "error", "message": str(e)}


def user_login(email, password):
    if not UserTable.objects.filter(email=email, password=password).exists():
        print("Either email or password is wrong, please try again.")
        return {
            "status": "error",
            "message": "Either email or password is wrong, please try again.",
            "code": 401,
        }
    try:
        student_id = (
            StudentTable.objects.filter(email=email)
            .values_list("student_id", flat=True)
            .first()
        )
        print(f"Student id is {student_id}")
        return {
            "status": "success",
            "message": "Login Successful.",
            "student_id": student_id,
            "code": 200,
        }

    except Exception as e:
        return {"status": "error", "message": str(e)}


def add_student_by_faculty(
    faculty_email, student_id, student_email, course_id, student_name
):
    """
    Allows a faculty member to add a student to their course.

    Parameters:
    - faculty_email: str
    - student_id: str
    - student_email: str
    - course_id: str

    Returns:
    - A dictionary with the status of the operation.
    """
    # First check if the student is a user
    # Check if the faculty member is associated with the given course_id
    try:
        faculty = FacultyTable.objects.get(email=faculty_email, course_id=course_id)
    except FacultyTable.DoesNotExist:
        return {
            "status": "error",
            "message": "Faculty member is not authorized for this course.",
        }

    if not UserTable.objects.filter(email=student_email).exists():
        user = UserTable(email=student_email, name=student_name, role="student")
        user.save()

    # Check if the student already exists with the given email or ID
    if (
        StudentTable.objects.filter(email=student_email, course_id=course_id).exists()
        or StudentTable.objects.filter(
            student_id=student_id, course_id=course_id
        ).exists()
    ):
        return {
            "status": "error",
            "message": "A student with this email or ID already exists.",
        }

    # Add the student to the course
    try:
        student = StudentTable(
            student_id=student_id, email=student_email, course_id=course_id
        )
        student.save()
        return {
            "status": "success",
            "message": "Student added successfully to the course.",
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}


def add_TA_by_faculty(faculty_email, ta_id, ta_email, course_id, topic_id, TA_name):

    # Check if the faculty member is associated with the given course_id
    # First check if the TA is a user
    try:
        faculty = FacultyTable.objects.get(email=faculty_email, course_id=course_id)
    except FacultyTable.DoesNotExist:
        return {
            "status": "error",
            "message": "Faculty member is not authorized for this course.",
        }

    if not UserTable.objects.filter(email=ta_email).exists():
        user = UserTable(email=ta_email, name=TA_name, role="TA")
        user.save()

    # Check if the TA already exists with the given email or ID
    if (
        TaTable.objects.filter(email=ta_email, topic_id=topic_id).exists()
        or TaTable.objects.filter(ta_id=ta_id, topic_id=topic_id).exists()
    ):
        return {
            "status": "error",
            "message": "A TA with this email or ID already exists.",
        }

    # Add the TA to the course
    try:
        TA = TaTable(
            ta_id=ta_id, email=ta_email, course_id=course_id, topic_id=topic_id
        )
        TA.save()
        return {"status": "success", "message": "TA added successfully to the course."}
    except Exception as e:
        return {"status": "error", "message": str(e)}


def add_faculty(faculty_id, faculty_email, course_id, faculty_name):

    if not UserTable.objects.filter(email=faculty_email).exists():
        user = UserTable(email=faculty_email, name=faculty_name, role="faculty")
        user.save()
        # return {'status': 'success', 'message': 'Faculty added successfully as a new user.'}

    if FacultyTable.objects.filter(faculty_id=faculty_id, course_id=course_id).exists():
        return {
            "status": "error",
            "message": "A faculty with this ID already exists for this course.",
        }

    try:
        fac = FacultyTable(
            faculty_id=faculty_id, email=faculty_email, course_id=course_id
        )
        fac.save()
        return {
            "status": "success",
            "message": "Faculty added successfully to the course.",
        }

    except Exception as e:
        return {"status": "error", "message": str(e)}


def get_students_in_course(course_id):

    students = StudentTable.objects.filter(course_id=course_id)
    student_list = [
        {"student_ID": student.student_id, "email": student.email}
        for student in students
    ]
    return student_list


def get_TAs_in_course(course_id):

    TAs = TaTable.objects.filter(course_id=course_id)
    TA_list = [{"TA_ID": TA.ta_id, "email": TA.email} for TA in TAs]
    return TA_list


def all_courses_of_student(student_id):
    # Assuming StudentTable has a foreign key to the CourseTable via course_id
    courses = StudentTable.objects.filter(student_id=student_id).select_related(
        "course_id"
    )

    # Create a list of JSON objects with course_id and course_name
    course_list = [
        {
            "course_id": course.course_id.course_id,
            "course_name": course.course_id.course_name,
        }
        for course in courses
    ]
    return course_list


def fac_of_course(course_id):
    faculty = FacultyTable.objects.filter(course_id=course_id)
    email = faculty[0].email
    name = UserTable.objects.filter(email=email)

    names = [{"IC_Name": n.name, "IC_ID": n.email} for n in name]

    return names


def all_doubts_of_course(course_id):
    doubts = DoubtTable.objects.filter(course_id=course_id)
    doubts_list = [{"Doubt": doubt.query} for doubt in doubts]

    return doubts_list


def all_doubts_asked_by_student(student_id):
    doubts = DoubtTable.objects.filter(student_id=student_id)
    doubts_list = [
        {"Doubt": doubt.query, "course_ID": doubt.course_id} for doubt in doubts
    ]

    return doubts_list


def all_comments_on_doubt(query_id):
    comments = CommentTable.objects.filter(query_id=query_id)
    comments_list = [
        {
            "comment_id": comment.comment_id,
            "time": comment.timestamp,
            "comment": comment.comment,
            "user_id": comment.email,
            "upvotes": comment.upvotes,
            "downvotes": comment.downvotes,
        }
        for comment in comments
    ]

    return comments_list


def add_comment_by_student(query_id, email, comment):
    if not DoubtTable.objects.filter(query_id=query_id).exists():
        print("No such query exists.")
        return {"status": "New comment not added", "message": "No such query exists."}

    if not StudentTable.objects.filter(email=email).exists():
        print("No such student present.")
        return {
            "status": "New comment not added",
            "message": "No such student present.",
        }

    try:
        comment_to_add = CommentTable(query_id=query_id, email=email, comment=comment)
        comment_to_add.save()

        print("Comment added successfully.")
        return {"status": "success", "message": "Comment added successfully."}

    except Exception as e:
        print("Error:", str(e))
        return {"status": "error", "message": str(e)}


def upvote_doubt(query_id, email):
    if not UserTable.objects.filter(email=email).exists():
        print("No such user present.")
        return {"status": "Upvote not added", "message": "No such user present."}

    if not DoubtTable.objects.filter(query_id=query_id).exists():
        print("No such query present.")
        return {"status": "Upvote not added", "message": "No such query present."}

    try:
        rows_updated = DoubtTable.objects.filter(query_id=query_id).update(
            upvotes=(models.F("upvotes") or 0) + 1
        )
        print("Upvote added successfully.")
        return {"status": "success", "message": "Upvote added successfully."}

    except Exception as e:
        print("Error:", str(e))
        return {"status": "error", "message": str(e)}


def upvote_comment(comment_id, email):
    if not UserTable.objects.filter(email=email).exists():
        print("No such user present.")
        return {"status": "Upvote not added", "message": "No such user present."}

    if not CommentTable.objects.filter(comment_id=comment_id).exists():
        print("No such comment present.")
        return {"status": "Upvote not added", "message": "No such comment present."}

    try:
        query_id = (
            CommentTable.objects.filter(comment_id=comment_id)
            .values_list("query_id", flat=True)
            .first()
        )
        course_id = (
            DoubtTable.objects.filter(query_id=query_id)
            .values_list("course_id", flat=True)
            .first()
        )

        if not StudentTable.objects.filter(email=email, course_id=course_id):
            print("Student not enrolled in this course.")
            return {
                "status": "Upvote not added",
                "message": "Student not enrolled in this course.",
            }

        student = StudentTable.objects.filter(email=email, course_id=course_id).first()

        upvoted_comments_set = set(student.upvoted_comments)

        if int(comment_id) in upvoted_comments_set:
            print("Comment already upvoted by the student.")
            return {
                "status": "Upvote not added",
                "message": "Comment already upvoted by the student.",
            }

        comment = CommentTable.objects.filter(comment_id=comment_id).update(
            upvotes=(models.F("upvotes") or 0) + 1
        )

        student.upvoted_comments.append(comment_id)
        student.save()
        print("Comment upvoted by the student.")
        return {"status": "Upvote added", "message": "Comment upvoted by the student."}

    except Exception as e:
        print("Error:", str(e))
        return {"status": "error", "message": str(e)}


# RAG MODULES
os.environ["OPENAI_API_KEY"] = os.environ.get("OPENAI_API_KEY")
client = openai


def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text()
    return text


def get_votes_data(std_id):
    if not (StudentTable.objects.filter(student_id=std_id).exists()):
        return JsonResponse({"message": f"No student with {std_id} Found"}, status=400)

    student = StudentTable.objects.filter(student_id=std_id).first()
    return JsonResponse(
        {
            "upvoted_comments": student.upvoted_comments,
            "downvoted_comments": student.downvoted_comments,
            "upvoted_doubts": student.upvoted_doubts,
            "downvoted_doubts": student.downvoted_doubts,
        },
        status=200,
    )


# Function to split text into smaller chunks
def split_text_into_chunks(text, chunk_size=500, overlap=50):
    words = text.split()
    chunks = []
    for i in range(0, len(words), chunk_size - overlap):
        chunk = " ".join(words[i : i + chunk_size])
        chunks.append(chunk)
    return chunks


# Generate embeddings for text chunks
def generate_embeddings(chunks):
    embeddings = []
    for chunk in chunks:
        response = client.embeddings.create(input=chunk, model="text-embedding-ada-002")
        embedding = response.data[0].embedding
        embeddings.append(embedding)
    return embeddings


# Save embeddings and text chunks into a FAISS index
def save_embeddings_to_faiss(embeddings, index_path):
    dimension = len(embeddings[0])  # Embedding vector size
    if os.path.exists(index_path):
        faiss_index = faiss.read_index(index_path)
    else:
        index = faiss.IndexFlatL2(dimension)
        faiss_index = faiss.IndexIDMap(index)

    ids = list(range(faiss_index.ntotal, faiss_index.ntotal + len(embeddings)))
    faiss_index.add_with_ids(np.array(embeddings).astype("float32"), np.array(ids))
    faiss.write_index(faiss_index, index_path)


# Process a PDF and store embeddings and chunks
def process_pdf_and_store_embeddings(pdf_path, index_path, text_chunks_path):
    text = extract_text_from_pdf(pdf_path)
    chunks = split_text_into_chunks(text)

    # Generate embeddings
    embeddings = generate_embeddings(chunks)

    # Save embeddings and text chunks
    save_embeddings_to_faiss(embeddings, index_path)
    with open(text_chunks_path, "w", encoding="utf-8") as f:  # Specify UTF-8 encoding
        for chunk in chunks:
            f.write(chunk + "\n")
    print(f"Processed and stored embeddings and text chunks for {pdf_path}")


# PART B


# Load FAISS index
def load_faiss_index(index_path):
    return faiss.read_index(index_path)


# Load text chunks from file
def load_text_chunks(text_chunks_path):
    with open(text_chunks_path, "r", encoding="utf-8") as f:  # Specify UTF-8 encoding
        return [line.strip() for line in f.readlines()]


# Generate embeddings for a query
def generate_query_embedding(query):
    response = client.embeddings.create(input=query, model="text-embedding-ada-002")
    query_embedding = (
        np.array(response.data[0].embedding).astype("float32").reshape(1, -1)
    )
    return query_embedding


# Search FAISS index for relevant chunks
def search_faiss_index(faiss_index, query_embedding, k=5):
    distances, indices = faiss_index.search(query_embedding, k)
    return indices[0]  # Return indices of top-k results


# Generate a response using relevant text chunks
def generate_response(query, relevant_chunks):
    context = " ".join(relevant_chunks)
    prompt = f"Context: {context}\n\nQuery: {query}\nAnswer:"
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a concise assistant. Provide brief and to-the-point answers.",
            },
            {"role": "user", "content": prompt},
        ],
        max_tokens=200,
    )
    return response.choices[0].message.content


# Handle query with pre-computed embeddings and text chunks
def answer_query(query, index_path, text_chunks_path, k=5):
    # Load stored data
    faiss_index = load_faiss_index(index_path)
    text_chunks = load_text_chunks(text_chunks_path)

    # Generate query embedding
    query_embedding = generate_query_embedding(query)

    # Search FAISS index
    relevant_indices = search_faiss_index(faiss_index, query_embedding, k)

    # Retrieve relevant chunks
    relevant_chunks = [text_chunks[i] for i in relevant_indices if i < len(text_chunks)]

    # Generate response
    return generate_response(query, relevant_chunks)
