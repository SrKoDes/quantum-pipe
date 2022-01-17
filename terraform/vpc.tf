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
  public_key = "
  -----BEGIN RSA PUBLIC KEY-----
MIIBigKCAYEAnaaVQPMvKq4EL9CJTmdnRtz03ucviFTaRE/y6OkYbWx6VnB8fdpT
xbWdomWNjjDBR9TV12HzkCmZxmW3NEnOMiJyKk34IhxaEVDp36H0hoeAZzrKRJlP
EnKQGWwTdQevbHmMw29a1DWwKUF2CCMoq4+rjR3HyJoNVmYorINTIKLF1KVye+BP
cKe2UaQygERnLcmakYqXYqaUDxSMhG/6RmSxIhkUZ2rfo2Qa3DtOfVLbuS5fKZK2
5/tBZG/yVqdkgQ0J4KRirLmcCPSl3dvSxruN8FU+aSJI4qOhjPWmjZZDW8CmNSTT
tIm33+QsjpdakqGXyrkaavfNnNKW4HkRkF3wEMNEk0fn6UtU2OsWoDwS7SsfCiKz
gxskmbVmKJEo8SDJh59upUSyE5CTQI0stKHHvkLQLWHMm2eu3BGz3jdZDSV1ThAl
v1IG9YvHFsx2KJnOn21edJo5O9IFVyRVGh2XHh+Wyl1+2MGdpINQv6xt5jwbnQEy
kb36yqTTRdXfAgMBAAE=
-----END RSA PUBLIC KEY-----
  "
}