# Generated by Django 5.1.2 on 2024-11-08 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0005_commenttable_doubttable_facultytable_studenttable_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TopicsTable',
            fields=[
                ('course_id', models.CharField(max_length=4, primary_key=True, serialize=False)),
                ('topics', models.TextField()),
                ('topic_ids', models.TextField()),
            ],
            options={
                'db_table': 'topics_table',
                'managed': False,
            },
        ),
    ]
