"use client";
import React, { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

const GITHUB_USER = "b33bmo"; // <-- CHANGE THIS

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        // Optionally filter out forks or unwanted repos
        setRepos(data.filter((repo: Repo) => !repo.fork));
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen pt-12 pb-24">
      <h1 className="text-4xl font-mono text-glitch-cyan mb-8 glitch" data-text="/projects">
        <span className="animate-glitch">/projects</span>
      </h1>
      {loading ? (
        <div className="text-glitch-yellow font-mono animate-pulse">Fetching your exploits...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {repos.length === 0 && (
            <div className="text-glitch-yellow font-mono">No repos found... <span className="opacity-50">Are you sure you’re not a secret agent?</span></div>
          )}
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-glitch-panel border border-glitch-cyan/30 hover:border-glitch-magenta/70 shadow-glitch rounded-2xl p-6 transition-all duration-200 group hover:scale-105"
            >
              <div className="flex flex-row items-center mb-2 gap-2">
                <h2 className="text-glitch-magenta text-xl font-mono group-hover:underline group-hover:decoration-glitch-cyan">
                  {repo.name}
                </h2>
                {repo.stargazers_count > 0 && (
                  <span className="ml-2 text-glitch-yellow text-xs font-bold">★ {repo.stargazers_count}</span>
                )}
              </div>
              <p className="text-glitch-cyan text-sm mb-3 min-h-[48px]">
                {repo.description || <span className="italic opacity-50">No description</span>}
              </p>
              <div className="flex flex-row gap-4 text-xs text-glitch-yellow font-mono">
                {repo.language && <span>{repo.language}</span>}
              </div>
            </a>
          ))}
        </div>
      )}
      {/* Glitch CSS (reuse from your Home page if you want) */}
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