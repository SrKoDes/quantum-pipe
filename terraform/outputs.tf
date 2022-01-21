output "instance_priv_ip" {
  description = "Private IP of the EC2"
  value       = aws_instance.EC2.private_ip
}