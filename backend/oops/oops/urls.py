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
from django.contrib import admin
from django.urls import path
from first_app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('post-doubt/', add_doubt_endpoint, name='add_doubt_endpoint'),
    path('student/<int:student_id>/doubts/', all_doubts_by_student_endpoint, name='all_doubts_by_student_endpoint'),
    path('course/<str:course_id>/doubts/', all_doubts_of_course_endpoint, name='all_doubts_of_course_endpoint'),
    path('add-comment/', add_comment_by_student_endpoint, name='add_comment_by_student_endpoint'),
    path('student/<int:student_id>/courses',all_courses_of_student_endpoint,name ='all_courses_of_student_endpoint'),
    path('upvote-doubt/', upvote_doubt_endpoint, name='upvote_doubt_endpoint'),
    path('upvote-comment/',upvote_comment_endpoint,name = 'upvote_comment_endpoint'),
    path('course/<str:course_id>/students/', get_students_in_course_endpoint, name='get_students_in_course_endpoint'),
    path('course/<str:course_id>/TAs/', get_TAs_in_course_endpoint, name='get_TAs_in_course_endpoint'),
    path('course/<str:course_id>/faculty/', fac_of_course_endpoint, name='fac_of_course_endpoint'),
]
