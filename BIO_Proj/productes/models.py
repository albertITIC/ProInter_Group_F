from django.db import models

# Create your models here.
class Producto(models.Model):
    CATEGORIA_CHOICES = [
        ('bones', 'Huesos'),
        ('embriones', 'Embriones diafanizados'),
    ]

    id_product = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    category = models.CharField(max_length=20, choices=CATEGORIA_CHOICES)
    image_url = models.CharField(max_length=200, blank=True) # URLField

    def __str__(self):
        return self.nombre
