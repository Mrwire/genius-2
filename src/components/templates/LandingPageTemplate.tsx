import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LandingPageTemplateProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function LandingPageTemplate({ title, description, children }: LandingPageTemplateProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/"
            className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            {description}
          </p>
        </div>
      </motion.section>

      {/* Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
} 