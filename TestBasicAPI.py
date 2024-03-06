from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from fastapi.middleware.cors import CORSMiddleware
import subprocess, json

class Link():
    def __init__(self, route, title):
        self.route = route
        self.title = title
    def toJSON(self):
        return json.dumps(self,default=lambda o: o.__dict__,
                          sort_keys=True,indent=4)

Home = Link("", "Home")
P2 = Link("page2", "Page with Just Headers")
P3 = Link("cards", "Cards")
        
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/string/', methods=['GET'])
def get_string():
    return "Simple String"

@app.route('/strings/', methods=['GET'])
def get_lists():
    return ['Res_1','Res_2','Res_3','Res_4','Res_5','Res_6']

@app.route('/links/', methods=['GET'])
def get_links():
    return [Home.toJSON(), P2.toJSON(), P3.toJSON()]

if __name__ == '__main__':
    app.run()
