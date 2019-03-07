from django.db import models

# Create your models here.
class Pricer(models.Model):
    prdct_id = models.CharField(max_length=120)
    date = models.DateField()
    validated = models.BooleanField(default=False)
    client_id = models.CharField(max_length=120)
    price = models.FloatField()
    quantity = models.IntegerField()

    def _str_(self):
        return self.title
