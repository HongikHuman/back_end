from .models import User, School, Restaurant, Wish
from rest_framework import serializers

from django.contrib.auth import authenticate, login


# 유저 생성 serializer
class UserCreateSerializer(serializers.ModelSerializer):
    school = serializers.CharField()

    class Meta:
        model = User
        fields = ["id", "name", "username", "school", "password", "email"]

    def create(self, validated_data):
        user = User.objects.create_user(
            name = validated_data['name'],
            username = validated_data['username'],
            password = validated_data['password'],
            school = School.objects.get(name_k=self.initial_data['school']),
            email = validated_data['email'],
        )
        return user


# 로그인 serializer
class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=20)
    password = serializers.CharField(max_length=20)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("오류입니다.")


# 음식점(전체정보) serializer
class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'


# 대학맛집 -> 특정학교 serializer
