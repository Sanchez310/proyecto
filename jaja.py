import requests
api_key = 'TU_CLAVE_DE_API'
query = 'aves'
url = f'https://pixabay.com/api/?key={api_key}&q={query}'
response = requests.get(url)
# Verificar si la solicitud fue exitosa (código de estado 200)
if response.status_code == 200:
    # Analizar la respuesta JSON
    data = response.json()
    # Procesar los resultados
    for image in data['hits']:
        image_url = image['webformatURL']
        print(image_url)
else:
    print('Error al realizar la solicitud a la API de Pixabay.')