'use client';
import React from 'react';

export default function BackgroundMesh() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none bg-[#101217]"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          filter: 'blur(2px) brightness(1.2)',
          opacity: 0.5,
        }}
      >
        <defs>
          <linearGradient id="meshLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00ffe7" />
            <stop offset="100%" stopColor="#ff00ea" />
          </linearGradient>
        </defs>
        {/* Vertical lines */}
        {Array.from({ length: 32 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={(i / 31) * 1920}
            y1={0}
            x2={(i / 31) * 1920}
            y2={1080}
            stroke="url(#meshLine)"
            strokeWidth={i % 4 === 0 ? 2 : 1}
            opacity={i % 4 === 0 ? 0.25 : 0.12}
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={(i / 17) * 1080}
            x2={1920}
            y2={(i / 17) * 1080}
            stroke="url(#meshLine)"
            strokeWidth={i % 4 === 0 ? 2 : 1}
            opacity={i % 4 === 0 ? 0.25 : 0.12}
          />
        ))}
      </svg>
      {/* Optional: animated scanlines */}
      <div className="absolute inset-0 pointer-events-none animate-scan bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20" />
      <style jsx global>{`
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 200%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}