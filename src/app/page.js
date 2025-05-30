'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    if (opened) {
      const timer = setTimeout(() => setShowHearts(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [opened]);

  const floatingHearts = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute text-2xl"
      initial={{
        opacity: 0,
        top: '50%',
        left: '50%',
        scale: 0.5,
        rotate: 0
      }}
      animate={{
        opacity: [0, 1, 0],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        scale: [1, 1.5, 1],
        rotate: Math.random() * 360
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        delay: Math.random() * 2
      }}
      style={{ color: 'pink' }}
    >
      ❤️
    </motion.div>
  ));

  const sparkles = Array.from({ length: 15 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute text-yellow-300 text-xl"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      transition={{
        delay: Math.random() * 2,
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      ✨
    </motion.div>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-red-300 text-white overflow-hidden relative">
      {!opened ? (
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
          className="bg-white text-pink-600 p-8 rounded-2xl shadow-lg cursor-pointer text-center border-4 border-pink-300"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-5xl mb-2"
          >📩</motion.div>
          <p className="text-xl font-semibold animate-bounce">Open Me</p>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-6xl font-extrabold drop-shadow-lg"
            >
              I Love You ❤️
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 text-2xl font-light"
            >
              Forever and always 💖
            </motion.p>
          </motion.div>

          {showHearts && (
            <div className="absolute inset-0 pointer-events-none">
              {floatingHearts}
              {sparkles}
            </div>
          )}
        </>
      )}
    </main>
  );
}
