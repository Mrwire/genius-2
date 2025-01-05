interface GroupTaglineProps {
  isIntersecting: boolean;
}

export default function GroupTagline({ isIntersecting }: GroupTaglineProps) {
  return (
    <div 
      className={`
        mt-20 text-center
        transition-all duration-700 delay-1000
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <p className="text-xl text-gray-300">
        En bref, ce que <span className="text-white font-bold">GENIUS</span> crée,{' '}
        <span className="text-white font-bold">MPS</span> produit et{' '}
        <span className="text-white font-bold">LABRIG'AD</span> déploie
      </p>
    </div>
  );
}