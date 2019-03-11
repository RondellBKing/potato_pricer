from rest_framework import serializers
from .models import Pricer, Client, Product


class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pricer
        fields = ('date', 'client_id', 'prdct_id', 'price', 'quantity', 'validated')


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('first_name', 'last_name', 'type', 'client_id', 'location')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('prdct_id', 'country', 'maturity', 'name', 'skin_color', 'height')
