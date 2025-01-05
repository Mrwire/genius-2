interface PresentationMissionProps {
  isInView: boolean;
}

export default function PresentationMission({ isInView }: PresentationMissionProps) {
  return (
    <div className={`
      p-8 rounded-2xl
      bg-gradient-to-br from-gray-50 to-white
      shadow-[0_0_50px_rgba(0,0,0,0.05)]
      transition-all duration-700 delay-300
      ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
    `}>
      <p className="text-lg md:text-xl leading-relaxed text-gray-800">
        Dans une quête continuelle de la{' '}
        <span className="font-black text-black">PERFECTION</span>,
        Genius se dote des meilleurs outils technologiques, et devient au fil du temps,
        l'agence dite{' '}
        <span className="font-black text-black">PREMIUM</span>, offrant le{' '}
        <span className="font-black text-black">WOW EFFECT</span> garanti.
      </p>
    </div>
  );
}