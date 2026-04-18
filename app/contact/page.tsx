"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-black selection:text-white pt-32 pb-32">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24 relative items-start">

        {/* Left Side: Sticky Massive Copy */}
        <div className="lg:col-span-5 lg:sticky lg:top-40">
          <motion.h1
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-8"
          >
            Let's talk.
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-500 font-medium leading-snug max-w-md mb-16"
          >
            Reach out for support, developer API access, or partnership opportunities. We're here to help you build the future.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-2">General Support</h3>
              <a href="mailto:support@globypay.com" className="text-2xl md:text-3xl font-semibold hover:text-blue-600 transition-colors">
                support@globypay.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-2">Developer API</h3>
              <a href="mailto:api@globypay.com" className="text-2xl md:text-3xl font-semibold hover:text-blue-600 transition-colors">
                api@globypay.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-2">Partnerships</h3>
              <a href="mailto:partners@globypay.com" className="text-2xl md:text-3xl font-semibold hover:text-blue-600 transition-colors">
                partners@globypay.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Ultra Minimal Form */}
        <div className="lg:col-span-7 lg:mt-32">
          <motion.form
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="space-y-16"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="relative group">
              <input
                type="text"
                id="name"
                className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-3xl md:text-5xl font-medium focus:outline-none focus:border-slate-900 transition-colors peer placeholder-transparent"
                placeholder="Name"
              />
              <label htmlFor="name" className="absolute left-0 -top-8 text-sm font-bold tracking-widest uppercase text-slate-400 peer-placeholder-shown:text-3xl peer-placeholder-shown:md:text-5xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-300 peer-focus:-top-8 peer-focus:text-sm peer-focus:text-slate-400 transition-all cursor-text">
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-3xl md:text-5xl font-medium focus:outline-none focus:border-slate-900 transition-colors peer placeholder-transparent"
                placeholder="Email"
              />
              <label htmlFor="email" className="absolute left-0 -top-8 text-sm font-bold tracking-widest uppercase text-slate-400 peer-placeholder-shown:text-3xl peer-placeholder-shown:md:text-5xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-300 peer-focus:-top-8 peer-focus:text-sm peer-focus:text-slate-400 transition-all cursor-text">
                Email Address
              </label>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                rows={4}
                className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-3xl md:text-5xl font-medium focus:outline-none focus:border-slate-900 transition-colors peer placeholder-transparent resize-none"
                placeholder="Message"
              ></textarea>
              <label htmlFor="message" className="absolute left-0 -top-8 text-sm font-bold tracking-widest uppercase text-slate-400 peer-placeholder-shown:text-3xl peer-placeholder-shown:md:text-5xl peer-placeholder-shown:top-4 peer-placeholder-shown:text-slate-300 peer-focus:-top-8 peer-focus:text-sm peer-focus:text-slate-400 transition-all cursor-text">
                How can we help?
              </label>
            </div>

            <div className="pt-8">
              <button className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-bold hover:text-blue-600 transition-colors">
                Send Message
                <ArrowRight className="w-10 h-10 md:w-12 md:h-12 group-hover:translate-x-4 transition-transform" />
              </button>
            </div>

          </motion.form>
        </div>

      </div>
    </div>
  );
}
