import json
from flask import Flask, request
from locationdata import Location
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)


@app.route('/')
def index():
    return "Welcome"


@app.route('/beachdata', methods=['GET'])



def beachdata():
    query = str(request.args.get('query'))
    print(query)
    loc = Location(query)
    loc.get_weathermap_data()
    json_data = loc.get_json_data()
    loc.get_stormglass_data()
    return json.dumps(json_data)



app.run()
