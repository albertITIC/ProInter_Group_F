from rest_framework import generics
from .models import Producto
from .serialitzers import ProductoSerializer

# Vista para LISTAR TODOS los productos
class ProductoList(generics.ListAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

# Vista para DETALLES de un producto específico (por ID)
class ProductoDetail(generics.RetrieveAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    lookup_field = 'id_product'