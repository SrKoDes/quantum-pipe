from flask import Flask, render_template, request, Response
import handler
import json

application = Flask(__name__)

@application.route('/')
def home():
    handler.build_app()
    render_template('home.html')
