from subprocess import list2cmdline
from flask import Flask, render_template, request, Response
import handler
import json

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

# Deploys the customer's app
@application.route('/start_deployment')
def deploy_app():

    handler.build_app()
