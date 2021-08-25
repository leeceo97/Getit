# Generated by Django 3.2.6 on 2021-08-25 11:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0003_alter_tag_name'),
        ('profiles', '0002_alter_profile_stacks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group',
            name='stack',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='tags.tag'),
            preserve_default=False,
        ),
    ]