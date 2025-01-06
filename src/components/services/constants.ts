import { Paintbrush, Printer, Camera, BarChart3, Globe, Box, LayoutDashboard, Trophy } from 'lucide-react';
import type { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'BRANDING',
    animation: '/animations/paint-brush-creative.json',
    services: [
      'Identité visuelle et graphique',
      'Logotype & Charte Graphique',
      'Naming & recherche de nom',
      'Personal branding'
    ]
  },
  {
    id: 'print',
    title: 'PRINT',
    animation: '/animations/printing-press.json',
    services: [
      'Edition / Graphisme / Publicité',
      'Supports imprimés',
      'Plaquette commerciale',
      'Papeterie marketing'
    ]
  },
  {
    id: 'media',
    title: 'MÉDIA',
    description: 'Production audiovisuelle de qualité',
    icon: Camera,
    animation: 'https://lottie.host/embed/media-production/media.json',
    services: [
      'Vidéo / Reportage / Photo',
      'Portrait corporate',
      'Motion Design',
      'Photo publicitaire'
    ]
  },
  {
    id: 'marketing',
    title: 'MARKETING',
    description: 'Stratégies marketing innovantes',
    icon: BarChart3,
    animation: 'https://lottie.host/embed/marketing-strategy/strategy.json',
    services: [
      'Digital Marketing',
      'Stratégie Communication',
      'Social Media Strategy',
      'Analyse & Reporting'
    ]
  },
  {
    id: 'digital',
    title: 'DIGITAL & WEB',
    description: 'Solutions numériques sur mesure',
    icon: Globe,
    animation: 'https://lottie.host/embed/web-development/development.json',
    services: [
      'Application & Mini jeu',
      'Site Vitrine / E-commerce',
      'Newsletter Mailing',
      'Social Media'
    ]
  },
  {
    id: 'impression',
    title: 'IMPRESSION',
    description: 'Services d\'impression avancés',
    icon: Box,
    animation: 'https://lottie.host/embed/3d-printer/printer.json',
    services: [
      'Numérique',
      'Technique de Fabrication',
      'Personnalisation',
      'Objets publicitaires'
    ]
  },
  {
    id: 'design',
    title: 'DESIGN D\'ESPACE',
    description: 'Conception d\'espaces innovants',
    icon: LayoutDashboard,
    animation: 'https://lottie.host/embed/3d-space-design/space.json',
    services: [
      'Simulation 2D - 3D',
      'Stand / Shops et divers',
      'Aménagement Intérieur',
      'Merchandising & PLV'
    ]
  },
  {
    id: 'gaming',
    title: 'GAMING & EVENT',
    description: 'Solutions gaming et événementiel',
    icon: Trophy,
    animation: 'https://lottie.host/embed/gaming-trophy/trophy.json',
    services: [
      'Studio de streaming',
      'Élaboration de concept',
      'Tournois en ligne',
      'Organisation Event'
    ]
  }
];