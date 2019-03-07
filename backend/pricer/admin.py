from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Pricer


class TodoAdmin(admin.ModelAdmin):
    list_display = ('date', 'client_id', 'prdct_id', 'price', 'quantity', 'validated')


# Register your models here.
admin.site.register(Pricer, TodoAdmin)  # add this
