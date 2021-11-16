from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registerAPIView.as_view()),
    path('login/', views.loginAPIView.as_view()),

    path('univ/<int:pk>/', views.schoolAPIView.as_view()),

    path('my/wishes/', views.WishAPIView.as_view()),

    path('my/review/', views.ReviewListAPIView.as_view()),
    path('review/write/<int:pk>/', views.ReviewCreateAPIView.as_view()), #인자는 식당id값
    path('review/<int:pk>/', views.ReviewDetailAPIView.as_view()), # 인자는 리뷰id값
]