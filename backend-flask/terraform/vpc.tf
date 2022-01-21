# VPC
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc


# CREATE EC2    
resource "aws_instance" "EC2" {
  ami                    = "ami-01f096662a5ade245"
  instance_type          = "t2.micro"
  key_name               = "user_app_key"
  vpc_security_group_ids = [aws_security_group.ssh.id, aws_security_group.flask.id]

  tags = {
    Name = "Pipe In a Pipe"
  }
}

resource "aws_security_group" "ssh" {
  egress = [
    {
      cidr_blocks      = ["0.0.0.0/0", ]
      description      = ""
      from_port        = 0
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "-1"
      security_groups  = []
      self             = false
      to_port          = 0
    }
  ]
  ingress = [
    {
      cidr_blocks      = ["0.0.0.0/0", ]
      description      = ""
      from_port        = 22
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 22
    }
  ]
}

resource "aws_security_group" "flask" {
    
  ingress = [
    {
      cidr_blocks      = ["0.0.0.0/0", ]
      description      = ""
      from_port        = 5000
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 5000
    }
  ]
}

resource "aws_key_pair" "deployer" {
  key_name   = "user_app_key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCkx0GnxjRHSkBBKOisDeRNHX9JOz2sMrF7dJk9Qhboz3f82Bc+hHkENSMtpkKxaTYeDX5pprezF3DsW/XwDCo4Ffp5LdFgEd+JEUSAQDM8aL3VEO4Q/IlHTY07KyMYpDnqEorrdFD2IvoahGrtnklsi1fa9Ljko85sjfqhIr34rOLnFb5JA4k6zjF34nA1obA6DSoVi2bRUS2QHMLB6UTqTu6UB2QvE9LF1QVQCqrguNvWbX85bOuArlS9xrf0RviUpWz23nl3Fmj0mco4CifPZIAqeCTdPAX7GWGJQzhy7cQ1StKgn27fmMwOB9L7P/X9/UCmU3Wcn5Ypl/K67OcvaCMOn8XlI+jQnNaV6dqaCMyP/NvYvXsZnvJbJx/hA6YRIcHFpAI+pwKuMoQpvv19yAaacQwoZiNr8Gr9r0NInnatBIj1xHDTDqhiVD7u/CL5CPZf55W7U1Pgp8feFkafCV3eex5rnb4W3h8KxkvNFdjPyPRPu0+2Q1N2gHvSNas= hev@Kos-MacBook-Pro"
}