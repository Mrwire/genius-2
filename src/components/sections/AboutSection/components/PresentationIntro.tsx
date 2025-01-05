import AnimatedSection from './AnimatedSection';
import { AnimatedSectionProps } from '../types';

export default function PresentationIntro({ isInView }: AnimatedSectionProps) {
  return (
    <AnimatedSection isInView={isInView}>
      <h2 
        className="
          text-[clamp(2.5rem,5vw,4rem)] font-black text-black mb-6 
          relative hover:scale-[1.02] transition-transform duration-300
        "
        data-text="Genius Ad District"
      >
        Genius Ad District
      </h2>
      <p className="
        text-xl md:text-2xl font-medium
        bg-gradient-to-r from-black to-gray-600
        bg-clip-text text-transparent
        leading-relaxed
      ">
        L'agence globale, filiale d'un groupe de sociétés spécialisées dans les métiers de la communication.
      </p>
    </AnimatedSection>
  );
}