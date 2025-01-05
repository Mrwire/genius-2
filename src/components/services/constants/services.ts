import { Code, Megaphone, Palette, Camera, Users, Trophy } from 'lucide-react';
import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'digital',
    icon: Code,
    title: 'Digital & Web',
    description: 'Solutions numériques innovantes pour votre présence en ligne',
    features: [
      'Sites web responsifs',
      'Applications web',
      'E-commerce',
      'SEO & Analytics'
    ]
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Stratégies marketing pour accroître votre visibilité',
    features: [
      'Social Media',
      'Content Marketing',
      'Email Marketing',
      'SEA & Display'
    ]
  },
  {
    id: 'creative',
    icon: Palette,
    title: 'Création & Design',
    description: 'Solutions créatives pour votre identité visuelle',
    features: [
      'Identité de marque',
      'Design graphique',
      'UI/UX Design',
      'Motion Design'
    ]
  },
  {
    id: 'production',
    icon: Camera,
    title: 'Production',
    description: 'Production audiovisuelle professionnelle',
    features: [
      'Vidéo corporate',
      'Photographie',
      'Motion Design',
      'Post-production'
    ]
  },
  {
    id: 'events',
    icon: Users,
    title: 'Événementiel',
    description: 'Organisation d\'événements sur mesure',
    features: [
      'Événements corporate',
      'Séminaires',
      'Lancements de produits',
      'Roadshows'
    ]
  },
  {
    id: 'gaming',
    icon: Trophy,
    title: 'Gaming & E-sport',
    description: 'Solutions gaming et e-sport innovantes',
    features: [
      'Organisation de tournois',
      'Streaming',
      'Brand Gaming',
      'Gaming Content'
    ]
  }
];