#!/bin/bash

cd terraform
terraform init
terraform apply --auto-approve

# need to ssh-keygen -f "filepath/filename" to create pub and prviate. create ec2 with pub, use private to ssh"

# ssh -i terraform-keys -o "StrictHostKeyChecking no" ubuntu@$(terraform output -raw instance_pub_ip)
scp -i user_app_key -o "StrictHostKeyChecking no" ../Dockerfile ubuntu@$(terraform output -raw instance_pub_ip):/home/ubuntu
ssh -i user_app_key ubuntu@$(terraform output -raw instance_pub_ip) 'bash -s' < build.sh $1 $2