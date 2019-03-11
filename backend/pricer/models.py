from django.db import models


class Pricer(models.Model):
    prdct_id = models.CharField(max_length=120)
    date = models.DateField()
    validated = models.BooleanField(default=False)
    client_id = models.CharField(max_length=120)
    price = models.FloatField()
    quantity = models.IntegerField()

    def _str_(self):
        return self.title


class Product(models.Model):
    prdct_id = models.CharField(max_length=120)
    country = models.CharField(max_length=120)
    maturity = models.CharField(max_length=120)
    name = models.CharField(max_length=120)
    skin_color = models.CharField(max_length=120)
    height = models.CharField(max_length=120)

    def _str_(self):
        return self.title


class Client(models.Model):
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    type = models.CharField(max_length=120)
    client_id = models.CharField(max_length=120)
    location = models.CharField(max_length=120)

    def _str_(self):
        return self.title