
import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-300 opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: -100,
            rotate: Math.random() * 360 + 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
