interface PresentationIntroProps {
  isInView: boolean;
}

export default function PresentationIntro({ isInView }: PresentationIntroProps) {
  return (
    <div className={`
      transition-all duration-700
      ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
    `}>
      <h2 
        className="text-[clamp(2.5rem,5vw,4rem)] font-black text-black mb-6 relative"
        data-text="Genius Ad District"
      >
        Genius Ad District
      </h2>
      <p className="
        text-xl md:text-2xl font-medium
        bg-gradient-to-r from-black to-gray-600
        bg-clip-text text-transparent
      ">
        L'agence globale, filiale d'un groupe de sociétés spécialisées dans les métiers de la communication.
      </p>
    </div>
  );
}