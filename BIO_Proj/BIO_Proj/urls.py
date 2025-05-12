from django.contrib import admin
from django.urls import path
from cart.views import (ProductList, UserCreate, CartDetail, 
                   AddToCart, CustomTokenObtainPairView)
from .views import ProductoList, ProductoDetail
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    # path('products/', ProductList.as_view()),
    path('productos/', ProductoList.as_view(), name='producto-list'),
    path('productos/<int:id_product>/', ProductoDetail.as_view(), name='producto-detail'),
    path('register/', UserCreate.as_view()),
    path('login/', CustomTokenObtainPairView.as_view()),
    path('cart/', CartDetail.as_view()),
    path('add-to-cart/<int:product_id>/', AddToCart.as_view()),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)