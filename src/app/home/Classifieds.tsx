"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, FileText, CheckCircle, Mail, MapPin, Globe } from "lucide-react";

export default function Classifieds() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    headline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate telegraph dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", headline: "", message: "" });
    }, 1800);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-ink/40 dark:border-ink-light/40 select-none text-ink dark:text-ink-light">
      
      {/* Title */}
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-burgundy dark:text-burgundy-light">SECTION III &bull; CLASSIFIEDS</span>
        <h3 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
          The Classified Post
        </h3>
        <p className="font-mono text-xs md:text-sm italic text-ink/70 dark:text-ink-light/70 mt-1">
          &ldquo;Help Wanted, Services Offered, and Public Notices&rdquo;
        </p>
        <div className="w-24 h-1 border-b-4 border-double border-ink dark:border-ink-light mx-auto mt-4" />
      </div>

      {/* Classifieds Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Category 1: Services Offered & Skills */}
        <div className="border border-ink/30 dark:border-ink-light/30 p-4 space-y-6 bg-paper/20 dark:bg-paper-dark/20 flex flex-col justify-between">
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-black uppercase tracking-wider border-b-2 border-ink dark:border-ink-light pb-2 text-center text-burgundy dark:text-burgundy-light">
              SERVICES OFFERED
            </h4>
            
            <div className="space-y-4 font-mono text-[11px] leading-relaxed">
              <div className="border-b border-ink/15 dark:border-ink-light/15 pb-3">
                <span className="font-bold block text-xs uppercase text-ink dark:text-ink-light mb-1">
                  101. WEB DEVELOPMENT &bull; FULL SYSTEM
                </span>
                Custom Next.js &amp; React engineering. Clean routing, fast bundling, and semantic markup standard. Performance bottlenecks diagnosed &amp; extinguished with expert precision.
              </div>

              <div className="border-b border-ink/15 dark:border-ink-light/15 pb-3">
                <span className="font-bold block text-xs uppercase text-ink dark:text-ink-light mb-1">
                  102. SHADER &amp; GLSL EXPERT
                </span>
                Custom WebGL renderers, noise mapping, and interactive displacement meshes. Bring depth and physical lighting effects to standard browser layouts.
              </div>

              <div className="pb-2">
                <span className="font-bold block text-xs uppercase text-ink dark:text-ink-light mb-1">
                  103. PERFORMANCE REMEDIES
                </span>
                Lighthouse audits, SEO markup structure alignments, responsive grid refinements. Guaranteeing responsive fluidity on devices of all shapes and aspect ratios.
              </div>
            </div>
          </div>

          <div className="border-t border-double border-ink/30 dark:border-ink-light/30 pt-4 text-[10px] font-mono italic text-center">
            &ldquo;Quality code is the best advertisement.&rdquo;
          </div>
        </div>

        {/* Category 2: Public Notices & Resume Summary */}
        <div className="border border-ink/30 dark:border-ink-light/30 p-4 space-y-6 bg-paper/20 dark:bg-paper-dark/20 flex flex-col justify-between">
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-black uppercase tracking-wider border-b-2 border-ink dark:border-ink-light pb-2 text-center text-burgundy dark:text-burgundy-light">
              NOTICES &amp; RECORD
            </h4>

            <div className="space-y-4 font-mono text-[11px] leading-relaxed">
              <div className="border-b border-ink/15 dark:border-ink-light/15 pb-3">
                <span className="font-bold block text-xs uppercase text-ink dark:text-ink-light mb-1">
                  201. CREDENTIALS DISPATCH
                </span>
                Rahul holds a Bachelor of Engineering in Computer Science. Years of experience translating architectural workflows into deployment-ready assets. Reference checks upon request.
              </div>

              <div className="border-b border-ink/15 dark:border-ink-light/15 pb-3">
                <span className="font-bold block text-xs uppercase text-ink dark:text-ink-light mb-1">
                  202. GENERAL BRIEFING
                </span>
                Current coordinate tracking places developer in Bengaluru, India. Operates internationally on asynchronous workflows. Fluent in TypeScript, English, Git log reading.
              </div>

              <div className="pb-2">
                <span className="font-bold block text-xs uppercase text-ink dark:text-ink-light mb-1">
                  203. EDUCATION NOTES
                </span>
                Completed extensive modules in Vector Mathematics, UI Psychology, Algorithmic Analysis, and Relational Database Systems.
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-ink/30 dark:border-ink-light/30">
            <a 
              href="#resume" 
              className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase border border-ink/60 dark:border-ink-light/60 p-2 rounded-sm hover:bg-ink hover:text-paper dark:hover:bg-ink-light dark:hover:text-paper-dark transition-all"
            >
              <FileText className="h-4 w-4" />
              <span>DOWNLOAD DOCKET (RESUME)</span>
            </a>
          </div>
        </div>

        {/* Category 3: Telegram Dispatch (Contact Form) */}
        <div className="border border-ink/30 dark:border-ink-light/30 p-4 space-y-4 bg-paper/20 dark:bg-paper-dark/20 flex flex-col justify-between">
          <div>
            <h4 className="font-serif text-lg font-black uppercase tracking-wider border-b-2 border-ink dark:border-ink-light pb-2 text-center text-burgundy dark:text-burgundy-light">
              TELEGRAPH DISPATCH
            </h4>
            <p className="font-mono text-[10px] text-center text-ink/75 dark:text-ink-light/75 my-2">
              Send a telegram to Rahul. Provide returning coordinates.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-3 font-mono text-[11px]"
              >
                <div>
                  <label htmlFor="name" className="font-bold block uppercase text-[10px] mb-1">
                    SENDER NAME:
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-paper/30 dark:bg-paper-dark/30 border border-ink/30 dark:border-ink-light/30 p-1.5 focus:outline-none focus:border-burgundy dark:focus:border-burgundy-light"
                    placeholder="E.g., John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-bold block uppercase text-[10px] mb-1">
                    RETURN DISPATCH ADDRESS:
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-paper/30 dark:bg-paper-dark/30 border border-ink/30 dark:border-ink-light/30 p-1.5 focus:outline-none focus:border-burgundy dark:focus:border-burgundy-light"
                    placeholder="E.g., email@address.com"
                  />
                </div>

                <div>
                  <label htmlFor="headline" className="font-bold block uppercase text-[10px] mb-1">
                    TELEGRAM HEADLINE:
                  </label>
                  <input
                    id="headline"
                    type="text"
                    name="headline"
                    value={formData.headline}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-paper/30 dark:bg-paper-dark/30 border border-ink/30 dark:border-ink-light/30 p-1.5 focus:outline-none focus:border-burgundy dark:focus:border-burgundy-light"
                    placeholder="E.g., Project Proposal"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-bold block uppercase text-[10px] mb-1">
                    MESSAGE CODE:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-paper/30 dark:bg-paper-dark/30 border border-ink/30 dark:border-ink-light/30 p-1.5 focus:outline-none focus:border-burgundy dark:focus:border-burgundy-light resize-none"
                    placeholder="Write details of dispatch..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase border border-ink dark:border-ink-light p-2 rounded-sm hover:bg-ink hover:text-paper dark:hover:bg-ink-light dark:hover:text-paper-dark transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{isSubmitting ? "TRANSMITTING..." : "DISPATCH TELEGRAM"}</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-double border-burgundy dark:border-burgundy-light p-4 bg-burgundy/5 dark:bg-burgundy/10 space-y-4 font-mono text-[11px] text-center"
              >
                <CheckCircle className="h-8 w-8 text-burgundy dark:text-burgundy-light mx-auto" />
                <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-burgundy dark:text-burgundy-light">
                  TRANSMISSION RECEIVED
                </h5>
                <p className="leading-relaxed">
                  Your coordinates have been loaded. The message will be routed to the editor. Anticipate reply within 24 hours.
                </p>
                <div className="text-[9px] text-ink/50 dark:text-ink-light/50 select-text">
                  RECEIPT_ID: TLG-{Math.floor(Math.random() * 900000 + 100000)}
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mx-auto text-[9px] underline uppercase tracking-widest text-ink/70 dark:text-ink-light/70 hover:text-burgundy cursor-pointer"
                >
                  [Send Another Dispatch]
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Directory Footer Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs mt-12 pt-8 border-t-2 border-ink dark:border-ink-light text-ink/80 dark:text-ink-light/80 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <MapPin className="h-4 w-4 text-burgundy dark:text-burgundy-light" />
          <span>Bengaluru, India &bull; Available for Remote Contracts</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Mail className="h-4 w-4 text-burgundy dark:text-burgundy-light" />
          <a href="mailto:rahul@example.com" className="hover:underline select-text">rahul@example.com</a>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-2">
          <Globe className="h-4 w-4 text-burgundy dark:text-burgundy-light" />
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/rahul</a>
        </div>
      </div>
      
    </section>
  );
}
