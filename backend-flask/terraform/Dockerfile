FROM python:latest
ARG FOLDER
WORKDIR /test
COPY ./${FOLDER}/requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY /${FOLDER} .
ENV FLASK_APP=application.py

ENTRYPOINT flask run --host=0.0.0.0