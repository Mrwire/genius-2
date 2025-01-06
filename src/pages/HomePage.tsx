import { Suspense, lazy } from 'react';
import LoadingScreen from '../components/loading/LoadingScreen';

// Lazy loaded components
const Hero = lazy(() => import('../components/sections/hero/Hero'));
const Spirit = lazy(() => import('../components/sections/spirit/Spirit'));
const About = lazy(() => import('../components/sections/about/About'));
const Services = lazy(() => import('../components/sections/services/ServicesSection'));
const Group = lazy(() => import('../components/sections/group/GroupSection'));
const Ambition = lazy(() => import('../components/sections/ambition/Ambition'));
const Contact = lazy(() => import('../components/sections/contact/Contact'));

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className="min-h-screen bg-black font-space-grotesk">
        <Hero />
        <Spirit />
        <About />
        <Services />
        <Group />
        <Ambition />
        <Contact />
      </main>
    </Suspense>
  );
}