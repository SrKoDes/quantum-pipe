output "instance_pub_ip" {
  description = "Public IP of the EC2"
  value       = aws_instance.EC2-main.public_ip
}


output "terraform-instance_pub_ip" {
  description = "Public IP of the EC2"
  value       = aws_instance.EC2-terraform.public_ip
}