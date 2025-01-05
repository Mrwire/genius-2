import ServicesHeader from './services/ServicesHeader';
import ServicesGrid from './services/ServicesGrid';

export default function Services() {
  return (
    <section className="py-24 bg-[#191C1F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
}