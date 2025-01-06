import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';
import LottieAnimation from '../../../common/LottieAnimation';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SERVICES = [
  {
    title: 'BRANDING',
    animation: 'https://lottie.host/5c477aa3-e832-4780-b53c-257cb2eb53f0/2RvuaLjEUD.json',
    items: [
      'Identité visuelle et graphique',
      'Logotype & Charte Graphique',
      'Naming & recherche de nom',
      'Personal branding'
    ]
  },
  {
    title: 'PRINT',
    animation: 'https://lottie.host/830bc3a7-5a5d-4be6-93b8-682a033c4710/NOPpo4DDS1.json',
    items: [
      'Edition / Graphisme / Publicité',
      'Supports imprimés',
      'Plaquette commerciale',
      'Papeterie marketing'
    ]
  },
  {
    title: 'MÉDIA',
    animation: 'https://lottie.host/739f5c46-3f17-41d5-beed-236a0c855884/rSt6ZLSNTt.json',
    items: [
      'Vidéo / Reportage / Photo',
      'Portrait corporate',
      'Motion Design',
      'Photo publicitaire'
    ]
  },
  {
    title: 'MARKETING',
    animation: 'https://lottie.host/d12f0546-609f-437f-968f-8803ec4ef481/B8yjHJdjgA.json',
    items: [
      'Digital Marketing',
      'Stratégie Communication',
      'Social Media Strategy'
    ]
  },
  {
    title: 'DIGITAL & WEB',
    animation: 'https://lottie.host/f7ba41de-65d2-4ca3-bbf6-c91d3b0c2e5a/ctlvkk7Jqg.json',
    items: [
      'Application & Mini jeu',
      'Site Vitrine / E-commerce',
      'Newsletter Mailing',
      'Social Media'
    ]
  },
  {
    title: 'IMPRESSION',
    animation: 'https://lottie.host/fdf3b0bf-1a91-43aa-9257-fd07fbd28e02/UCWdUPfdK2.json',
    items: [
      'Numérique',
      'Technique de Fabrication',
      'Personnalisation',
      'Objets publicitaires'
    ]
  },
  {
    title: 'DESIGN D\'ESPACE',
    animation: 'https://lottie.host/8f05404e-df43-4fdc-89a0-7f358f2b129f/aQGrkd5oaA.json',
    items: [
      'Simulation 2D - 3D',
      'Stand / Shops et divers',
      'Aménagement Intérieur',
      'Merchandising & PLV'
    ]
  },
  {
    title: 'GAMING & EVENT',
    animation: 'https://lottie.host/8f05404e-df43-4fdc-89a0-7f358f2b129f/aQGrkd5oaA.json',
    items: [
      'Studio de streaming',
      'Élaboration de concept',
      'Tournois en ligne',
      'Organisation Event'
    ]
  }
];

export default function OurServices() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="bg-gray-50 py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AGENCE MULTIDISCIPLINAIRE
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez notre expertise dans différents domaines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 w-full">
                <LottieAnimation
                  src={service.animation}
                  autoplay={isIntersecting}
                  loop={true}
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
      </div>
    </section>
  );
} 