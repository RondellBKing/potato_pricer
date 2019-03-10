from django.shortcuts import render

from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Pricer


class PricerView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Pricer.objects.all()


def index(request):
    return render(request, 'frontend/index.html')