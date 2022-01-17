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

resource "aws_key_pair" "deployer" {
  key_name   = "app_key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCdppVA8y8qrgQv0IlOZ2dG3PTe5y+IVNpET/Lo6RhtbHpWcHx92lPFtZ2iZY2OMMFH1NXXYfOQKZnGZbc0Sc4yInIqTfgiHFoRUOnfofSGh4BnOspEmU8ScpAZbBN1B69seYzDb1rUNbApQXYIIyirj6uNHcfImg1WZiisg1MgosXUpXJ74E9wp7ZRpDKARGctyZqRipdippQPFIyEb/pGZLEiGRRnat+jZBrcO059Utu5Ll8pkrbn+0Fkb/JWp2SBDQngpGKsuZwI9KXd29LGu43wVT5pIkjio6GM9aaNlkNbwKY1JNO0ibff5CyOl1qSoZfKuRpq982c0pbgeRGQXfAQw0STR+fpS1TY6xagPBLtKx8KIrODGySZtWYokSjxIMmHn26lRLITkJNAjSy0oce+QtAtYcybZ67cEbPeN1kNJXVOECW/Ugb1i8cWzHYomc6fbV50mjk70gVXJFUaHZceH5bKXX7YwZ2kg1C/rG3mPBudATKRvfrKpNNF1d8= hev@Kos-MacBook-Pro"
}