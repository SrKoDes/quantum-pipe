# VPC
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc


# CREATE EC2    
resource "aws_instance" "EC2" {
  ami                    = "ami-01f096662a5ade245"
  instance_type          = "t2.micro"
  key_name               = "app_key"
  vpc_security_group_ids = [aws_security_group.ssh.id, aws_security_group.flask.id, aws_security_group.react.id]

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

# resource "aws_key_pair" "deployer" {

#   key_name   = "app_key"
#   public_key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINzLgRZaM0Uf40TAsXtzA47ry/X20+tD37RWzYs6n4OV hector_6921@hotmail.com"
# }