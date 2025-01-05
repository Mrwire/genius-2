import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function ClientsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-24 bg-black">
      {/* Rest of the component remains the same */}
    </section>
  );
}