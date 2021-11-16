from .models import User, School, Restaurant, Wish, Review
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


# 찜한 맛집 serializer
class WishSerializer(serializers.ModelSerializer):
    restaurant = RestaurantSerializer(read_only=True)

    class Meta:
        model = Wish
        fields = ['restaurant']


# 리뷰 serializer
class ReviewListSerializer(serializers.ModelSerializer):
    restaurant = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ['restaurant', 'user', 'views', 'title', 'contents',
                    'authenticated', 'likes']

    def get_restaurant(self, obj):
        return obj.restaurant.name # restaurant는 name 반환

    def get_user(self, obj):
        return obj.user.username # user는 username 반환


# 리뷰 create serializer
class ReviewCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ['restaurant', 'user', 'title', 'contents']

    def create(self, validated_data):
        restaurant = Restaurant.objects.get(id=self.initial_data['restaurant'])
        #print(restaurant, type(restaurant))
        user = User.objects.get(id=self.initial_data['user'])
        #print(user, type(user))

        # 인증 회원이 작성한 리뷰일시 -> authenticated = True로 바꾸기
        school_ename = user.school.name_k
        auth = 0
        if restaurant.nearby_schools.get(name_k=school_ename):
            auth = 1
        review = Review.objects.create(restaurant = restaurant,
                        user = user,
                        title = validated_data['title'],
                        contents = validated_data['contents'],
                        authenticated = auth)
        return review


# 리뷰 update serializer
class ReviewUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['title', 'contents']