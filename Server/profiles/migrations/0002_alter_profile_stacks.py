# Generated by Django 3.2.6 on 2021-08-24 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0002_remove_tag_created_at'),
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='stacks',
            field=models.ManyToManyField(null=True, to='tags.Tag'),
        ),
    ]