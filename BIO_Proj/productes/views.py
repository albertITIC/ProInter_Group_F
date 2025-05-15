from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Producto
from .serializers  import ProductoSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status

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

# Per afegir un nou producte
@api_view(['POST'])
def crear_producto(request):
    serializer = ProductoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

# Eliminar un producte:
@api_view(['DELETE', 'POST'])  # <-- Acepta también POST
def delete_product(request, id_product):
    producto = get_object_or_404(Producto, id_product=id_product)
    producto.delete()
    return Response({"message": "Producto eliminado correctamente"}, status=status.HTTP_204_NO_CONTENT)