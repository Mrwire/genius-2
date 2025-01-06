import { Paintbrush, Printer, Camera, BarChart3, Globe, Box, LayoutDashboard, Trophy } from 'lucide-react';
import type { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'BRANDING',
    animation: 'https://lottie.host/d12f0546-609f-437f-968f-8803ec4ef481/B8yjHJdjgA.lottie',
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
    animation: 'https://lottie.host/830bc3a7-5a5d-4be6-93b8-682a033c4710/NOPpo4DDS1.json',
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
    animation: 'https://lottie.host/5c477aa3-e832-4780-b53c-257cb2eb53f0/2RvuaLjEUD.json',
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
    animation: 'https://lottie.host/fdf3b0bf-1a91-43aa-9257-fd07fbd28e02/UCWdUPfdK2.json',
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
    animation: 'https://lottie.host/8f05404e-df43-4fdc-89a0-7f358f2b129f/aQGrkd5oaA.json',
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
    animation: 'https://lottie.host/f7ba41de-65d2-4ca3-bbf6-c91d3b0c2e5a/ctlvkk7Jqg.json',
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
    animation: '/animations/space-design.json',
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
    animation: '/animations/gaming.json',
    services: [
      'Studio de streaming',
      'Élaboration de concept',
      'Tournois en ligne',
      'Organisation Event'
    ]
  }
];