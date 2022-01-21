# Pipe in a Pipe
### Overview

Our app will build and deploy applications hosted in Github. The app will provide information about the deploying process for users to see, e.g. provisioning servers, success or failure.

It will be initially compatible with Flask and React apps. We will use Terraform to provision the AWS infrastructure required to run our app. We will run the front end with React and the backend with Flask.

### How it Works

Users accessing our app will be able to input a link to a github repository. Our app will take the code, and create a Docker container and install the necessary dependencies to run the desired application. The container will run the app and then return a URL so that the user can access their app.

***References to System Design***

1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 