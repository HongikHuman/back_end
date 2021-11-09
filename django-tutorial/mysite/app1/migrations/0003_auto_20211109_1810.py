# Generated by Django 3.2.9 on 2021-11-09 18:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_alter_user_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('controlNum', models.CharField(max_length=50)),
                ('category', models.CharField(blank=True, max_length=10, null=True)),
                ('likeCount', models.IntegerField(default=0)),
                ('address1', models.CharField(blank=True, max_length=200, null=True)),
                ('address2', models.CharField(blank=True, max_length=200, null=True)),
                ('loc_x', models.FloatField()),
                ('loc_y', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Wish',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app1.restaurant')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='school',
            name='restaurants',
            field=models.ManyToManyField(related_name='nearby_schools', to='app1.Restaurant'),
        ),
    ]