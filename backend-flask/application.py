from subprocess import list2cmdline
from flask import Flask, render_template, request, Response, jsonify
import handler
import json
import requests

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
    json_fcm_data = {'client_id': '0923bbef1520f84ac3e1', 'client_secret': '9e75000e02defa3b5e7abe31ccb4fc16860370b7', 'code': exchange_code}
    json_header = {'Accept': 'application/json'}
    response = requests.post("https://github.com/login/oauth/access_token", headers=json_header, json=json_fcm_data)
    return render_template('home.html', r=response.text)

# Deploys the customer's app
@application.route('/start_deployment')
def deploy_app():

    handler.build_app()