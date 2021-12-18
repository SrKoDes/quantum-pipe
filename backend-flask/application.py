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
@application.route('/signin')
def get_username():
    request_data = request.get_json()
    print(request_data)
    # session_username = 
    return session_username

#displays dashboard using username
@application.route('/dashboard')
def display_dashboard():

    'https://api.github.com/users/hector6921/repos'