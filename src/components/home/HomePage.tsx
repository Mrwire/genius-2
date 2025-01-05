import Hero from './sections/Hero';
import Presentation from './sections/Presentation';
import Services from './sections/Services';
import Group from './sections/Group';
import Ambition from './sections/Ambition';
import Contact from './sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Presentation />
      <Services />
      <Group />
      <Ambition />
      <Contact />
    </main>
  );
}