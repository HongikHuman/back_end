from django.shortcuts import render, get_object_or_404

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate, login

from .models import User, School, Restaurant, Review
from .serializers import UserCreateSerializer, UserLoginSerializer, RestaurantSerializer, WishSerializer, ReviewListSerializer, ReviewCreateSerializer
from .serializers import ReviewUpdateSerializer

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


# # 리뷰 작성하기
# class ReviewCreateAPIView(APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = ReviewCreateSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save() # db에 저장
#             print("저장 완료")
#             return Response(serializer.data, status=201)
#
#
# # 리뷰하나 가져오기 & 수정하기 & 삭제하기
# class ReviewUpdateAPIView(APIView):
#     def get_object(self, pk):
#         return get_object_or_404(Review, id=pk)
#
#     def get(self, request, pk, format=None):
#         review = self.get_object(pk)
#         serializer = ReviewListSerializer(review)
#         return Response(serializer.data)
#
#     def put(self, request, pk):
#         review = self.get_object(pk)
#         serializer = ReviewUpdateSerializer(review, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)
#
#     def delete(self, request, pk):
#         review = self.get_object(pk)
#         review.delete()
#         return Response(status=201)

# 대학맛집 (대학 입력시 대학 정보 get 해주기)
class SchoolAPIVview(APIView):
    def get(self, request, format=None):
        school = request.data
        serializers = SelectSerializer(school)
        return Response(serializers.data)


#히스토리 Base 상속 수정해야함
class HistoryAPIView(APIView):
    def get(self, request, format=None):
        if request.user.is_authenticated:
            user = request.user
            #유저가 접속한 url restuarant/pk/ timestamp 찍힘 클릭시 history 모델에 post 돼야함
            #user.timestamp / 접속한 음식저 pk post
            historyList = History.objects.filter(user=user).order_by('-timestamp')
            serializers = HistoryListSerializer(historyList, many=True)
            return Response(serializers.data)

# 맛집랭킹
class RankingAPIView(APIView):

    def get(self, request, format=None):
        restuarants = Restaurant.objects.all().order_by('-likeCount')
        serializers = RestaurantSerializer(restuarants)
        return Response(serializers.data)

# 핫게시판
class HotReviewAPIView(APIView):

    def get(self, request, format=None):
        resviews = Review.objects.all().order_by('-agree')
        serializers = ReviewListSerializer(resviews)
        return Response(serializers.data)

#세부페이지
class RestuarantAPIView(APIView):

    def get_object(self, pk):
        restuarant = get_object_or_404(Restaurant, pk=pk)
        return restuarant

    def get(self, request, pk, format=None):
        restuarant = self.get_object(pk)
        serializer = RestaurantShowSerializer(restuarant)
        return Response(serializer.data)
