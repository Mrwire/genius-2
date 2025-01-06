import { motion } from 'framer-motion';

interface GroupTaglineProps {
  isIntersecting: boolean;
}

export default function GroupTagline({ isIntersecting }: GroupTaglineProps) {
  const words = [
    { text: "En bref, ce que ", highlight: false },
    { text: "GENIUS", highlight: true },
    { text: " crée, ", highlight: false },
    { text: "MPS", highlight: true },
    { text: " produit et ", highlight: false },
    { text: "LABRIG'AD", highlight: true },
    { text: " déploie", highlight: false }
  ];

  return (
    <div className="mt-24 text-center">
      <motion.p
        className="
          text-2xl md:text-3xl
          font-light text-gray-400
          max-w-4xl mx-auto
          leading-relaxed
        "
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={`
              inline-block
              ${word.highlight ? 'font-bold text-white' : ''}
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
          >
            {word.text}
          </motion.span>
        ))}
      </motion.p>

      {/* Decorative Elements */}
      <motion.div
        className="mt-8 flex justify-center items-center gap-4"
        initial={{ opacity: 0 }}
        animate={isIntersecting ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full" />
        <div className="w-3 h-3 rounded-full bg-blue-500/50" />
        <div className="w-12 h-0.5 bg-gradient-to-l from-purple-500/50 to-transparent rounded-full" />
      </motion.div>
    </div>
  );
}