terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }

#   backend "s3" {
#     bucket = "circle-ci-backend-pipe-in-a-pipe"
#     key    = "terraform/pipe-in-a-pipe/terraform.tfstate"
#     region = "us-east-1"
#   }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
  default_tags {
    tags = {
      Deployment = "Pipe In A Pipe"
      Team       = "Kura Team 6"
    }
  }
}