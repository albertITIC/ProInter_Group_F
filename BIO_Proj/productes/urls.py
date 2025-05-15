from django.urls import path
from .views import lista_productos, productos_huesos, productos_embriones, crear_producto, delete_product

urlpatterns = [
    path('all/', lista_productos, name='lista_productos'),
    path('bones/', productos_huesos, name='productos_huesos'),
    path('embriones/', productos_embriones, name='productos_embriones'),
    path('add_product/', crear_producto, name='crear_producto'),
    path('delete_product/<int:id_product>/', delete_product, name='delete_product'),

]

