export interface Company {
  id: string;
  name: string;
  description: string;
  logo: string;
  isMain?: boolean;
}

export interface CompanyCardProps {
  company: Company;
  onClick: () => void;
  index: number;
  isInView: boolean;
}

export interface ArrowProps {
  isInView: boolean;
  delay: number;
  angle?: number;
  width?: string;
}