from django.contrib import admin
from django.urls import path, include
from cart.views import UserCreate, CustomTokenObtainPairView, CartDetail, AddToCart
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('register/', UserCreate.as_view()),
    path('login/', CustomTokenObtainPairView.as_view()),
    path('cart/', CartDetail.as_view()),
    path('add-to-cart/<int:product_id>/', AddToCart.as_view()),
    path('products/', include('productes.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # Importante para el desarrollo de las imágenes!
