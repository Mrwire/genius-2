import { Suspense, lazy } from 'react';
import LoadingScreen from '../components/loading/LoadingScreen';

// Lazy load sections
const Hero = lazy(() => import('../components/hero/Hero'));
const ValuesSection = lazy(() => import('../components/values/ValuesSection'));
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const ServicesSection = lazy(() => import('../components/services/ServicesSection'));
const GroupSection = lazy(() => import('../components/group/GroupSection'));
const VisionSection = lazy(() => import('../components/vision/VisionSection'));
const Contact = lazy(() => import('../components/Contact'));

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className="min-h-screen text-white font-montserrat">
        <Hero />
        <ValuesSection />
        <AboutSection />
        <ServicesSection />
        <GroupSection />
        <VisionSection />
        <Contact />
      </main>
    </Suspense>
  );
}