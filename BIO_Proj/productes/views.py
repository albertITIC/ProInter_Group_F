from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Producto
from .serializers  import ProductoSerializer

# Mostra tots els productes
@api_view(['GET'])
def lista_productos(request):
    productos = Producto.objects.all()
    serializer = ProductoSerializer(productos, many=True)
    return Response(serializer.data)

# Mostra els productes de categoría "bones"
@api_view(['GET'])
def productos_huesos(request):
    productos = Producto.objects.filter(category='bones')
    serializer = ProductoSerializer(productos, many=True)
    return Response(serializer.data)

# Mostra els productes de categoría "embriones"
@api_view(['GET'])
def productos_embriones(request):
    productos = Producto.objects.filter(category='embriones')
    serializer = ProductoSerializer(productos, many=True)
    return Response(serializer.data)