
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const SuccessScreen: React.FC = () => {
  // Create floating heart animation variants
  const floatingHearts = [
    { delay: 0, x: -30, duration: 3 },
    { delay: 0.5, x: 30, duration: 3.5 },
    { delay: 1, x: -20, duration: 4 },
    { delay: 1.5, x: 20, duration: 3.2 },
    { delay: 2, x: 0, duration: 3.8 },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl text-center border-4 border-red-100 max-w-md mx-auto relative overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
        className="mb-8 flex justify-center"
      >
        <div className="relative">
          <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="couple.jpg"
              alt="Our celebration"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500&auto=format&fit=crop";
              }}
            />
          </div>

          {/* Floating hearts around the image */}
          {floatingHearts.map((heart, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: [-20, -100, -20],
                x: [0, heart.x, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: heart.duration,
                repeat: Infinity,
                delay: heart.delay,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-pink-400 pointer-events-none"
              style={{
                left: `${20 + index * 15}%`,
              }}
            >
              <Heart fill="currentColor" size={16 + index * 2} />
            </motion.div>
          ))}

          <motion.div
            animate={{ scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full shadow-lg"
          >
            <Heart fill="currentColor" size={24} />
          </motion.div>
        </div>
      </motion.div>

      <h1 className="text-5xl font-romantic text-red-600 mb-4">
        Yaaaaay!!! 💖
      </h1>
      
      <p className="text-xl text-gray-700 font-bold mb-6">
        I knew you'd say yes, Nishtha! 
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2 text-red-500 font-bold tracking-tight uppercase text-sm">
          <Sparkles size={18} />
          <span>Our First Married Valentine's</span>
          <Sparkles size={18} />
        </div>
        
        <p className="text-pink-400 text-sm italic">
          "I love you more than words can say!"
        </p>
      </div>

      <motion.div
        className="mt-8 flex justify-center gap-4 text-pink-300"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart size={20} className="fill-pink-200" />
        <Heart size={20} className="fill-pink-200" />
        <Heart size={20} className="fill-pink-200" />
      </motion.div>
    </div>
  );
};

export default SuccessScreen;
