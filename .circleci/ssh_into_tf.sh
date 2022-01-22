#!/bin/bash

cd backend-flask
docker build -t flask-container .
docker run -d -p 5000:5000 flask-container