import AnimatedText from './AnimatedText';

export default function LeftColumn() {
  return (
    <div className="space-y-6">
      <h2 className="
        text-[clamp(2.5rem,5vw,4rem)] font-black text-black
        relative hover:scale-[1.02] transition-transform duration-300
      ">
        <AnimatedText
          text="Genius Ad District"
          variant="glitch"
        />
      </h2>
      
      <AnimatedText
        text="L'agence globale, filiale d'un groupe de sociétés spécialisées dans les métiers de la communication."
        variant="gradient"
        delay={300}
      />
    </div>
  );
}