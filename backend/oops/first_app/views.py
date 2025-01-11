from django.shortcuts import render
from .models import *
from django.http import JsonResponse
from .controller import *
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

# first_app/views.py


def add_doubt_by_student(student_id, course_id, topic_id, query):
    # Check if a similar query already exists
    if DoubtTable.objects.filter(course_id=course_id, query=query).exists():
        print("Similar query already exists.")
        return {
            "status": "New doubt not added",
            "message": "Similar query already exists. Please refer to that.",
        }

    # Add the query
    try:
        # Retrieve a single TA for the course and topic(Fetches a Row)
        ta = TaTable.objects.filter(course_id=course_id, topic_id=topic_id).first()

        if not ta:
            print("No TA found for the specified course and topic.")
            return {
                "status": "error",
                "message": "No TA available for the specified course and topic.",
            }

        # print(f"TA found with ID: {ta.ta_id}")

        pdf_path = "C:\\Users\\Divyam Gupta\\Desktop\\AI\\CS F213 Handout_1 2024 25 (23 files merged).pdf"
        index_path = "C:\\Users\\Divyam Gupta\\Desktop\\AI\\faiss_index"
        text_chunks_path = "C:\\Users\\Divyam Gupta\\Desktop\\AI\\text_chunks"

        # Query the RAG system
        ai_answer = answer_query(query, index_path, text_chunks_path, k=5)
        # print(ai_answer)
        # Add the doubt with the retrieved ta_id
        doubt = DoubtTable(
            student_id=student_id,
            course_id=course_id,
            topic_id=topic_id,
            ta_id=ta.ta_id,
            query=query,
            ans=ai_answer,
            status=False,  # Status indicates whether TA has reviewed the doubt
        )
        doubt.save()

        print("Doubt saved successfully.")
        return {
            "status": "success",
            "message": "Doubt added successfully to the course.",
            "answer": ai_answer,
        }

    except Exception as e:
        print("Error:", str(e))
        return {"status": "error", "message": str(e)}


# ENDPOINTS


@csrf_exempt
def user_login_endpoint(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")

            if not (email and password):
                return JsonResponse(
                    {
                        "status": "error",
                        "message": "Missing one or more required parameters: email, password.",
                    },
                    status=400,
                )

            result = user_login(email=email, password=password)
            if result.get("status") == "error":
                # Return 401 if wrong credentials or 404 if student not found
                return JsonResponse(result, status=result.get("code", 400))

            else:
                return JsonResponse(result)

        except json.JSONDecodeError:
            return JsonResponse(
                {"status": "error", "message": "Invalid JSON format."}, status=400
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only POST method is allowed."}, status=405
    )


def all_courses_of_student_endpoint(request, student_id):
    if request.method == "GET":
        try:
            course_list = all_courses_of_student(student_id)
            if not course_list:
                return JsonResponse(
                    {
                        "message": "No courses found for this student.",
                        "doubts": [],
                    },
                    status=404,
                )

            return JsonResponse(
                {
                    "status": "success",
                    "message": f"Courses found for student ID {student_id}.",
                    "courses": course_list,
                },
                status=200,
            )

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only GET method is allowed."}, status=405
    )


@csrf_exempt
def add_doubt_endpoint(request):
    if request.method == "POST":
        try:
            # Parse JSON body
            data = json.loads(request.body)
            student_id = data.get("student_id")
            course_id = data.get("course_id")
            topic_id = data.get("topic_id")
            query = data.get("query")

            # Validate inputs
            if not (student_id and course_id and topic_id and query):
                return JsonResponse(
                    {
                        "status": "error",
                        "message": "Missing one or more required parameters: student_id, course_id, topic_id, query.",
                    },
                    status=400,
                )

            # Call the function
            result = add_doubt_by_student(student_id, course_id, topic_id, query)
            return JsonResponse(result)

        except json.JSONDecodeError:
            return JsonResponse(
                {"status": "error", "message": "Invalid JSON format."}, status=400
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only POST method is allowed."}, status=405
    )


@csrf_exempt
def all_doubts_by_student_endpoint(request, student_id):
    if request.method == "GET":
        try:
            # Call the function
            doubts_list = all_doubts_asked_by_student(student_id)

            if not doubts_list:
                return JsonResponse(
                    {
                        "status": "success",
                        "message": "No doubts found for the student.",
                        "doubts": [],
                    }
                )

            return JsonResponse(
                {
                    "status": "success",
                    "message": f"Doubts found for student ID {student_id}.",
                    "doubts": doubts_list,
                }
            )

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only GET method is allowed."}, status=405
    )


@csrf_exempt
def all_doubts_of_course_endpoint(request, course_id):
    if request.method == "GET":
        try:
            # Call the function
            doubts_list = all_doubts_of_course(course_id)

            if not doubts_list:
                return JsonResponse(
                    {
                        "status": "success",
                        "message": f"No doubts found for the course {course_id}.",
                        "doubts": [],
                    }
                )

            return JsonResponse(
                {
                    "status": "success",
                    "message": f"Doubts found for course ID {course_id}.",
                    "doubts": doubts_list,
                }
            )

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only GET method is allowed."}, status=405
    )


@csrf_exempt
def add_comment_by_student_endpoint(request):
    if request.method == "POST":
        try:
            # Parse JSON body
            data = json.loads(request.body)
            query_id = data.get("query_id")
            email = data.get("email")
            comment = data.get("comment")

            # Validate inputs
            if not (query_id and email and comment):
                return JsonResponse(
                    {
                        "status": "error",
                        "message": "Missing one or more required parameters: query_id, email, comment.",
                    },
                    status=400,
                )

            # Call the function
            result = add_comment_by_student(query_id, email, comment)
            return JsonResponse(result)

        except json.JSONDecodeError:
            return JsonResponse(
                {"status": "error", "message": "Invalid JSON format."}, status=400
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only POST method is allowed."}, status=405
    )


def all_comments_on_doubt_endpoint(request, query_id):
    if request.method == "GET":
        try:
            if not (query_id):
                return JsonResponse({"message": "Undefined query ID "}, status=500)
            data = JsonResponse(
                {"comments": all_comments_on_doubt(query_id)}, status=200
            )
            return data
        except json.JSONDecodeError:
            return JsonResponse(
                {"status": "error", "message": "Invalid JSON format."}, status=400
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)


def get_votes_data_endpoint(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            stdId = data.get("stud_id")
            if not (stdId):
                return JsonResponse({"message": "No Student ID "}, status=500)
            data = get_votes_data(stdId)
            return data
        except json.JSONDecodeError:
            return JsonResponse(
                {"status": "error", "message": "Invalid JSON format."}, status=400
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)


@csrf_exempt
def upvote_doubt_endpoint(request):
    if request.method == "POST":
        try:
            # Parse JSON body
            data = json.loads(request.body)
            query_id = data.get("query_id")
            email = data.get("email")

            # Validate inputs
            if not (query_id and email):
                return JsonResponse(
                    {
                        "status": "error",
                        "message": "Missing one or more required parameters: query_id, email.",
                    },
                    status=400,
                )

            # Call the function
            result = upvote_doubt(query_id, email)
            return JsonResponse(result)

        except json.JSONDecodeError:
            return JsonResponse(
                {"status": "error", "message": "Invalid JSON format."}, status=400
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only POST method is allowed."}, status=405
    )


def upvote_comment_endpoint(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            comment_id = data.get("comment_id")
            email = data.get("email")

            if not (comment_id and email):
                return JsonResponse(
                    {
                        "status": "error",
                        "message": "Missing one or more required parameters: query_id, email.",
                    },
                    status=400,
                )

            result = upvote_comment(comment_id, email)
            return JsonResponse(result)

        except json.JSONDecodeError:
            return JsonResponse(
                {"status": "error", "message": "Invalid JSON format."}, status=400
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only POST method is allowed."}, status=405
    )


@csrf_exempt
def get_students_in_course_endpoint(request, course_id):
    if request.method == "GET":
        try:
            # Call the function
            student_list = get_students_in_course(course_id)

            if not student_list:
                return JsonResponse(
                    {
                        "status": "success",
                        "message": f"No students found for the course {course_id}.",
                        "students": [],
                    }
                )

            return JsonResponse(
                {
                    "status": "success",
                    "message": f"Students found for course ID {course_id}.",
                    "students": student_list,
                }
            )

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only GET method is allowed."}, status=405
    )


@csrf_exempt
def get_TAs_in_course_endpoint(request, course_id):
    if request.method == "GET":
        try:
            # Call the function
            TA_list = get_TAs_in_course(course_id)

            if not TA_list:
                return JsonResponse(
                    {
                        "status": "success",
                        "message": f"No TAs found for the course {course_id}.",
                        "TAs": [],
                    }
                )

            return JsonResponse(
                {
                    "status": "success",
                    "message": f"TAs found for course ID {course_id}.",
                    "TAs": TA_list,
                }
            )

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only GET method is allowed."}, status=405
    )


@csrf_exempt
def fac_of_course_endpoint(request, course_id):
    if request.method == "GET":
        try:
            # Call the function
            faculty_data = fac_of_course(course_id)

            if not faculty_data:
                return JsonResponse(
                    {
                        "status": "success",
                        "message": f"No faculty found for the course {course_id}.",
                        "faculty": [],
                    }
                )

            return JsonResponse(
                {
                    "status": "success",
                    "message": f"Faculty found for course ID {course_id}.",
                    "faculty": faculty_data,
                }
            )

        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse(
        {"status": "error", "message": "Only GET method is allowed."}, status=405
    )
