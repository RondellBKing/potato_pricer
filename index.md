# Problem 2 from  MS Case Study
### Rondell King

I rebuilt the web application and added several enhancements.

In the initial submission, there was a single back end server using flask,
that hosted information via index.html.

Now I have overhauled the solution and implemented several frameworks using
Django and React.

* Django
  * MVC/T [Model View Controller/Template]
  * DOM [Document Object Model]

* React
  * CRUD [Create Update Delete]
  * SPA [Single Page Web app]

![png](/Potato Pricing.png)

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

Here is a snippet of the database definition.
Defining the model here, along with the view and serializing the model,
allows my django server and case study data to be available via the REST API.
```python
#/ms_case/potato_pricer/backend/pricer/models.py
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
This is an example of the API returning data from sqlLite after being
loaded from the xls sheets provided.
```sh
curl -v http://localhost:8000/api/pricer/
```
[{"date":"2019-03-07","client_id":"123","prdct_id":"123","price":12.02,"quantity":500,"validated":true},
{"date":"2019-03-07","client_id":"58","prdct_id":"123","price":12.09,"quantity":100,"validated":false},]


To run the server, initialize a pipenv in the /ms_case/potato_pricer/backend/
folder and install all requirements.

After activating the pipenv (installing first if needed)
Next run the below

```python
python manage.py runserver
```

This will run our backend server.

#Front End Server

Now for the front end.
I used react.js to structure my single page web application.
I personally love REACT, its implementation design allows,
developers to put together the blocks for the app with alot
of freedom and customization. I used several third party addons as well.

If you want to build the front end server you will need 
* Node js [Required to run javascript, also comes with npm/npx]
* react-boostrap [Used for modern styling]
* react [Used to design and implement state in the web app]
* axios [Used for hash routing requests to the backend server]
* react-bootsrap-table
* webpack (used to bundle .js)
* babel (used to translate JSX into javascript)
```sh
npm install react
npm install react-boostrap
npm install react-boostrap-table
npm install axios

npm start
```
Now you will have a webpage running at 
http://localhost:3000/

The application is single page web app, with the navigation bar 
as the header. Content is rendered directly below, depending
on the users selection.

I believe this style is perfect for apps when veiwing and editing data
is the main use.

Using React and the DOM, I am 
able to creat components for the page,
and plug in components to format the look.

Functionality is as follows.
* Add Pricing
  * This is the main use and the goal of this project
  This component allows the user to insert rows of prices,
  the entered prices persist on the page until finally submitted to the server.
  Users can edit cells by double clicking. Users can also export the table as a csv.
  
* View Clients
  * Simple display of the total clients. Data provided by the team in the xls.
  This data can be exported to csv

* View Potatoes
  * Simple display of the total potato universe. Data provided by the team in the xls.
  This data can be exported to csv

* Contact
  * Simple contact page with email
  
* Login
  * If you click the user name in the top right, it takes you to the login screen.

* Home page
  * I believe this landing page is best served with market data.
    I am working on using react, axios and news-api, to retrieve live news.

**The React code is store in /frontend/src.**
**The landing page, is Main.js**

There is a video demo of the web page, on github,
/Users/rondellbking/Desktop/ms_case/potato_pricer/Potato-Pricer-Demo.mov

![png](/AddPrice_Web.png)
