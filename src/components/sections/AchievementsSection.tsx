import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Award, Briefcase, Users, Globe } from 'lucide-react';

const achievements = [
  { icon: Award, value: '150+', label: 'Prix remportés' },
  { icon: Briefcase, value: '500+', label: 'Projets réalisés' },
  { icon: Users, value: '200+', label: 'Clients satisfaits' },
  { icon: Globe, value: '10+', label: 'Pays couverts' }
];

export default function AchievementsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-16 bg-black">
      {/* Rest of the component remains the same */}
    </section>
  );
}