import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="relative w-full h-screen">
      {/* Overlay gradient pour une meilleure intégration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />

      {/* Container Spline */}
      <div className="absolute inset-0">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Spline 
            scene="https://prod.spline.design/YBtYg98mN1qrOQDW/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Contenu superposé */}
      <div className="relative z-20 h-full">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="
              text-5xl md:text-7xl font-bold mb-6
              bg-gradient-to-r from-blue-400 to-purple-500 
              bg-clip-text text-transparent
            ">
              Une Expérience Immersive
            </h2>
            <p className="
              text-gray-300 text-lg md:text-xl
              max-w-2xl mx-auto
            ">
              Découvrez notre univers en 3D interactive
            </p>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2 z-20
          flex flex-col items-center gap-2
        "
      >
        <div className="text-sm text-gray-400">Scroll</div>
        <div className="
          w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-purple-500
          animate-pulse
        " />
      </motion.div>
    </section>
  );
} 