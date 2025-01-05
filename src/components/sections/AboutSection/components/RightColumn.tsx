import HighlightedText from './HighlightedText';

const HIGHLIGHTS = ['PERFECTION', 'PREMIUM', 'WOW EFFECT'];
const TEXT = "Dans une quête continuelle de la PERFECTION, Genius se dote des meilleurs outils technologiques, et devient au fil du temps, l'agence dite PREMIUM, offrant le WOW EFFECT garanti.";

export default function RightColumn() {
  return (
    <div className="
      p-8 rounded-2xl
      bg-gradient-to-br from-gray-50 to-white
      shadow-[0_0_50px_rgba(0,0,0,0.05)]
      hover:shadow-[0_0_70px_rgba(0,0,0,0.08)]
      transition-all duration-300
    ">
      <HighlightedText
        text={TEXT}
        highlights={HIGHLIGHTS}
      />
    </div>
  );
}