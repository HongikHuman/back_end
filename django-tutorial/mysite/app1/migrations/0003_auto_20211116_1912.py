# Generated by Django 3.2.9 on 2021-11-16 19:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_auto_20211116_1848'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='relationship',
            options={'ordering': ('school_id',)},
        ),
        migrations.AlterModelOptions(
            name='res_like',
            options={},
        ),
        migrations.RemoveField(
            model_name='relationship',
            name='user',
        ),
        migrations.RemoveField(
            model_name='res_like',
            name='school',
        ),
        migrations.AddField(
            model_name='relationship',
            name='school',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app1.school'),
        ),
        migrations.AddField(
            model_name='res_like',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='relationship',
            name='restaurant',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app1.restaurant'),
        ),
    ]