# Problem 2 from  MS Case Study
### Rondell King

I rebuilt the web application and added several enhancements.

In the initial submission, there was a single back end server using flask,
that hosted information via index.html.


Now I have overhauled the solution and implemented several frameworks.

* MVC/T [Model View Controller/Template]
* CRUD [Create Update Delete]
* DOM [Document Object Model]

I split the solution into a front end server, that hosts
the web content using the javascript Library -> React


#Back End Server
I used the python django web framework to create
and run a server. This server serves as the backend host
for any CRUD operations.

The backend endpoints are created using the viem model in django.

GET/PUT/DELETE/REQUESTS are accepted 
* http://127.0.0.1:8000/api/client
* http://127.0.0.1:8000/api/product
* http://127.0.0.1:8000/pricer

Python and Django come with a pre-installed sqllite database.
I use that db to seed and store the data provided in the excel sheets.


![png](/Potato Pricing.png)

```python
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

```







