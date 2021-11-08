from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.


# 유저 모델
class User(AbstractUser):
    name = models.CharField(max_length=10) # 실명
    email = models.EmailField(unique=True) # 학교이메일
    school = models.ForeignKey('School', on_delete=models.PROTECT, related_name='students', blank=True, null=True) # 해당 학교
    email_verified = models.BooleanField(default=False) # 이메일 인증여부

    def __str__(self):
        return self.username


# 학교 모델
class School(models.Model):
    name_k = models.CharField(max_length=20) # 학교이름(한글)
    name_e = models.CharField(max_length=20) # 학교이름(영문)
    location = models.CharField(max_length=100) # 주소
    loc_x = models.FloatField() # api x 좌표
    loc_y = models.FloatField() # api y 좌표
    # restaurants = models.ManyToManyField('Restaurant', related_name='nearby_schools', blank=True, null=True) # 식당모델과 1대1 연결

    def __str__(self):
        return self.name_k

