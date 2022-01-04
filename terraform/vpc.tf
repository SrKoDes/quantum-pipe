# VPC
# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc


# CREATE EC2    
resource "aws_instance" "EC2" {
  ami                    = "ami-04505e74c0741db8d"
  instance_type          = "t2.micro"

  tags = {
    Name = "Pipe In a Pipe"
  }
}