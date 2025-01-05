import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'Les tendances du digital en 2024',
    excerpt: 'Découvrez les innovations qui façonnent le paysage digital...',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    date: '2024-03-15',
    readTime: '5 min'
  },
  {
    title: 'L\'impact de l\'IA dans la communication',
    excerpt: 'Comment l\'intelligence artificielle révolutionne notre industrie...',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    date: '2024-03-10',
    readTime: '8 min'
  },
  {
    title: 'Événementiel : retour au présentiel',
    excerpt: 'Les nouvelles attentes des clients pour les événements physiques...',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
    date: '2024-03-05',
    readTime: '6 min'
  }
];

export default function BlogSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`
            text-center mb-16
            transition-all duration-700
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Actualités & Insights
          </h2>
          <p className="text-xl text-gray-300">
            Restez informé des dernières tendances et innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`
                group bg-white/5 rounded-xl overflow-hidden
                transition-all duration-700
                ${isIntersecting 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="
                  text-sm font-medium text-blue-400
                  hover:text-blue-300 transition-colors
                ">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}