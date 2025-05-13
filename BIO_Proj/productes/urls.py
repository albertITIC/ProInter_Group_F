from django.urls import path
from .views import lista_productos, productos_huesos, productos_embriones

urlpatterns = [
    path('all/', lista_productos, name='lista_productos'),
    path('bones/', productos_huesos, name='productos_huesos'),
    path('embriones/', productos_embriones, name='productos_embriones'),

]

