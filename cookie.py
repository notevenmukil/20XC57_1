import requests
session = requests.Session()
response = session.get()

print(session.cookies.get_dict())