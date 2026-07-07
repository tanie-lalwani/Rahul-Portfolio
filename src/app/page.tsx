"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "@/app/layout/Header";
import Hero from "@/app/home/Hero";
import Work from "@/app/home/Work";
import Classifieds from "@/app/home/Classifieds";

// Dynamically import the WebGL Canvas background with SSR disabled to prevent server-side window errors
const PaperBackground = dynamic(() => import("@/experience/PaperBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col vignette-overlay overflow-x-hidden">
      {/* 3D WebGL Canvas Layer */}
      <PaperBackground />

      {/* Grid Pattern Overlay to reinforce vintage newsprint texture */}
      <div className="absolute inset-0 pointer-events-none newspaper-grid z-0 opacity-[0.12] dark:opacity-[0.06]" />

      {/* Core Newspaper Content Wrapper */}
      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full">
        <div className="flex-1 flex flex-col">
          {/* Main Masthead / Title section */}
          <Header />

          <main className="flex-1 flex flex-col gap-4 mt-4 pb-16">
            {/* Lead front page articles and bulletin/ads */}
            <Hero />

            {/* Arts & Technology reviews / projects listing */}
            <Work />

            {/* Public notices, resume download, contact telegram form */}
            <Classifieds />
          </main>
        </div>

        {/* Outer Editorial Footer bar */}
        <footer className="w-full px-4 md:px-8 py-6 border-t border-ink/35 dark:border-ink-light/35 font-mono text-[10px] text-center text-ink/60 dark:text-ink-light/60">
          <div>
            &copy; {new Date().getFullYear()} THE RAHUL CHRONICLE. ALL RIGHTS RESERVED. REGISTERED TELEGRAPH OPERATOR #094-BC.
          </div>
          <div className="mt-1 text-[9px] uppercase tracking-wider">
            No pixels were harmed in the making of this print spread.
          </div>
        </footer>
      </div>
    </div>
  );
}
