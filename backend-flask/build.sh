#!/bin/bash

git clone $1
cd $2
FLASK_APP=application.py flask run &
