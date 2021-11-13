from django.db import models
from pytz import timezone
from django.contrib.auth.models import AbstractUser


# Create your models here.


# 기본 모델
class Base(models.Model):
    created_at = models.DateTimeField(auto_now_add=True) # 최초 작성 시간
    updated_at = models.DateTimeField(auto_now=True) # 최초 수정 시간

    class Meta:
        abstract = True


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
    location = models.CharField(max_length=100) # 주소
    loc_x = models.FloatField() # x 좌표 (경도)
    loc_y = models.FloatField() # y 좌표 (위도)
    restaurants = models.ManyToManyField('Restaurant', related_name='nearby_schools') # 식당모델과 manytomany 연결

    def __str__(self):
        return self.name_k # 학교이름(한글)을 대표값으로


# 식당 모델
class Restaurant(models.Model):
    name = models.CharField(max_length=30) # 식당이름(사업장명)
    controlNum = models.CharField(max_length=50, blank=True, null=True) # 식당 관리번호
    category = models.CharField(max_length=10, blank=True, null=True) # 식당 카테고리 (업태구분명)
    address1 = models.CharField(max_length=200, blank=True, null=True) # 주소1 (지번주소)
    address2 = models.CharField(max_length=200, blank=True, null=True) # 주소2 (도로명주소)
    loc_x = models.FloatField() # x좌표(경도)
    loc_y = models.FloatField() # y좌표(위도)
    likeCount = models.IntegerField(default=0)  # 맛집이에요 수

    class Meta:
        ordering = ('-likeCount',) # 좋아요 역순으로 정렬

    def __str__(self):
        return self.name # 식당 이름을 대표값으로


# 식당 - 맛집이에요
class Res_like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey('Restaurant', on_delete=models.CASCADE)


# 찜 모델
class Wish(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) # 유저
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE) # 찜한 레스토랑


# 리뷰 모델(해당 맛집 - 리뷰)
class Review(Base):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE) # 리뷰 식당
    user = models.ForeignKey(User, on_delete=models.CASCADE) # 리뷰 작성자
    views = models.PositiveIntegerField(default=0) # 조회수
    title = models.CharField(max_length=10) # 글 제목
    contents = models.TextField()  # 글 내용
    authenticated = models.BooleanField(default=False)  # 인증 뱃지
    likes = models.IntegerField(default=0) # 좋아요 수

    def __str__(self):
        return self.title # 리뷰 제목을 대표로 함

    @property
    def update_counter(self): # 조회수 증가 생성 함수
        self.views = self.views + 1
        self.save()


# Review의 사진 모델
class Photo(models.Model):
   review = models.ForeignKey(Review, on_delete=models.CASCADE) # 해당 댓글
   restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE) # 해당 식당
   images = models.ImageField(upload_to='images/', blank=True, null=True) # 이미지들


# 히스토리 모델
class History(Base):
    user = models.ForeignKey(User, on_delete=models.CASCADE) # 사용자
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE) # 조회한 식당