from django.urls import path
from .views import ProductList, ProductDetail, CartDetail, AddToCart

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('my-cart/', CartDetail.as_view(), name='my-cart'),
    path('add/', AddToCart.as_view(), name='add-to-cart'),
]
