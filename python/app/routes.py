from app import app
from flask import Flask, request, jsonify
from pprint import pprint
from app.models.commands import Commands

@app.route('/webhooks/inbound-sms', methods=['GET', 'POST'])
def inbound_sms():
    print('Inbound SMS received')
    if request.is_json:
        pprint(request.get_json())
    else:
        data = dict(request.form) or dict(request.args)
        pprint(data)

        to_number = data.get('to')
        from_number = data.get('msisdn')
        message = data.get('text')
        
        print(f"to_number: {to_number}")
        print(f"from_number: {from_number}")
        print(f"message: {message}")

        Commands.handleCommand(to_number, from_number, message)

    return ('', 204)

