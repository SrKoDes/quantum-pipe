from subprocess import list2cmdline
from flask import Flask ,render_template,url_for, request,redirect, Response, jsonify
import handler
import json
import ast
import requests
from getUserData import get_user_data
from flask_cors import CORS,cross_origin 
from flask_socketio import SocketIO


application = Flask(__name__)
CORS(application)
socketio = SocketIO(application=application, cors_allowed_origins='*')
socketio=SocketIO(application)

session_username = ""

# @application.route('/')
# def home():
#     handler.build_app()
#     render_template('home.html')

profile_data = []

# Pulls username
@application.route('/login')
def get_username():

    request_data = request.get_json()
    print(request_data)
    # session_username = 
    return session_username

# Displays dashboard by pulling data from GitHub API using session_username.
@application.route('/dashboard', methods=["GET"])
@cross_origin()
def display_dashboard(auth_token):
    #list_of_repos = handler.get_repos()
    user_info = handler.get_user_info(auth_token)
    
    return {"body":user_info,"status":200}


@application.route('/getGithubToken')
def exchange_token():
    exchange_code = str(request.args.get('code'))
    json_fcm_data = {'client_id': '0923bbef1520f84ac3e1', 'client_secret': '9e75000e02defa3b5e7abe31ccb4fc16860370b7' ,'code': exchange_code}
    json_header = {'Accept': 'application/json'}
    response = requests.post("https://github.com/login/oauth/access_token", headers=json_header, json=json_fcm_data)
    responsejson = json.loads(response.text)
    
    if("access_token" in responsejson):
        display_dashboard(responsejson['access_token'])
        return redirect('http://localhost:3000/dashboard',)
        
    else:
        print("error")
        return redirect('http://localhost:3000/')
    #return responsejson

# Deploys the customer's app


@application.route('/start_deployment')
def deploy_app():

    handler.build_app()

if __name__ == '__main__':
    socketio.run(application, host='0.0.0.0', port=5000)