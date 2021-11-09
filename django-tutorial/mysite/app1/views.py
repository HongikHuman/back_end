from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate, login

from .models import User, School, Restaurant
from .serializers import UserCreateSerializer, UserLoginSerializer, RestaurantSerializer

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


# 대학맛집 -> 해당학교 -> 특정식당



# 대학맛집 -> 해당학교 -> 세부페이지
#class schooldetailAPIView(APIView):
#    def get(self, ):