import AnimatedSection from './AnimatedSection';
import TextHighlight from './TextHighlight';
import { AnimatedSectionProps } from '../types';

export default function PresentationMission({ isInView }: AnimatedSectionProps) {
  return (
    <AnimatedSection isInView={isInView} delay={300}>
      <div className="
        p-8 rounded-2xl
        bg-gradient-to-br from-gray-50 to-white
        shadow-[0_0_50px_rgba(0,0,0,0.05)]
        hover:shadow-[0_0_70px_rgba(0,0,0,0.08)]
        transition-all duration-300
      ">
        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          Dans une quête continuelle de la{' '}
          <TextHighlight>PERFECTION</TextHighlight>,
          Genius se dote des meilleurs outils technologiques, et devient au fil du temps,
          l'agence dite{' '}
          <TextHighlight>PREMIUM</TextHighlight>, offrant le{' '}
          <TextHighlight>WOW EFFECT</TextHighlight> garanti.
        </p>
      </div>
    </AnimatedSection>
  );
}