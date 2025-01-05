interface ServicesHeaderProps {
  isInView: boolean;
}

export default function ServicesHeader({ isInView }: ServicesHeaderProps) {
  return (
    <div className={`
      text-center mb-16
      transition-all duration-700
      ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        NOS SERVICES
      </h2>
      <p className="text-xl text-gray-400">
        EXPERTISE & SAVOIR-FAIRE
      </p>
    </div>
  );
}