import BackgroundImage from './BackgroundImage';
import VisionTitle from './VisionTitle';
import MadeInMorocco from './MadeInMorocco';

export default function VisionSection() {
  return (
    <section className="relative py-24 bg-[#1E2328] overflow-hidden">
      <BackgroundImage 
        url="https://images.unsplash.com/photo-1547147278-e9b4194d9820"
        opacity={0.1}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VisionTitle
          title="NOTRE GRANDE AMBITION"
          subtitle="DEVENIR LA RÉFÉRENCE QUALITÉ"
        />
        <MadeInMorocco />
      </div>
    </section>
  );
}