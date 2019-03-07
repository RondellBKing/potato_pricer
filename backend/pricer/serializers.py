# todo/serializers.py

from rest_framework import serializers
from .models import Pricer


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pricer
        fields = ('date', 'client_id', 'prdct_id', 'price', 'quantity', 'validated')
