"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Newspaper } from "lucide-react";

export default function Header() {
  const [dateStr, setDateStr] = useState("");
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Dynamic Date Formatting
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const today = new Date();
    setDateStr(today.toLocaleDateString("en-US", options));

    // Dark Mode Sync
    const isDarkTheme = document.documentElement.classList.contains("dark");
    setIsDark(isDarkTheme);
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-4 text-ink dark:text-ink-light select-none">
      {/* Top Banner: Navigation / Edition info */}
      <div className="flex justify-between items-center border-b border-ink/20 dark:border-ink-light/20 pb-2 text-xs font-mono uppercase tracking-widest">
        <div>Vol. CXXVI No. 042</div>
        <div className="hidden md:block">Metropolitan Edition</div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-1.5 hover:text-burgundy dark:hover:text-burgundy-light transition-colors cursor-pointer font-bold border border-ink/30 dark:border-ink-light/30 px-2 py-0.5 rounded-sm bg-paper/20 dark:bg-paper-dark/20"
            aria-label="Toggle Ink Color"
          >
            {isDark ? (
              <>
                <Sun className="h-3.5 w-3.5" />
                <span>LIGHT INK</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5" />
                <span>DARK INK</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Masthead / Logo */}
      <div className="text-center py-6 border-b-4 border-ink dark:border-ink-light">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-none mb-1">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            The Rahul Chronicle
          </Link>
        </h1>
        <p className="font-mono text-sm md:text-base italic tracking-wide text-ink/75 dark:text-ink-light/75">
          &ldquo;All the Code that is Fit to Render&rdquo;
        </p>
      </div>

      {/* Editorial Navigation / Section Index */}
      <div className="w-full border-b border-ink/40 dark:border-ink-light/40 py-1.5 flex justify-center gap-6 text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-ink/95 dark:text-ink-light/95">
        <Link 
          href="/" 
          className={`hover:text-burgundy dark:hover:text-burgundy-light transition-colors ${pathname === "/" ? "text-burgundy dark:text-burgundy-light underline decoration-2 underline-offset-4" : ""}`}
        >
          [I. Front Page]
        </Link>
        <Link 
          href="/work" 
          className={`hover:text-burgundy dark:hover:text-burgundy-light transition-colors ${pathname === "/work" ? "text-burgundy dark:text-burgundy-light underline decoration-2 underline-offset-4" : ""}`}
        >
          [II. Technical Work (Spread)]
        </Link>
        <Link 
          href="/#classifieds" 
          className="hover:text-burgundy dark:hover:text-burgundy-light transition-colors"
        >
          [III. Classifieds &amp; Notices]
        </Link>
      </div>

      {/* Info Block (Under Masthead) */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-xs md:text-sm font-mono border-b-2 border-ink dark:border-ink-light py-2 text-center md:text-left gap-2 md:gap-0">
        <div className="md:border-r border-ink/20 dark:border-ink-light/20 md:pr-4 flex items-center justify-center md:justify-start gap-1">
          <Newspaper className="h-4 w-4" />
          <span>ESTABLISHED 2020 &bull; WEB PORTFOLIO</span>
        </div>
        <div className="text-center font-bold flex items-center justify-center uppercase tracking-wider">
          {dateStr || "LOADING CHRONICLE..."}
        </div>
        <div className="md:border-l border-ink/20 dark:border-ink-light/20 md:pl-4 flex items-center justify-center md:justify-end gap-3 text-right">
          <span>PRICE: YOUR INVITATION</span>
          <span className="hidden sm:inline border border-ink dark:border-ink-light px-1 py-0.2 text-[10px] font-bold rounded-xs">
            $0.00
          </span>
        </div>
      </div>

      {/* Subtle Weather / Status ticker */}
      <div className="w-full flex justify-between items-center border-b border-ink/30 dark:border-ink-light/30 py-1 text-[11px] font-mono tracking-tight text-ink/80 dark:text-ink-light/80">
        <div>
          <span className="font-bold text-burgundy dark:text-burgundy-light">WEATHER:</span> 72&deg;F &amp; Clear in React / Scattered Lint Warnings in Node
        </div>
        <div className="hidden sm:block">
          <span className="font-bold">STATUS:</span> OPEN TO OPPORTUNITIES
        </div>
      </div>
    </header>
  );
}
