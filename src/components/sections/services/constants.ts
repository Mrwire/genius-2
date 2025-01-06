import type { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'BRANDING',
    animation: '/animations/paint-brush-creative.json',
    services: [
      'Identité visuelle et graphique',
      'Logotype & Charte Graphique',
      'Packaging Design',
      'Brand Guidelines'
    ]
  },
  {
    id: 'print',
    title: 'PRINT',
    animation: '/animations/printing-press.json',
    services: [
      'Edition / Graphisme / Publicité',
      'Impression numérique',
      'Impression offset',
      'Signalétique'
    ]
  },
  {
    id: 'digital',
    title: 'DIGITAL',
    animation: '/animations/digital-marketing.json',
    services: [
      'Développement web',
      'Applications mobiles',
      'E-commerce',
      'Marketing digital'
    ]
  },
  {
    id: 'gaming',
    title: 'GAMING',
    animation: '/animations/gaming-trophy.json',
    services: [
      'Studio de streaming',
      'Élaboration de concept',
      'Tournois en ligne',
      'Organisation Event'
    ]
  }
]; 