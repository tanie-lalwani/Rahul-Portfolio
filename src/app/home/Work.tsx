"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Terminal, ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  date: string;
  stack: string[];
  image: string;
  description: string;
  extendedDetails: string;
  pullQuote: string;
  metrics: { label: string; value: string }[];
  liveLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    id: "chronicler",
    title: "Project Chronicler: Markdown Editorial Engine",
    subtitle: "A high-performance rich text layout compiler optimized for vintage layouts.",
    role: "Lead Engineer",
    date: "Autumn 2025",
    stack: ["Next.js", "MDX Compiler", "Tailwind CSS", "Framer Motion"],
    image: "/project_typewriter.png",
    description: "Designed to bridge high-speed static publishing with dynamic page-flow logic. Developed a custom compiler converting standard MDX structures into double-column grid spreads automatically, respecting line-height rules and drop cap spacing criteria.",
    extendedDetails: "The primary challenge was managing orphan headers in a dual-column layout. By creating a custom Web Worker checking scroll height indicators in real-time, the engine dynamically recalculates break points without triggering main-thread layout thrashing.",
    pullQuote: "The layout engine represents a quantum leap in browser-level editorial spacing control.",
    metrics: [
      { label: "Rendering Time", value: "12ms (avg)" },
      { label: "Lighthouse Performance", value: "100%" },
      { label: "Asset Size", value: "32kb gzipped" }
    ],
    liveLink: "https://github.com",
    codeLink: "https://github.com"
  },
  {
    id: "memento",
    title: "Memento: 3D Spatial Canvas Workspace",
    subtitle: "Real-time canvas utilizing physics coordinates to visualize brainstorming logs.",
    role: "Graphics Developer",
    date: "Spring 2025",
    stack: ["React", "Three.js", "React Three Fiber", "GLSL Shaders", "Zustand"],
    image: "/project_camera.png",
    description: "Built a customized visual workspace using Three.js forces. Dynamic note containers crumple and morph like sheets of paper when grabbed, utilizing custom shaders to handle texture coordinates during mesh warping.",
    extendedDetails: "Calculated displacement vectors inside a custom vertex shader, mapping canvas dimensions to float grids. Note elements respond dynamically to drag forces using a spring-damper collision simulation running inside a WASM sub-process.",
    pullQuote: "Integrating real physics simulations into node workflows dramatically boosted cognitive recall.",
    metrics: [
      { label: "Frame Rate", value: "60FPS stable" },
      { label: "Concurrent Nodes", value: "500+" },
      { label: "Shader Load", value: "< 2% GPU" }
    ],
    liveLink: "https://github.com",
    codeLink: "https://github.com"
  },
  {
    id: "almanac",
    title: "The Almanac: Meteorological Data Globe",
    subtitle: "Simulating vector weather patterns on high-contrast topographic globes.",
    role: "Creative Coder",
    date: "Winter 2024",
    stack: ["WebGL", "D3.js", "SVG Maps", "OpenWeather API", "Node.js"],
    image: "/project_compass.png",
    description: "A digital display tracing global atmospheric wind currents, using particle systems overlaying SVG topography. Designed with a custom monochrome palette replicating 19th-century geographical charts.",
    extendedDetails: "Parsed global GFS data streams on a serverless pipeline, mapping grid vectors to local canvas textures. The client reads these vector field coordinates, generating up to 20,000 active particles moving along global pressure curves.",
    pullQuote: "Blending classic maps with real-time vector flows yields an incredibly rich visual narrative.",
    metrics: [
      { label: "Active Particles", value: "20,000" },
      { label: "Data Pipeline latency", value: "300ms" },
      { label: "Memory Usage", value: "42MB" }
    ],
    liveLink: "https://github.com",
    codeLink: "https://github.com"
  }
];

export default function Work() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 text-ink dark:text-ink-light border-t border-ink/40 dark:border-ink-light/40 select-none">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-burgundy dark:text-burgundy-light">SECTION II &bull; WORK ARCHIVE</span>
        <h3 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
          Arts &amp; Technology Spread
        </h3>
        <p className="font-mono text-xs md:text-sm italic text-ink/70 dark:text-ink-light/70 mt-1">
          &ldquo;Reviewing current technical implementations and architectural achievements&rdquo;
        </p>
        <div className="w-24 h-1 border-b-4 border-double border-ink dark:border-ink-light mx-auto mt-4" />
      </div>

      {/* Projects Spread */}
      <div className="space-y-16">
        
        {/* Project 1 (Large editorial block) */}
        {projects.slice(0, 1).map((project) => (
          <div key={project.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-ink/20 dark:border-ink-light/20 pb-12">
            
            {/* Project Image & Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="border-2 border-ink dark:border-ink-light p-1.5 bg-paper/45 dark:bg-paper-dark/45">
                <div className="relative aspect-[21/10] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-ink/20 dark:border-ink-light/20">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    className="object-cover halftone-effect"
                  />
                </div>
                <div className="text-[10px] font-mono mt-2 text-ink/70 dark:text-ink-light/70 flex justify-between">
                  <span>PLATE I. PATENT BLUEPRINT SPECIFICATIONS</span>
                  <span>HOVER TO INK ENGINE</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-2xl md:text-3.5xl font-black leading-tight uppercase">
                  {project.title}
                </h4>
                <div className="flex flex-wrap gap-4 text-xs font-mono border-t border-b border-ink/10 dark:border-ink-light/10 py-2">
                  <div><span className="font-bold">ROLE:</span> {project.role}</div>
                  <div><span className="font-bold">PUBLISHED:</span> {project.date}</div>
                </div>
                <p className="text-sm leading-relaxed text-justify drop-cap">
                  {project.description}
                </p>
                
                {/* Pull Quote */}
                <blockquote className="border-l-4 border-burgundy dark:border-burgundy-light pl-4 py-1 italic font-serif text-lg text-burgundy dark:text-burgundy-light leading-relaxed my-6">
                  &ldquo;{project.pullQuote}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Column 3: Review / Metrics & Expand Button */}
            <div className="lg:col-span-1 flex flex-col justify-between border-l-0 lg:border-l border-ink/20 dark:border-ink-light/20 lg:pl-8 space-y-6">
              <div className="space-y-6">
                <div className="border border-ink/30 dark:border-ink-light/30 p-4 bg-paper/10 dark:bg-paper-dark/10">
                  <h5 className="font-serif text-base font-bold uppercase tracking-wider mb-3 pb-1 border-b border-ink/20 dark:border-ink-light/20 flex items-center gap-1.5">
                    <Terminal className="h-4 w-4 text-burgundy dark:text-burgundy-light" />
                    <span>Technical Spec Sheet</span>
                  </h5>
                  <div className="space-y-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex justify-between text-xs font-mono border-b border-ink/10 dark:border-ink-light/10 pb-1">
                        <span className="text-ink/70 dark:text-ink-light/70 uppercase">{metric.label}:</span>
                        <span className="font-bold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-mono text-xs font-bold uppercase">TECHNOLOGY STACK:</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono border border-ink/30 dark:border-ink-light/30 px-2 py-0.5 rounded-sm bg-paper/30 dark:bg-paper-dark/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expansion Action and links */}
              <div className="pt-6 border-t border-ink/25 dark:border-ink-light/25 space-y-3">
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full flex items-center justify-between text-xs font-mono font-bold uppercase border border-ink dark:border-ink-light px-3 py-2 rounded-sm hover:bg-ink hover:text-paper dark:hover:bg-ink-light dark:hover:text-paper-dark transition-all cursor-pointer"
                >
                  <span>{expandedId === project.id ? "Close Case File" : "Open Case File"}</span>
                  {expandedId === project.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>

                <div className="flex gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 text-[11px] font-mono border border-ink/50 dark:border-ink-light/50 px-2 py-1.5 rounded-sm hover:text-burgundy dark:hover:text-burgundy-light transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>LIVE DISPATCH</span>
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 text-[11px] font-mono border border-ink/50 dark:border-ink-light/50 px-2 py-1.5 rounded-sm hover:text-burgundy dark:hover:text-burgundy-light transition-colors"
                    >
                      <Layers className="h-3.5 w-3.5" />
                      <span>SOURCE REPO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Extended Details (Animated) */}
            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="col-span-1 lg:col-span-3 overflow-hidden bg-burgundy/5 dark:bg-burgundy/10 border-t border-b border-ink/20 dark:border-ink-light/20 p-6 mt-4 font-mono text-xs leading-relaxed"
                >
                  <div className="space-y-4 max-w-4xl">
                    <h6 className="font-serif text-sm font-bold uppercase tracking-wider text-burgundy dark:text-burgundy-light">
                      FIELD ARCHITECTURE REPORT // ADDENDUM
                    </h6>
                    <p>{project.extendedDetails}</p>
                    <p className="text-[10px] text-ink/60 dark:text-ink-light/60">
                      FILE_ID: PRJ-{project.id.toUpperCase()}-2026 // CLASSIFIED &mdash; FOR CLIENT REVIEW
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Project 2 & 3 (Two columns layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          {projects.slice(1).map((project) => (
            <div key={project.id} className="space-y-6 flex flex-col justify-between border-t border-ink/20 dark:border-ink-light/20 pt-8">
              <div className="space-y-4">
                {/* Visual */}
                <div className="border-2 border-ink dark:border-ink-light p-1.5 bg-paper/45 dark:bg-paper-dark/45">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-ink/20 dark:border-ink-light/20">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover halftone-effect"
                    />
                  </div>
                  <div className="text-[9px] font-mono mt-1.5 text-ink/70 dark:text-ink-light/70 text-center">
                    EXHIBIT SPEC: {project.title.toUpperCase()}
                  </div>
                </div>

                <h4 className="font-serif text-xl md:text-2xl font-black uppercase leading-tight mt-4">
                  {project.title}
                </h4>
                
                <div className="flex flex-wrap gap-4 text-[10px] font-mono border-t border-b border-ink/10 dark:border-ink-light/10 py-1">
                  <div><span className="font-bold">ROLE:</span> {project.role}</div>
                  <div><span className="font-bold">DATE:</span> {project.date}</div>
                </div>

                <p className="text-xs leading-relaxed text-justify text-ink/90 dark:text-ink-light/90">
                  {project.description}
                </p>
              </div>

              {/* Bottom layout details */}
              <div className="pt-6 space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono border border-ink/30 dark:border-ink-light/30 px-1.5 py-0.5 rounded-sm">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-[9px] font-mono text-ink/60 dark:text-ink-light/60 px-1.5 py-0.5">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex-1 text-center text-[10px] font-mono font-bold uppercase border border-ink dark:border-ink-light px-2 py-1.5 rounded-sm hover:bg-ink hover:text-paper dark:hover:bg-ink-light dark:hover:text-paper-dark transition-all cursor-pointer"
                  >
                    {expandedId === project.id ? "Close Details" : "Project Specs"}
                  </button>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 text-[10px] font-mono border border-ink/50 dark:border-ink-light/50 px-2 py-1.5 rounded-sm hover:text-burgundy dark:hover:text-burgundy-light transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>LAUNCH</span>
                  </a>
                </div>
              </div>

              {/* Extended Details Box (Animated) */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden bg-burgundy/5 dark:bg-burgundy/10 border border-ink/20 dark:border-ink-light/20 p-4 mt-2 font-mono text-[11px] leading-relaxed"
                  >
                    <p className="mb-2 text-burgundy dark:text-burgundy-light font-bold">ADDITIONAL LOGS:</p>
                    <p className="mb-4">{project.extendedDetails}</p>
                    <div className="space-y-1.5 pt-2 border-t border-ink/10 dark:border-ink-light/10">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex justify-between text-[10px] font-mono">
                          <span className="text-ink/60 dark:text-ink-light/60">{metric.label}:</span>
                          <span className="font-bold">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
