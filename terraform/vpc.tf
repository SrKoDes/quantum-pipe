# VPC
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc


# CREATE EC2    
resource "aws_instance" "EC2" {
  ami                    = "ami-01f096662a5ade245"
  instance_type          = "m5.large"
  key_name               = "app_key"
  vpc_security_group_ids = [aws_security_group.ssh.id, aws_security_group.flask.id, aws_security_group.react.id]

  tags = {
    Name = "Pipe In a Pipe"
  }
}

resource "aws_instance" "EC2" {
  ami                    = "ami-01f096662a5ade245"
  instance_type          = "m5.large"
  key_name               = "app_key"
  vpc_security_group_ids = [aws_security_group.ssh.id, aws_security_group.flask.id, aws_security_group.react.id]

  tags = {
    Name = "Terraform runner(small app deploy)"
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
resource "aws_security_group" "react" {
    
  ingress = [
    {
      cidr_blocks      = ["0.0.0.0/0", ]
      description      = ""
      from_port        = 3000
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      protocol         = "tcp"
      security_groups  = []
      self             = false
      to_port          = 3000
    }
  ]
}

resource "aws_key_pair" "deployer" {

  key_name   = "app_key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC10sjFVfmBPFQjFp2ESN+BLZc+AYMHrxEOopOri4j+BNpOxIzYLO7z/acAHKOwBSmwTc9wa3W9hnA+j6E+QTlrqGKxZnsZfrhuf9UoV57s2sB6l0b/Oab2sV6+a93Cq6CZtfPEVY4/rrYLMRTXRJWvY/aLOR1j3JSt/GPKUvrnrx+j88OtA3Cte6mI920INP0tUM6a5icQvZfLijx4xqpqrxNf7ug6FPNJ2TiKziGIzr0sIna7YTvAGXkq0PFLi/Z5lZh9rPfmQgJnkB090HLuvF9TVE1ySheifCZ1ohHCedcfNcyLjXDRLMjcmIbBeufrsqopA1oYsHbKNRLFQWbbfYPkQjN2Ao31Tg5WE8Q2/if2cA07l+BVsgE2yGvYlCcZBWUQJzAr2Qf07HFOghN3f7VSuAxRjN+/zuE8ZrDEpuMBOdCn4BVyF3xOup/CZQu6yHPwr63RPfReNhlu0jS0dW/t3U9xDBbyZbP5Q+FarlxEBxRJGbhWoDYLZKBVYl8="
}