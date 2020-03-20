import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from pprint import pprint
import nexmo

load_dotenv()

nexmo_api_key = os.getenv('NEXMO_API_KEY')
nexmo_api_secret = os.getenv('NEXMO_API_SECRET')
nexmo_number = os.getenv('NEXMO_NUMBER')
client = nexmo.Client(key=nexmo_api_key, secret=nexmo_api_secret)

app = Flask(__name__)

@app.route('/webhooks/inbound-sms', methods=['GET', 'POST'])
def inbound_sms():
    print('Inbound SMS recieved')
    if request.is_json:
        pprint(request.get_json())
    else:
        data = dict(request.form) or dict(request.args)
        pprint(data)

        # Send a reply SMS
        to_number = data.get('msisdn')
        responseData = client.send_message(
            {
                'from': nexmo_number,
                'to': to_number,
                'text': 'A text message sent using the Nexmo SMS API'
            }
        )

        if responseData['messages'][0]['status'] == '0':
            print('Message sent successfully.')
        else:
            print(f"Message failed with error: {responseData['messages'][0]['error-text']}")

    return ('', 204)

app.run(port=8080)

