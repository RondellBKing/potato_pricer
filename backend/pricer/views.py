from django.shortcuts import render

from rest_framework import viewsets
from .serializers import PriceSerializer, ClientSerializer, ProductSerializer
from .models import Pricer, Client, Product


class PricerView(viewsets.ModelViewSet):
    serializer_class = PriceSerializer
    queryset = Pricer.objects.all()


class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

# def index(request):
#     return render(request, 'frontend/index.html')