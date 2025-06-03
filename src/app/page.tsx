import React from "react";

// Panel component (add types for props)
function Panel({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="bg-glitch-panel bg-opacity-80 rounded-2xl shadow-glitch p-6 min-w-[240px] max-w-[300px] border border-glitch-cyan/30 hover:border-glitch-magenta/50 transition-all duration-300">
      <h3 className="text-2xl font-mono text-glitch-magenta mb-2">{title}</h3>
      <div className="font-mono text-glitch-cyan">{children}</div>
    </div>
  );
  return href ? (
    <a href={href} className="hover:scale-105 transition">
      {content}
    </a>
  ) : (
    content
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-glitch-bg relative overflow-hidden">
      {/* Glitchy scanline overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 animate-scan bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full" />

      {/* Glitchy main title */}
      <h1
        className="text-6xl md:text-8xl font-mono font-bold text-glitch-cyan relative z-30 glitch"
        data-text="bmo()"
      >
        <span className="block animate-glitch">
          bmo<span className="text-glitch-magenta">()</span>
        </span>
      </h1>

      {/* Subtitle */}
      <h2 className="mt-4 text-xl md:text-3xl text-glitch-yellow font-mono z-30 animate-glitch">
        Welcome..
      </h2>
 
      {/* Glitchy panels */}
      <section className="mt-16 flex flex-col md:flex-row gap-8 z-30">
        <Panel title="About">
          <p>
            IT Technician. 
            <br />
            <span className="text-glitch-yellow">
            Builder of weird & wonderful tech.
            </span>
          </p>
        </Panel>
        <Panel title="Projects">
          <ul className="space-y-2">
            <li>• BytePDF</li>
            <li>• ControlPoint</li>
            <li>• GhostNav</li>
            <li>• ...and more</li>
          </ul>
        </Panel>
        <Panel title="Contact" href="mailto:bmo@bmo.guru">
          <p className="break-all">bmo@bmo.guru</p>
        </Panel>
      </section>

      {/* Fake terminal text flicker at bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-80 z-40">
        <span className="font-mono text-xs text-glitch-cyan animate-glitch">
          [~]&gt; Portfolio system active. Awaiting input...
        </span>
      </div>

      {/* Glitch CSS */}
      <style>{`
        .glitch {
          position: relative;
        }
        .glitch:before, .glitch:after {
          content: attr(data-text);
          position: absolute;
          left: 0; width: 100%; overflow: hidden;
          color: #ff00ea;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch:before {
          animation: glitchTop 1.2s infinite linear alternate-reverse;
          top: -2px;
        }
        .glitch:after {
          animation: glitchBottom 1s infinite linear alternate-reverse;
          left: 2px; color: #00ffe7; top: 2px;
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 900px, 0, 0); }
          20% { clip: rect(0, 900px, 40px, 0); left: 2px; }
          40% { clip: rect(0, 900px, 0, 0); left: 0; }
        }
        @keyframes glitchBottom {
          0% { clip: rect(0, 900px, 0, 0); }
          30% { clip: rect(20px, 900px, 70px, 0); left: -2px; }
          60% { clip: rect(0, 900px, 0, 0); left: 0; }
        }
      `}</style>
    </main>
  );
}