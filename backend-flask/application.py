from subprocess import list2cmdline
from flask import Flask ,render_template, request,redirect, Response, jsonify
import handler
import json
import ast
import requests
import os

application = Flask(__name__)

session_username = ""

# @application.route('/')
# def home():
#     handler.build_app()
#     render_template('home.html')



# Pulls username
@application.route('/login')
def get_username():

    request_data = request.get_json()
    print(request_data)
    # session_username = 
    return session_username

# Displays dashboard by pulling data from GitHub API using session_username.
@application.route('/dashboard')
def display_dashboard():

    list_of_repos = handler.get_repos(f'https://api.github.com/users/{session_username}/repos')
    user_info = handler.get_user_info(f'https://api.github.com/users/{session_username}')

    return list_of_repos, user_info


@application.route('/getGithubToken')
def exchange_token():
    exchange_code = str(request.args.get('code'))
    json_fcm_data = {'client_id': os.environ.CLIENT_ID_OAUTH, 'client_secret': os.environ.CLIENT_SECRET_OAUTH, 'code': exchange_code}
    json_header = {'Accept': 'application/json'}
    response = requests.post("https://github.com/login/oauth/access_token", headers=json_header, json=json_fcm_data)
    responsejson = ast.literal_eval(response.text)
    print(os.environ)
    for item in responsejson.keys():
        print(item)
   
        if("access_token" ):
            print("success")
            return redirect('http://localhost:3000/dashboard')
        
        else:
            print("error")
            return redirect('http://localhost:3000/')
    #return responsejson

# Deploys the customer's app
@application.route('/start_deployment')
def deploy_app():

    handler.build_app()