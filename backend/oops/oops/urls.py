"""
URL configuration for oops project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# Endpoint to get list of all course objects for a queryID
from django.contrib import admin
from django.urls import path
from first_app.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/post-doubt/", add_doubt_endpoint, name="add_doubt_endpoint"),
    path(
        "api/student/<int:student_id>/doubts/",
        all_doubts_by_student_endpoint,
        name="all_doubts_by_student_endpoint",
    ),
    path(
        "api/course/<str:course_id>/doubts/",
        all_doubts_of_course_endpoint,
        name="all_doubts_of_course_endpoint",
    ),
    path(
        "api/add-comment",
        add_comment_by_student_endpoint,
        name="add_comment_by_student_endpoint",
    ),
    path(
        "api/student/<str:student_id>/courses",
        all_courses_of_student_endpoint,
        name="all_courses_of_student_endpoint",
    ),
    path(
        "api/student/votes-data/",
        get_votes_data_endpoint,
        name="get_votes_data_endpoint",
    ),
    path("api/vote-doubt/", vote_doubt_endpoint, name="vote_doubt_endpoint"),
    path("api/vote-comment/", vote_comment_endpoint, name="vote_comment_endpoint"),
    path(
        "api/course/<str:course_id>/students/",
        get_students_in_course_endpoint,
        name="get_students_in_course_endpoint",
    ),
    path(
        "api/course/<str:course_id>/TAs/",
        get_TAs_in_course_endpoint,
        name="get_TAs_in_course_endpoint",
    ),
    path(
        "api/course/<str:course_id>/faculty/",
        fac_of_course_endpoint,
        name="fac_of_course_endpoint",
    ),
    path(
        "api/user/login",
        user_login_endpoint,
        name="user_login_endpoint",
    ),
    path(
        "api/doubt/<str:doubt_id>/comments/",
        all_comments_on_doubt_endpoint,
        name="all_comments_on_doubt_endpoint",
    ),
    path(
        "api/user/",
        get_user_data_endpoint,
        name="get_user_data_endpoint",
    ),
]
