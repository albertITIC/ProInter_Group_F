from django.urls import path
from .views import register_user, user_info, change_password

urlpatterns = [
    path('me/', user_info, name='user_info'),
    path('register/', register_user, name='register'),
    path('change-password/', change_password, name='change_password'),
]
