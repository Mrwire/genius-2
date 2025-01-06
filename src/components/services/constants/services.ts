import { Service } from '../types';
import { Paintbrush, Printer, Camera, BarChart3, Globe, Box } from 'lucide-react';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    icon: Paintbrush,
    title: 'BRANDING',
    description: 'Identité visuelle et stratégie de marque',
    animation: 'https://lottie.host/d12f0546-609f-437f-968f-8803ec4ef481/B8yjHJdjgA.lottie',
    services: [
      'Identité visuelle et graphique',
      'Logotype & Charte Graphique',
      'Naming & recherche de nom',
      'Personal branding'
    ],
    features: [
      'Création de logo',
      'Charte graphique',
      'Identité visuelle',
      'Stratégie de marque'
    ]
  },
  // ... autres services avec le même format
];