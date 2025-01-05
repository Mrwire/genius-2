import { useState } from 'react';
import { ESPRIT_VALUES } from './constants';
import LetterBox from './LetterBox';

export default function EspritValues() {
  const [activeValue, setActiveValue] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-[#191C1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white text-center mb-20">
          NOS VALEURS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {ESPRIT_VALUES.map((value, index) => (
            <LetterBox
              key={value.letter}
              value={value}
              isActive={activeValue === value.word}
              onHover={setActiveValue}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="
          mt-20 text-center
          text-xl text-white/80
          p-6 rounded-xl
          bg-white/5 backdrop-blur-sm
          border border-white/10
        ">
          <p>TOUS NOS CLIENTS & PARTENAIRES PEUVENT EN TÉMOIGNER</p>
        </div>
      </div>
    </section>
  );
}