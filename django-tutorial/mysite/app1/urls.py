from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registerAPIView.as_view()),
    path('login/', views.loginAPIView.as_view()),

    path('univ/<str:pk>/', views.schoolAPIView.as_view()),

    path('my/wishes/', views.WishAPIView.as_view()),

    path('my/review/', views.ReviewListAPIView.as_view()),
    #path('review/create/<int:id>/', views.ReviewCreateAPIView.as_view()),
    #path('review/detail/<int:id>/', views.ReviewUpdateAPIView.as_view()),
    
    path('places/<int:id>/', views.RestuarantAPIView.as_view()),
    path('places/rank/', views.RankingAPIView.as_view()),
    path('history/', views.HistoryAPIView.as_view()),
    path('univ/', views.SchoolAPIVview.as_view()),

]
