import { Paintbrush, Printer, Camera, BarChart3, Globe, Box, LayoutDashboard, Trophy } from 'lucide-react';
import type { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'BRANDING',
    animation: 'https://lottie.host/2a32e8ed-907d-4c4b-9101-ce76c5cf789c/xr4rrLvxGi.json',
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
    animation: 'https://lottie.host/ad7fd0d7-751d-4a25-b847-4e3a2d60acb6/aPWyXrBTZl.json',
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
    animation: 'https://lottie.host/0934e41e-7f14-4469-8e1c-51e5834dff47/dXpqRKBTTM.json',
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
    animation: 'https://lottie.host/4e997e95-8d3f-4b5e-8dd8-f3c6392beb36/UeUwVwJGrd.json',
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
    animation: 'https://lottie.host/cb6b907e-5276-4185-813c-6c6cb22ac58d/dGfPYmGGtc.json',
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
    animation: 'https://lottie.host/3d0d4d6c-4b12-4586-9c7b-c0f8914cd36d/kZqQxYSWbq.json',
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
    animation: 'https://lottie.host/c1c1f726-7e5f-45cd-9b0c-d7cce0d1a8c3/hHJqSJCTAp.json',
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
    animation: 'https://lottie.host/e8c7d5c9-0d4b-4c46-8612-f067e8e7c6a4/bIrDfOUWWt.json',
    services: [
      'Studio de streaming',
      'Élaboration de concept',
      'Tournois en ligne',
      'Organisation Event'
    ]
  }
];