# Generated by Django 2.1.7 on 2019-03-07 01:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pricer', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pricer',
            old_name='completed',
            new_name='validated',
        ),
    ]
