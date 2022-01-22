# Pipe in A Pipe

### Use

Pipe in A Pipe is an application that enables developers to rapidly deploy their applications. Using application code hosted in Github, Pipe in A Pipe will provision and configure infrastructure to host the application.

### Requirements

Pipe in A Pipe can currently serve **Flask** applications. The Flask configuration file must be named `application.py` and be placed in the root directory.

### End User Guide

The User will log into the Pipe in A Pipe website with their Github account. They will be redirected to a page listing all of their Github repos. They can select the repository hosting the application they would like to deploy. The requirements listed in the previous section must be adhered to, otherwise Pipe in A Pipe will be unable to complete the deployment. Once the deployment of the application is complete, a URL will be given to the User to view their application. The User is also able to view previous deployments of applications.

### System Guide

Pipe in A Pipe is comprised of a `React` frontend and `Flask` backend and utilizes `Terraform` and `Docker` for not only the infrastructure of the served application, but also Pipe in A Pipe.

#### FRONTEND
To initiate React:
```
npx run start 
```
The frontend is responisble for allowing the user to connect their github account with our app.  It then proceeds to show the user their repos and give them the opportunity to select the repo they would wand to deploy

#### BACKEND
To initiate Flask:
```
cd backend-flask
pip3 install requirements.txt
FLASK_APP=application.py flask run
```
The backend is responsible for the deployment of the User's application. There are three `.py` files in the `backend-flask` directory. `application.py` is the Flask configuration file. `handler.py` runs the data processing required by the front end. `scripter.py` contains the function `build_app()` which is responsible for deploying the User's application. 

The function takes in two arguments, the URL to the github repository hosting the application code, and the name of the framework of the application. The function begins by parsing the repository name from the URL. For example, if the URL is `https://github.com/example-user/example-app.git`, `example-app` will be saved as a variable `repo_name`.

From there, the function calls a shell script, `provision.sh`. This script will initiate an EC2 instance using the `terraform` directory. The Dockerfile to containerize the User's application is then copied over to the EC2 instance and then the script, `build.sh` is run on the EC2 instance.

`build.sh` will clone the repository with the User's application code and take the steps necessary to dockerize the application and serve the container.

**TERRAFORM**

We have two sets of Terraform files. We have terraform files that will provision and configure Pipe in A Pipe as well as the User's application. Currently, the Terraform configuration files will only build an EC2 instance for both infrastructures. The plan in the future is to develop a VPC to host the entire of Pipe in A Pipe as well as the User's application.

**DOCKER**

Our Dockerfiles are currently only used to containerize the User's application, with compatability with Flask and React applications. Our Dockerfiles get copied over to the EC2 that will host the User's application and are executed using the `build.sh` script.

**MONITORING**

Our file is monitored with AWS cloudwatch.  A cloudwatch alarm was made that monitored the CPU usage.  It's connected with an SNS topic named CPU that the team subscribed to.  Once the CPU usage passes the threshold capacity we set an email alert should be sent.  We also plan using LogRocket for monitoring the frontend as well.

**TECHNOLOGIES USED**
- React js
- Material-UI
- Flask
- Python
- Terraform
- AWS
- Docker
- CircleCI

### Contributors

- Hector Rodriguez
- Ian Mitchell
- Jodi Pierre-Louis
- Kohiin Desravines
