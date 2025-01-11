# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid

class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class CommentTable(models.Model):
    query_id = models.IntegerField(blank=True, null=True)
    comment_id = models.AutoField(primary_key=True)  # Auto-increment primary key
    email = models.CharField(max_length=255)
    comment = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True, blank=True, null=True)  # Auto-add timestamp
    upvotes = models.IntegerField(default=0, blank=True, null=True)  # Default to 0
    downvotes = models.IntegerField(default=0, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'comment_table'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class DoubtTable(models.Model):
    student_id = models.IntegerField(blank=True, null=True)
    course_id = models.CharField(max_length=4)
    topic_id = models.IntegerField(blank=True, null=True)
    ta_id = models.IntegerField(blank=True, null=True)
    query_id = models.AutoField(primary_key=True)
    query = models.TextField()
    ans = models.TextField(blank=True, null=True)
    status = models.BooleanField(blank=True, null=True)
    upvotes = models.IntegerField(blank=True, null=True,default=0)
    downvotes = models.IntegerField(blank=True, null=True,default=0)

    class Meta:
        managed = False
        db_table = 'doubt_table'


class FacultyTable(models.Model):
    faculty_id = models.CharField(max_length=3)
    email = models.CharField(max_length=255)
    course_id = models.CharField(max_length=4)
    faculty_uuid = models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)

    class Meta:
        managed = False
        db_table = 'faculty_table'


class StudentTable(models.Model):
    stud_course_uuid = models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)
    student_id = models.IntegerField()
    email = models.CharField(max_length=255)
    course_id = models.CharField(max_length=4)
    upvoted_comments = ArrayField(models.IntegerField(blank=True, null=True),default=list)

    class Meta:
        managed = False
        db_table = 'student_table'


class TaTable(models.Model):
    ta_id = models.IntegerField()
    email = models.CharField(max_length=255)
    course_id = models.CharField(max_length=4)
    topic_id = models.IntegerField(blank=True, null=True)
    ta_uuid = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)

    class Meta:
        managed = False
        db_table = 'ta_table'


class TopicsTable(models.Model):
    course_id = models.CharField(primary_key=True, max_length=4)
    topics = ArrayField(models.CharField(max_length=255))  # Assuming topics are short text
    topic_ids = ArrayField(models.IntegerField())  # Assuming topic_ids are integers

    class Meta:
        managed = False
        db_table = 'topics_table'


class UserTable(models.Model):
    email = models.CharField(primary_key=True, max_length=255)
    name = models.CharField(max_length=255)
    role = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user_table'
