// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";
import React from "react";
import GlitchTransition from "@/components/GlitchTransition"; 
import BackgroundMesh from "@/components/BackgroundMesh"; // adjust path if needed

export const metadata = {
  title: "bmo()",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-glitch-bg min-h-screen">
        {/* NAVBAR */}
        <nav className="z-50 w-full flex justify-center py-4 sticky top-0 bg-glitch-panel/80 backdrop-blur-lg shadow-glitch border-b border-glitch-cyan/20">
          <div className="flex gap-10 font-mono text-lg text-glitch-cyan">
            <NavLink href="/">[Home]</NavLink>
            <NavLink href="/projects">[Projects]</NavLink>
          </div>
        </nav>
        <BackgroundMesh />

        <GlitchTransition>
          {children}
        </GlitchTransition>
      </body>
    </html>
  );
}

// Glitchy link component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-2 py-1 hover:text-glitch-magenta transition group"
    >
      <span className="relative z-10">{children}</span>
      {/* Glitchy underline */}
      <span className="absolute left-0 right-0 -bottom-1 h-1 bg-glitch-magenta opacity-0 group-hover:opacity-80 transition-all blur-sm rounded group-hover:blur-none" />
    </Link>
  );
}