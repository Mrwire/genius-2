import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

const heroTexts = {
  main: {
    title1: "GENIUS",
    title2: "AD DISTRICT",
    subtitle: "L'AGENCE GLOBALE DE COMMUNICATION",
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <HeroContent {...heroTexts.main} />
      <ScrollIndicator />
    </section>
  );
} 