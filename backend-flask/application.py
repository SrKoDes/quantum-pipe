from flask import Flask, render_template, request, Response
import requests
import handler
import json

application = Flask(__name__)

session_username = ""

# @application.route('/')
# def home():
#     handler.build_app()
#     render_template('home.html')

@application.route('/getGithubToken')
def exchange_token():
    exchange_code = request.args.get('code')
    github_token_exhange = requests.post('https://github.com/login/oauth/access_token', data= {"code":exchange_code})
    print(exchange_code)
    
    return "hello"


# Pulls username
@application.route('/signin')
def get_username():
    request_data = request.get_json()
    print(request_data)
    # session_username = 
    return session_username

#displays dashboard using username
@application.route('/dashboard')
def display_dashboard():
    # test
    'https://api.github.com/users/hector6921/repos'