from django.shortcuts import render
from .models import *
from django.http import JsonResponse
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
    if role not in ['student', 'TA', 'faculty']:
        return {'status': 'error', 'message': 'Invalid role. Use "student", "TA", or "faculty".'}

    # Check if the email already exists
    if UserTable.objects.filter(email=email).exists():
        return {'status': 'error', 'message': 'A user with this email already exists.'}

    # Create and save the new user
    try:
        user = UserTable(email=email, name=name, role=role)
        user.save()
        return {'status': 'success', 'message': 'User added successfully.'}
    except Exception as e:
        return {'status': 'error', 'message': str(e)}



def add_student_by_faculty(faculty_email, student_id, student_email, course_id):
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
    # Check if the faculty member is associated with the given course_id
    try:
        faculty = FacultyTable.objects.get(email=faculty_email, course_id=course_id)
    except FacultyTable.DoesNotExist:
        return {'status': 'error', 'message': 'Faculty member is not authorized for this course.'}

    # Check if the student already exists with the given email or ID
    if StudentTable.objects.filter(email=student_email,course_id = course_id).exists() or StudentTable.objects.filter(student_id=student_id,course_id = course_id).exists():
        return {'status': 'error', 'message': 'A student with this email or ID already exists.'}

    # Add the student to the course
    try:
        student = StudentTable(student_id=student_id, email=student_email, course_id=course_id)
        student.save()
        return {'status': 'success', 'message': 'Student added successfully to the course.'}
    except Exception as e:
        return {'status': 'error', 'message': str(e)}


def add_TA_by_faculty(faculty_email, ta_id, ta_email, course_id, topic_id):
   
    # Check if the faculty member is associated with the given course_id
    try:
        faculty = FacultyTable.objects.get(email=faculty_email, course_id=course_id)
    except FacultyTable.DoesNotExist:
        return {'status': 'error', 'message': 'Faculty member is not authorized for this course.'}

    # Check if the TA already exists with the given email or ID
    if TaTable.objects.filter(email=ta_email,topic_id=topic_id).exists() or TaTable.objects.filter(ta_id = ta_id,topic_id=topic_id).exists():
        return {'status': 'error', 'message': 'A TA with this email or ID already exists.'}

    # Add the TA to the course
    try:
        TA = TaTable(ta_id=ta_id, email=ta_email, course_id=course_id, topic_id = topic_id)
        TA.save()
        return {'status': 'success', 'message': 'TA added successfully to the course.'}
    except Exception as e:
        return {'status': 'error', 'message': str(e)}
    

def get_students_in_course(course_id):

    students = StudentTable.objects.filter(course_id=course_id)
    student_list = [
        {
            'student_ID': student.student_id,
            'email': student.email
        }
        for student in students
    ]
    return student_list


def get_TAs_in_course(course_id):

    TAs = TaTable.objects.filter(course_id=course_id)
    TA_list = [
        {
            'TA_ID': TA.ta_id,
            'email': TA.email
        }
        for TA in TAs
    ]
    return TA_list


def all_courses_of_student(student_id):
    courses = StudentTable.objects.filter(student_id = student_id)
    course_list = [
        {
            'course_ID' : course.course_id 
        }
        for course in courses
    ]
    return course_list


# def fac_of_course(course_id):
#     faculty = FacultyTable.objects.filter(course_id = course_id)
#     facs = [
#         {
#             'Faculty' : fac.faculty_id
#         }
#         for fac in faculty
#     ]

#     return facs


def fac_of_course(course_id):
    faculty = FacultyTable.objects.filter(course_id = course_id)
    email = faculty[0].email
    name = UserTable.objects.filter(email = email)

    names = [
        {
            "IC_Name" : n.name,
            "IC_ID" : n.email
        }
        for n in name
    ]
    
    return names


def all_doubts_of_course(course_id):
    doubts = DoubtTable.objects.filter(course_id = course_id)
    doubts_list = [
        {
            "Doubt" : doubt.query
        }
        for doubt in doubts
    ]

    return doubts_list


def all_doubts_asked_by_student(student_id):
    doubts = DoubtTable.objects.filter(student_id = student_id)
    doubts_list = [
        {
            "Doubt" : doubt.query,
            "course_ID" : doubt.course_id
        }
        for doubt in doubts
    ]

    return doubts_list


def all_comments_on_doubt(query_id):
    comments = CommentTable.objects.filter(query_id = query_id)
    comments_list = [
        {
            "Comment" : comment.comment,
            "User_email" : comment.email
        }
        for comment in comments
    ]

    return comments_list


def add_doubt_by_student(student_id, course_id, topic_id, query):
    # Check if a similar query already exists
    if DoubtTable.objects.filter(course_id=course_id, query=query).exists():
        print("Similar query already exists.")
        return {'status': 'New doubt not added', 'message': 'Similar query already exists. Please refer to that.'}

    # Add the query
    try:
        # Retrieve a single TA for the course and topic(Fetches a Row)
        ta = TaTable.objects.filter(course_id=course_id, topic_id=topic_id).first()
        
        if not ta:
            print("No TA found for the specified course and topic.")
            return {'status': 'error', 'message': 'No TA available for the specified course and topic.'}

        # print(f"TA found with ID: {ta.ta_id}")
        
        # Add the doubt with the retrieved ta_id
        doubt = DoubtTable(
            student_id=student_id,
            course_id=course_id,
            topic_id=topic_id,
            ta_id=ta.ta_id,  # Use `ta_id` from the single TA object
            query=query,
            ans='',
            status=False  # Assuming `status` is a Boolean field
        )
        doubt.save()
        
        print("Doubt saved successfully.")
        return {'status': 'success', 'message': 'Doubt added successfully to the course.'}
    
    except Exception as e:
        print("Error:", str(e))
        return {'status': 'error', 'message': str(e)}


def add_comment_by_student(query_id,email,comment):
    comment_to_add = CommentTable(query_id = query_id,email = email,comment = comment,)
