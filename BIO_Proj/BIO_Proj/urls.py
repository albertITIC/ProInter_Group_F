"""
URL configuration for BIO_Proj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from cart.views import (ProductList, UserCreate, CartDetail, 
                   AddToCart, CustomTokenObtainPairView)
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('register/', UserCreate.as_view()),
    path('login/', CustomTokenObtainPairView.as_view()),
    path('cart/', CartDetail.as_view()),
    path('add-to-cart/<int:product_id>/', AddToCart.as_view()),
    path('auth/', include('authstore.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)