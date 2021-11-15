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
        

# 대학맛집 -> 특정학교 serializer
class SelectSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ['__all__']

# 맛집 정보 serializer
class RestaurantInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = '__all__'

# 리뷰수 serializer
class ReviewCntSerializer(serializers.ModelSerializer):
    reviewCnt = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ['restaurant']

    def get_reviewCnt(self, obj):
        reviews = Review.objects.filter(restaurant=obj.restuarant)
        cnt = reviews.count()
        return cnt

# Likesornot serializer
class LikesOrnotSerializer(serializers.ModelSerializer):
    Ornot = serializers.SerializerMethodField()

    class Meta:
        model = Res_like
        fields = '__all__'

    def get_Ornot(self, obj):
        if Res_like.objects.filter(user=obj.user)&Res_like.objects.filter(restuarant=obj.restuarant).exists():
            return True
        else:
            return False

# Wishornot serializer
class WishOrnotSerializer(serializers.ModelSerializer):
    Ornot = serializers.SerializerMethodField()

    class Meta:
        model = Wish
        fields = '__all__'

    def get_Ornot(self, obj):
        if Wish.objects.filter(user=obj.user)&Wish.objects.filter(restuarant=obj.restuarant).exists():
            return True
        else:
            return False

 # 히스토리 serializer
class HistoryListSerializer(serializers.ModelSerializer):
    #historyList = serializers.SerializerMethodField()

    class Meta:
        model = History
        fields = '__all__'


class RestaurantShowSerializer(serializers.ModelSerializer):
    reviewList = ReviewListSerializer(read_only=True)
    getinfo = RestaurantInfoSerializer(read_only=True)
    reviewCnt = ReviewCntSerializer(read_only=True)
    wishOrnot = WishOrnotSerializer(read_only=True)
    likeOrnot = LikesOrnotSerializer(read_only=True)
