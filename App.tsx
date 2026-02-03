
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

// Components
import FloatingHearts from './components/FloatingHearts';
import ValentineCard from './components/ValentineCard';
import SuccessScreen from './components/SuccessScreen';

const App: React.FC = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const handleYes = useCallback(() => {
    setHasAccepted(true);
    
    // Playful heart-shaped confetti
    const heart = confetti.shapeFromPath({ path: 'M167 10c-33.8 0-61.1 27.2-61.1 61.1 0 70.8 122.1 122.1 122.1 122.1s122.1-51.3 122.1-122.1c0-33.8-27.2-61.1-61.1-61.1-33.8 0-61.1 27.2-61.1 61.1-33.8-33.8-61.1-61.1-61.1-61.1z' });

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff'],
      shapes: [heart],
      scalar: 2
    });
  }, []);

  const handleNo = useCallback(() => {
    setNoCount(prev => prev + 1);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-pink-50">
      <FloatingHearts />
      
      <main className="z-10 w-full max-w-lg px-4">
        <AnimatePresence mode="wait">
          {!hasAccepted ? (
            <motion.div
              key="ask"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <ValentineCard 
                onYes={handleYes} 
                onNo={handleNo} 
                noCount={noCount}
              />
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 15 }}
            >
              <SuccessScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Decor */}
      <div className="absolute bottom-6 left-0 right-0 text-center opacity-30 pointer-events-none">
        <p className="text-red-400 text-sm flex items-center justify-center gap-2 font-semibold">
          Made with <Heart className="fill-red-400 w-4 h-4" /> for Nishtha
        </p>
      </div>
    </div>
  );
};

export default App;
