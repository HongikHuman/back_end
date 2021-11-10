from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate, login

from .models import User, School, Restaurant
from .serializers import UserCreateSerializer, UserLoginSerializer, RestaurantSerializer, WishSerializer, ReviewListSerializer, ReviewCreateSerializer

# Create your views here.

# 회원가입 view
class registerAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # db 저장
            return Response(serializer.data, status=201)

# 로그인 view
class loginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data
            return Response(serializer.data, status=201)


# 대학맛집 -> 해당학교
class schoolAPIView(APIView):
    def get(self, request, pk, format=None): # pk: name_k(학교 영문 이름)
        school = School.objects.get(name_e=pk)
        restaurants = Restaurant.objects.filter(nearby_schools=school)
        serializers = RestaurantSerializer(restaurants, many=True) # many=True 없으면 queryset 오류 뜸
        return Response(serializers.data) # 해당 학교맛집을 맛집이에요 역순으로 json데이터 반환


# 찜한 맛집
class WishAPIView(APIView):
    def get(self, request, format=None):
        if request.user.is_authenticated:
            user = request.user
            wishes = user.wish_set.all()
            serializers = WishSerializer(wishes, many=True)
            return Response(serializers.data)


# 작성한 리뷰 전체 보기
class ReviewListAPIView(APIView):
    def get(self, request, format=None):
        if request.user.is_authenticated:
            user = request.user
            reviews = user.review_set.all()
            serializers = ReviewListSerializer(reviews, many=True)
            return Response(serializers.data)


# 리뷰 작성하기
class ReviewCreateAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ReviewCreateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save() # db에 저장
            print("저장 완료")
            return Response(serializer.data, status=201)