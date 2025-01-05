import BackgroundEffects from '../BackgroundEffects';

export default function FallbackBackground() {
  return (
    <div className="absolute inset-0">
      <BackgroundEffects />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
    </div>
  );
}