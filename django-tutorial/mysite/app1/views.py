from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate, login

from .models import User, School
from .serializers import UserCreateSerializer, UserLoginSerializer

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