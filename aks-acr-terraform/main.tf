provider "azurerm" {
  features {}
  subscription_id = "009bc2c5-6136-4da6-b867-adaea6116a69"
}

resource "azurerm_resource_group" "rg" {
  name     = "devops-rg"
  location = "East US"
}

resource "azurerm_container_registry" "acr" {
  name                = "amishacr"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Basic"
  admin_enabled       = true
}

resource "azurerm_kubernetes_cluster" "aks" {
  name                = "amishaks"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "loginappdns"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_B2s"
  }

  identity {
    type = "SystemAssigned"
  }

  tags = {
    environment = "Dev"
  }
}

resource "azurerm_role_assignment" "aks_pull_acr" {
  principal_id                      = azurerm_kubernetes_cluster.aks.kubelet_identity[0].object_id
  role_definition_name              = "AcrPull"
  scope                             = azurerm_container_registry.acr.id
  skip_service_principal_aad_check = true
}

