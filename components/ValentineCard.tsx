
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ValentineCardProps {
  onYes: () => void;
  onNo: () => void;
  noCount: number;
}

const NO_MESSAGES = [
  "No",
  "Are you sure?",
  "Nishtha, please? 🥺",
  "Don't do this to me!",
  "Think of the treats!",
  "Last chance!",
  "Surely not?",
  "You're breaking my heart!",
  "Give it another thought!",
  "Is that your final answer?",
  "But I'm your favorite!",
  "Wrong button! 👆",
  "Try the red one!",
  "I'll be very sad...",
  "Okay, you're just teasing now!",
];

const ValentineCard: React.FC<ValentineCardProps> = ({ onYes, onNo, noCount }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (noCount > 0) {
      const x = (Math.random() - 0.5) * 250;
      const y = (Math.random() - 0.5) * 250;
      setNoPosition({ x, y });
    }
  }, [noCount]);

  const yesButtonSize = 1 + Math.min(noCount * 0.2, 1.5);
  const currentNoMessage = NO_MESSAGES[Math.min(noCount, NO_MESSAGES.length - 1)];

  return (
    <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl text-center border-4 border-pink-100 max-w-sm mx-auto">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mb-6 flex justify-center"
      >
        <img 
          src="https://media.giphy.com/media/cLS1cfxvGOPVpf9g3y/giphy.gif" 
          alt="Cute asking cat"
          className="w-40 h-40 object-contain"
        />
      </motion.div>

      <h1 className="text-4xl font-romantic text-red-500 mb-2">
        Hey Nishtha...
      </h1>
      <h2 className="text-xl font-bold text-gray-600 mb-10 px-4 leading-tight">
        Will you be my Valentine? 🌹
      </h2>

      <div className="flex flex-col items-center justify-center gap-6 min-h-[140px] relative">
        {/* YES BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ scale: yesButtonSize }}
          onClick={onYes}
          className="bg-red-500 hover:bg-red-600 text-white font-black py-4 px-10 rounded-full shadow-xl transition-all z-20"
        >
          YES! ❤️
        </motion.button>

        {/* NO BUTTON */}
        <motion.button
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onMouseEnter={onNo}
          onClick={onNo}
          className="bg-gray-100 text-gray-400 font-semibold py-2 px-6 rounded-full shadow-sm text-sm border border-gray-100 whitespace-nowrap"
        >
          {currentNoMessage}
        </motion.button>
      </div>

      <div className="mt-8 text-pink-300 text-[10px] uppercase tracking-widest font-bold">
        Love you forever
      </div>
    </div>
  );
};

export default ValentineCard;
