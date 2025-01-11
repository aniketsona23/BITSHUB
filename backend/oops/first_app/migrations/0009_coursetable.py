# Generated by Django 5.1.2 on 2025-01-11 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0008_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseTable',
            fields=[
                ('course_id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('course_name', models.TextField()),
                ('ic_id', models.CharField(max_length=3)),
            ],
            options={
                'db_table': 'course_table',
                'managed': False,
            },
        ),
    ]
