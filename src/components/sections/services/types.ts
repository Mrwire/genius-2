export interface Service {
  id: string;
  title: string;
  animation: string;
  services: string[];
}

export interface ServiceCardProps {
  service: Service;
  isInView: boolean;
  delay?: number;
} 