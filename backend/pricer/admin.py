from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Pricer, Client, Product


class PricerAdmin(admin.ModelAdmin):
    list_display = ('date', 'client_id', 'prdct_id', 'price', 'quantity', 'validated')


class ProductAdmin(admin.ModelAdmin):
    list_display = ('prdct_id', 'country', 'maturity', 'name', 'skin_color', 'height')


class ClientAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'type', 'client_id', 'location')

# Register your models here.
admin.site.register(Pricer, PricerAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Product, ProductAdmin)
