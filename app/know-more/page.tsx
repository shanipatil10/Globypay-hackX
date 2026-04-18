"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Zap, Globe, ArrowRight } from "lucide-react";

export default function KnowMorePage() {
  const textReveal: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };
  
  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const lineVariants: Variants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" as const } }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-blue-500 selection:text-white pt-40 pb-40">
      
      {/* Hero */}
      <motion.section 
        initial="hidden" animate="visible" variants={stagger}
        className="px-6 max-w-5xl mx-auto text-center mb-40"
      >
        <motion.h1 variants={textReveal} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-8">
          The end of <br/>
          <span className="text-slate-300">complex crypto.</span>
        </motion.h1>
        <motion.p variants={textReveal} className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto font-medium leading-snug">
          We believe sending value globally should be as easy as sending a text message. No wallet addresses. No networks. Just send it.
        </motion.p>
      </motion.section>

      {/* Vertical Story */}
      <section className="relative max-w-5xl mx-auto px-6">
        
        {/* Animated connecting line */}
        <div className="absolute left-[48px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2 overflow-hidden z-0">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={lineVariants}
             className="w-full bg-blue-600 origin-top"
           />
        </div>

        {/* Feature 1 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 mb-40">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2 border-4 border-[#faf9f6] shadow-xl shadow-blue-600/20">
            <Globe className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="md:w-1/2 pl-20 md:pl-0 md:pr-24 text-left md:text-right">
            <motion.h2 variants={textReveal} className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Borderless.</motion.h2>
            <motion.p variants={textReveal} className="text-2xl text-slate-500 leading-relaxed font-medium">Geographical boundaries shouldn't limit financial freedom. We are tearing down the walls of traditional finance.</motion.p>
          </div>
          <div className="hidden md:block md:w-1/2" />
        </motion.div>

        {/* Feature 2 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-8 md:gap-16 mb-40">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2 border-4 border-[#faf9f6] shadow-xl shadow-slate-900/20">
            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="md:w-1/2 pl-20 md:pl-24 text-left">
            <motion.h2 variants={textReveal} className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Bulletproof.</motion.h2>
            <motion.p variants={textReveal} className="text-2xl text-slate-500 leading-relaxed font-medium">No more lost funds. Our smart resolution engine ensures your crypto reaches the intended recipient safely, every single time.</motion.p>
          </div>
          <div className="hidden md:block md:w-1/2" />
        </motion.div>

        {/* Feature 3 */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2 border-4 border-[#faf9f6] shadow-xl shadow-emerald-500/20">
            <Zap className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="md:w-1/2 pl-20 md:pl-0 md:pr-24 text-left md:text-right">
            <motion.h2 variants={textReveal} className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Instant.</motion.h2>
            <motion.p variants={textReveal} className="text-2xl text-slate-500 leading-relaxed font-medium">Waiting for confirmations is the past. Settle transactions instantly with our proprietary network abstraction.</motion.p>
          </div>
          <div className="hidden md:block md:w-1/2" />
        </motion.div>

      </section>

      {/* CTA */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={textReveal}
        className="mt-48 text-center px-6"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">Ready to send it?</h2>
        <a href="/" className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#121212] text-white text-xl font-bold hover:bg-black transition-colors shadow-xl shadow-black/10 group">
          Join the waitlist
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </a>
      </motion.section>

    </div>
  );
}
