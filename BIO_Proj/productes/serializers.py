from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    categoria_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Producto
        fields = [
            'id_product', 
            'name', 
            'description', 
            'price', 
            'stock', 
            'category',
            'categoria_display',
            'image_url',
        ]