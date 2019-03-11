from django.core.management.base import BaseCommand
from pricer.models import Pricer, Client, Product
import pandas as pd


class LoadModelsFromXLS(BaseCommand):
    help = 'Load models from csv'
    data_file = '/Users/rondellbking/Desktop/ms_case/potato_pricer/backend/2_Data_Files.xlsx'
    excel_dict = pd.read_excel(data_file, sheet_name=['Potatoes_Info', 'Client_Info', 'Potatoes_Positions'])
    prices = excel_dict['Potatoes_Positions']
    clients = excel_dict['Client_Info']
    potatoes = excel_dict['Potatoes_Info']

    prices['Quantity'].replace('[NULL]', 0, inplace=True)
    prices.dropna()

    prices_json = prices.to_dict('records')
    clients_json = clients.to_dict('records')
    potatoes_json = potatoes.to_dict('records')

    for row in prices_json:
        Pricer(prdct_id=row.get('Product ID', ''),
        date = row.get('Date'),
        validated = True,
        client_id = row.get('Client ID', ''),
        price = row.get('Price', 0.0),
        quantity = row.get('Quantity', 0)
        ).save()

    for row in clients_json:
        Client(client_id=row.get('Client ID', ''),
        first_name=row.get('First Name ', ''),
        last_name=row.get('Last Name', ''),
        type=row.get('Client Type', ''),
        location=row.get('Client Location', ''),
        ).save()

    for row in potatoes_json:
        Product(prdct_id=row.get('Product ID', ''),
        country = row.get('Country', ''),
        maturity = row.get('Maturity', ''),
        name = row.get('Variety Name', ''),
        skin_color = row.get('Colour of skin', ''),
        height = row.get('Height of plants', ''),
        ).save()

