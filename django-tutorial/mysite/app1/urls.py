from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registerAPIView.as_view()),
    path('login/', views.loginAPIView.as_view()),

    path('univ/<str:pk>/', views.schoolAPIView.as_view()),
]