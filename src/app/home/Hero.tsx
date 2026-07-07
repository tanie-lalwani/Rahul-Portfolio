"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 text-ink dark:text-ink-light select-none">
      {/* Editorial Lead Section */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight leading-none mb-4 text-balance">
          Developer Crafts Tangible Web Experiences With Code And Light
        </h2>
        <div className="w-full flex justify-between items-center border-t border-b border-ink/40 dark:border-ink-light/40 py-2 text-xs md:text-sm font-mono tracking-wider font-bold">
          <div>SPECIAL REPORT</div>
          <div className="hidden sm:block">READ TIME: 3 MINUTES</div>
          <div>BY CHIEF ARCHITECT RAHUL</div>
        </div>
      </motion.div>

      {/* Front Page Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Column 1: The Article (Left side) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-1 border-r-0 lg:border-r border-ink/20 dark:border-ink-light/20 lg:pr-6 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold italic leading-tight border-b border-ink/20 dark:border-ink-light/20 pb-2">
              The Evolution of Tactile Interfaces
            </h3>
            <p className="text-sm leading-relaxed text-justify drop-cap">
              For decades, the digital frontier has been dominated by glossy, hyper-flat interfaces. Yet, a quiet revolution is taking place. Developers and designers alike are looking back to the physical medium—paper, texture, and light—to bring warmth back to our screens.
            </p>
            <p className="text-sm leading-relaxed text-justify">
              This portfolio represents a marriage of the digital and physical. Utilizing WebGL (Three.js), we simulate the behavior of folded, fibrous paper in real-time. As you move your pointer, virtual light rays slide across physical creases, casting realistic shadows.
            </p>
          </div>
          
          <div className="border-t border-double border-ink/30 dark:border-ink-light/30 mt-6 pt-4 text-xs font-mono italic">
            &ldquo;We shape our tools, and thereafter our tools shape us.&rdquo; <br/>
            <span className="font-bold">— Marshall McLuhan</span>
          </div>
        </motion.div>

        {/* Column 2 & 3: The Lead Photo and Continued Story */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-2 border-r-0 lg:border-r border-ink/20 dark:border-ink-light/20 lg:px-6 space-y-6"
        >
          {/* Main Visual */}
          <div className="border-2 border-ink dark:border-ink-light p-1 bg-paper/50 dark:bg-paper-dark/50">
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-ink/30 dark:border-ink-light/30">
              <Image 
                src="/woodcut_programmer.png" 
                alt="Woodcut Engraving of a Developer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover halftone-effect select-none"
              />
            </div>
            <div className="text-[11px] font-mono mt-2 text-ink/80 dark:text-ink-light/80 leading-snug">
              <span className="font-bold">Fig. I:</span> Artist&apos;s rendering of the developer at work in his natural habitat, converting caffeine and linear equations into interactive canvas layers. Hover over the print to reveal in full fidelity.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold">Bridging WebGL &amp; React</h4>
              <p className="text-xs leading-relaxed text-justify text-ink/90 dark:text-ink-light/90">
                Integrating raw shader coordinates and complex meshes with React state requires clean hooks. The paper creases are generated mathematically on load, and lights update seamlessly as you navigate.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold">Aesthetic Obsession</h4>
              <p className="text-xs leading-relaxed text-justify text-ink/90 dark:text-ink-light/90">
                Every line, margin, and border is tuned to match the print media. Custom halftone filters applied on hover bridge retro printing styles with high-definition modern displays.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Column 4: Sidebar Ad Box (Right side) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-1 flex flex-col gap-6"
        >
          {/* Headline box */}
          <div className="border-2 border-ink dark:border-ink-light p-4 text-center bg-burgundy/5 dark:bg-burgundy/10 rounded-sm">
            <span className="font-mono text-[10px] font-bold text-burgundy dark:text-burgundy-light uppercase block tracking-widest mb-1">BULLETIN</span>
            <h4 className="font-serif text-lg font-black uppercase tracking-tight">PORTFOLIO LAUNCH</h4>
            <p className="text-xs font-mono mt-2 leading-relaxed">
              New features added include full screen paper warping, responsive text resizing, and smooth scroll anchors.
            </p>
          </div>

          {/* Retro Advertisement */}
          <div className="border border-ink/40 dark:border-ink-light/40 p-2 flex flex-col items-center bg-paper/30 dark:bg-paper-dark/30">
            <span className="font-mono text-[9px] uppercase tracking-widest border-b border-ink/20 dark:border-ink-light/20 w-full text-center pb-1 mb-2 text-ink/60 dark:text-ink-light/60">ADVERTISEMENT</span>
            
            <div className="relative w-full aspect-square border border-ink/30 dark:border-ink-light/30 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <Image 
                src="/vintage_ad.png" 
                alt="Vintage ad banner for Rahul's Ink"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover select-none halftone-effect"
              />
            </div>
            
            <div className="text-center mt-3 space-y-1">
              <h5 className="font-serif text-sm font-black uppercase tracking-wide text-burgundy dark:text-burgundy-light">RAHUL&apos;S CODE ELIXIR</h5>
              <p className="font-mono text-[10px] leading-snug px-1 text-ink/90 dark:text-ink-light/90">
                GUARANTEED relief from bloated bundles, styling bugs, &amp; sluggish layouts. Try a dose of next-gen development today!
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
