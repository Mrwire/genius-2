import { Paintbrush, Printer, Camera, BarChart3, Globe, Box, LayoutDashboard, Trophy } from 'lucide-react';
import type { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'BRANDING',
    animation: 'https://assets5.lottiefiles.com/packages/lf20_xyadoh9h.json',
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
    animation: 'https://assets5.lottiefiles.com/packages/lf20_ydo1amjm.json',
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
    animation: 'https://assets5.lottiefiles.com/packages/lf20_dXpqRKBTTM.json',
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
    animation: 'https://assets5.lottiefiles.com/packages/lf20_UeUwVwJGrd.json',
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
    animation: 'https://assets5.lottiefiles.com/packages/lf20_dGfPYmGGtc.json',
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
    animation: 'https://assets5.lottiefiles.com/packages/lf20_kZqQxYSWbq.json',
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
    animation: 'https://assets5.lottiefiles.com/packages/lf20_hHJqSJCTAp.json',
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
    animation: 'https://assets5.lottiefiles.com/packages/lf20_bIrDfOUWWt.json',
    services: [
      'Studio de streaming',
      'Élaboration de concept',
      'Tournois en ligne',
      'Organisation Event'
    ]
  }
];