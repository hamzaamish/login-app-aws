module "eks_oidc_iam_role" {
  source  = "terraform-aws-modules/iam/aws//modules/iam-assumable-role-with-oidc"
  version = "5.59.0"

  create_role                   = true
  role_name                     = "eks-ecr-access-role"
  provider_url                  = module.eks.oidc_provider
  role_policy_arns              = [
    "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  ]

  tags = {
    Name        = "eks-ecr-access-role"
    Environment = var.environment
  }
}

