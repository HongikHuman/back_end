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
    restaurants = models.ManyToManyField('Restaurant', related_name='nearby_schools') # 식당모델과 manytomany 연결

    def __str__(self):
        return self.name_k # 학교이름(한글)을 대표값으로


# 식당 모델
class Restaurant(models.Model):
    name = models.CharField(max_length=30) # 식당이름
    controlNum = models.CharField(max_length=50) # 식당 관리번호
    category = models.CharField(max_length=10, blank=True, null=True) # 식당 카테고리
    likeCount = models.IntegerField(default=0) # 맛집이에요 수
    address1 = models.CharField(max_length=200, blank=True, null=True) # 주소1
    address2 = models.CharField(max_length=200, blank=True, null=True) # 주소2
    loc_x = models.FloatField() # x좌표
    loc_y = models.FloatField() # y좌표

    class Meta:
        ordering = ('-likeCount',) # 좋아요 역순으로 정렬

    def __str__(self):
        return self.name # 식당 이름을 대표값으로


# 찜 모델
class Wish(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) # 유저
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE) # 찜한 레스토랑