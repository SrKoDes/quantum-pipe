output "instance_pub_ip" {
  description = "Private IP of the EC2"
  value       = aws_instance.EC2.public_ip
}