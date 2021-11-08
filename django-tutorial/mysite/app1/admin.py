from django.contrib import admin
from .models import User, School

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username']

@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    list_display = ['id', 'name_k', 'name_e', 'location', 'loc_x', 'loc_y']