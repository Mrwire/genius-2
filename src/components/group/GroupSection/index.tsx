import { useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { COMPANIES } from '../constants';
import CompanyGrid from './CompanyGrid';
import CompanyModal from './CompanyModal';
import GroupHeader from './GroupHeader';
import GroupTagline from './GroupTagline';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GroupSection() {
  const [selectedCompany, setSelectedCompany] = useState<typeof COMPANIES[number] | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const companyLinks = {
    mps: '/mps',
    labrigad: '/labrigad',
    gamius: 'https://gamiusgroup.com'
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background avec transition fluide */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#191C1F] via-black to-black" />
      
      {/* Motif de grille amélioré */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, 
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(0deg,
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 30px
            )
          `
        }}
      />
      
      {/* Effets décoratifs améliorés */}
      <div className="absolute inset-0">
        <div className="
          absolute top-0 left-1/4 
          w-[600px] h-[600px] 
          bg-gradient-to-r from-blue-500/5 to-purple-500/5 
          rounded-full blur-3xl 
          animate-pulse-slow
        " />
        <div className="
          absolute bottom-0 right-1/4 
          w-[600px] h-[600px] 
          bg-gradient-to-r from-purple-500/5 to-blue-500/5 
          rounded-full blur-3xl 
          animate-pulse-slow
          animation-delay-2000
        " />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GroupHeader ref={ref} isIntersecting={isIntersecting} />

        <CompanyGrid 
          companies={COMPANIES}
          onSelect={setSelectedCompany}
          isInView={isIntersecting}
        />

        <GroupTagline isIntersecting={isIntersecting} />

        {/* Boutons d'action améliorés */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Bouton En savoir plus */}
          <motion.button
            className="group relative px-8 py-4 bg-transparent rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center text-white font-semibold">
              En savoir plus
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 border border-white/20 rounded-full" />
          </motion.button>

          {/* Bouton WhatsApp */}
          <motion.a
            href="https://wa.me/+212xxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-8 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppIcon className="w-5 h-5 mr-2 text-[#25D366] transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-[#25D366] font-semibold relative">
              Nous contacter
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#25D366] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
          </motion.a>

          {/* Boutons spécifiques aux entreprises */}
          <motion.div className="flex gap-4">
            {/* MPS */}
            <motion.a
              href={companyLinks.mps}
              className="group relative px-6 py-3 bg-transparent rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center text-white font-semibold">
                MPS
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 border border-white/20 rounded-full" />
            </motion.a>

            {/* LABRIG'AD */}
            <motion.a
              href={companyLinks.labrigad}
              className="group relative px-6 py-3 bg-transparent rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center text-white font-semibold">
                LABRIG'AD
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 border border-white/20 rounded-full" />
            </motion.a>

            {/* GAMIUS */}
            <motion.a
              href={companyLinks.gamius}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-transparent rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center text-white font-semibold">
                GAMIUS
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 border border-white/20 rounded-full" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Transition fluide vers la section suivante */}
      <div className="
        absolute bottom-0 left-0 right-0 h-48
        bg-gradient-to-t from-black via-black to-transparent
      " />

      {/* Modal amélioré */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
}