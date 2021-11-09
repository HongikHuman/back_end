from django.contrib import admin
from .models import User, School, Restaurant, Wish

# Register your models here.


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username']


@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    list_display = ['id', 'name_k', 'name_e', 'location', 'loc_x', 'loc_y']


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category', 'loc_x', 'loc_y', 'likeCount', 'nearby_schools']
    filter_horizontal = ('nearby_schools',)


@admin.register(Wish)
class WishAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'restaurant']