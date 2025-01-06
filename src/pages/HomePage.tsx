import { useEffect } from 'react';
import Hero from '../components/home/sections/Hero';
import Presentation from '../components/home/sections/Presentation';
import Services from '../components/home/sections/Services';
import Group from '../components/home/sections/Group';
import Contact from '../components/home/sections/Contact';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Genius Group - Accueil';
  }, []);

  return (
    <main className="relative">
      <Hero />
      <Presentation />
      <Services />
      <Group />
      <Contact />
    </main>
  );
}