export interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
  shortDescription?: string;
  services?: string[];
  website?: string;
  isMain?: boolean;
  longDescription?: string;
}

export interface CompanyCardProps {
  company: Company;
  isInView: boolean;
  onClick: () => void;
  index: number;
}

export interface ArrowProps {
  isInView: boolean;
  delay: number;
  angle?: number;
  width?: string;
}