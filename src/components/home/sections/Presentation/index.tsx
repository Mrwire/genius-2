import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';
import Lottie from 'lottie-react';

// Import des animations Lottie
import brandingAnimation from './animations/branding.json';
import printAnimation from './animations/print.json';
import mediaAnimation from './animations/media.json';
import marketingAnimation from './animations/marketing.json';
import digitalAnimation from './animations/digital.json';
import impressionAnimation from './animations/impression.json';
import designAnimation from './animations/design.json';
import gamingAnimation from './animations/gaming.json';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const VALUES = ['SAVOIR-FAIRE', 'TECHNOLOGIE', 'INNOVATION', 'CRÉATIVITÉ', 'PASSION'];

const SERVICES = [
  {
    title: 'BRANDING',
    animation: brandingAnimation,
    items: [
      'Identité visuelle et graphique',
      'Logotype & Charte Graphique',
      'Naming & recherche de nom',
      'Personal branding'
    ]
  },
  {
    title: 'PRINT',
    animation: printAnimation,
    items: [
      'Edition / Graphisme / Publicité',
      'Supports imprimés',
      'Plaquette commerciale',
      'Papeterie marketing'
    ]
  },
  {
    title: 'MÉDIA',
    animation: mediaAnimation,
    items: [
      'Vidéo / Reportage / Photo',
      'Portrait corporate',
      'Motion Design',
      'Photo publicitaire'
    ]
  },
  {
    title: 'MARKETING',
    animation: marketingAnimation,
    items: [
      'Digital Marketing',
      'Stratégie Communication',
      'Social Media Strategy'
    ]
  },
  {
    title: 'DIGITAL & WEB',
    animation: digitalAnimation,
    items: [
      'Application & Mini jeu',
      'Site Vitrine / E-commerce',
      'Newsletter Mailing',
      'Social Media'
    ]
  },
  {
    title: 'IMPRESSION',
    animation: impressionAnimation,
    items: [
      'Numérique',
      'Technique de Fabrication',
      'Personnalisation',
      'Objets publicitaires'
    ]
  },
  {
    title: 'DESIGN D\'ESPACE',
    animation: designAnimation,
    items: [
      'Simulation 2D - 3D',
      'Stand / Shops et divers',
      'Aménagement Intérieur',
      'Merchandising & PLV'
    ]
  },
  {
    title: 'GAMING & EVENT',
    animation: gamingAnimation,
    items: [
      'Studio de streaming',
      'Élaboration de concept',
      'Tournois en ligne',
      'Organisation Event'
    ]
  }
];

export default function Presentation() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="bg-white py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Histoire */}
        <motion.div
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Notre Histoire</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            Genius Ad District est l'agence globale, filiale d'un groupe de sociétés spécialisées 
            dans les métiers de la communication. Dans une quête continuelle de la{' '}
            <span className="font-semibold text-blue-600">PERFECTION</span>, Genius se dote des 
            meilleurs outils technologiques, et devient au fil du temps, l'agence dite{' '}
            <span className="font-semibold text-blue-600">PREMIUM</span>, offrant le{' '}
            <span className="font-semibold text-blue-600">WOW EFFECT</span> garanti.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Notre Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            Transformer vos idées en expériences mémorables. Nous combinons créativité, 
            technologie et stratégie pour donner vie à des projets qui dépassent les attentes.
          </p>
        </motion.div>

        {/* Expertise */}
        <motion.div
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            <span className="text-blue-600">40+</span> ans d'expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Stratégies de communication",
              "Métiers graphiques 2D et 3D",
              "Industrie publicitaire",
              "Événementiel corporate et grand public",
              "Design d'intérieur et aménagements",
              "Production audiovisuelle",
              "Marketing Digital et Développement"
            ].map((expertise, index) => (
              <motion.div
                key={expertise}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="
                  bg-gray-50 rounded-xl p-6
                  border border-gray-100
                  hover:shadow-lg hover:border-blue-100
                  transition-all duration-300
                "
              >
                <p className="text-gray-800 font-medium">{expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Valeurs */}
        <motion.div
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {VALUES.map((value, index) => (
            <motion.div
              key={value}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="
                px-8 py-4
                bg-gradient-to-r from-blue-500 to-blue-600
                rounded-full
                transform hover:scale-105
                transition-all duration-300
              "
            >
              <span className="text-white font-semibold">{value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Nos Métiers */}
        <motion.div
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            AGENCE MULTIDISCIPLINAIRE
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16">
            Découvrez notre expertise dans différents domaines
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                animate={isIntersecting ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 w-full bg-gray-50 flex items-center justify-center">
                  <Lottie
                    animationData={service.animation}
                    loop={true}
                    className="w-32 h-32"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 