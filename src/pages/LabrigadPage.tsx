import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LabrigadPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header avec bouton retour */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
          <Link 
            to="/"
            className="group flex items-center text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Retour
          </Link>
        </div>
      </header>

      {/* Contenu de la page */}
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              LABRIG'AD
            </h1>
            {/* Ajoutez ici le contenu spécifique à LABRIG'AD */}
          </motion.div>
        </div>
      </main>
    </div>
  );
} 