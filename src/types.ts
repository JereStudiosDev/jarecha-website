export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  iconName: string;
}

export interface ServiceGroup {
  number: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  services: ServiceItem[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  iconName: string;
  scope: string;
}

export interface ClientPartner {
  name: string;
  category: string;
  location: string;
}

export interface ComplianceBody {
  id: string;
  acronym: string;
  name: string;
  scope: string;
  status: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  detail: string;
}
