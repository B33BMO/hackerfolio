'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

export default function GlitchTransition({ children }: { children: React.ReactNode }) {
  // You can get creative here with the animation!
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== "undefined" ? window.location.pathname : "glitch"}
        initial={{
          opacity: 0,
          filter: 'blur(12px) contrast(2) hue-rotate(20deg)',
          scale: 1.02,
        }}
        animate={{
          opacity: 1,
          filter: 'blur(0px) contrast(1) hue-rotate(0deg)',
          scale: 1,
        }}
        exit={{
          opacity: 0,
          filter: 'blur(10px) contrast(2) hue-rotate(-20deg)',
          scale: 0.97,
        }}
        transition={{
          duration: 0.44,
          ease: [0.4, 0.6, 0.2, 1],
        }}
        className="will-change-transform"
      >
        {/* You can stack glitch overlays or use CSS for more */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none animate-glitch-flicker z-50" />
          {children}
        </div>
      </motion.div>
      <style jsx global>{`
 
      `}</style>
    </AnimatePresence>
  );
}