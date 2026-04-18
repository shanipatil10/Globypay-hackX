"use client";

import React, { useState } from "react";
import { motion, Variants, useScroll } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  Zap,
  AlertTriangle,
  CheckCircle2,

} from "lucide-react";
import { PhoneMockup } from "@/components/ui/phone-mockup";

export default function GlobypayLanding() {
  const [showSolution, setShowSolution] = useState(true);
  const { scrollYProgress } = useScroll();

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const blurFadeIn: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 30 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const scaleUpBlur: Variants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(20px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
        {/* Left: Copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10"
        >

          <motion.h1 variants={blurFadeIn} className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900">
            Crypto Payments.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Just Send It.
            </span>
          </motion.h1>
          <motion.p variants={blurFadeIn} className="text-lg lg:text-xl text-slate-600 mb-8 max-w-md leading-relaxed">
            No wallet addresses. No network confusion. Just enter a phone number and send crypto instantly, settled in INR.
          </motion.p>
          <motion.div variants={blurFadeIn} className="flex gap-4">
            <Link
              href="#demo"
              className="px-8 py-4 rounded-full bg-[#121212] text-white font-semibold hover:bg-black transition-all flex items-center gap-2 group shadow-lg shadow-black/20"
            >
              See How It Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: 3D Animated Phone Mockup */}
        <div className="relative flex justify-center items-center mt-12 lg:mt-0 perspective-1000">
          {/* Pulsing Backlight for Phone */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[60%] h-[60%] bg-blue-500/30 rounded-full blur-[100px] -z-10"
          />

          <div className="w-full flex justify-center relative z-10">
            <PhoneMockup />
          </div>
        </div>
      </section>


      {/* --- PROBLEM VS SOLUTION SECTION --- */}
      <section id="demo" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl lg:text-5xl font-bold mb-4 text-slate-900">The Old Way vs. The Globypay Way</motion.h2>
            <motion.p variants={fadeIn} className="text-slate-600 text-lg">Slide to see how we abstract the complexity of Web3.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex justify-center mb-8"
          >
            <div className="bg-slate-100 p-1 rounded-full flex gap-1 border border-slate-200 shadow-inner">
              <button
                onClick={() => setShowSolution(false)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${!showSolution ? 'bg-red-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Traditional Crypto
              </button>
              <button
                onClick={() => setShowSolution(true)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${showSolution ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Globypay
              </button>
            </div>
          </motion.div>

          {/* Toggle Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleUpBlur}
            className="relative h-[400px] w-full max-w-md mx-auto perspective-1000"
          >
            {/* Traditional Card */}
            <motion.div
              animate={{ opacity: showSolution ? 0 : 1, rotateY: showSolution ? -90 : 0, zIndex: showSolution ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white border border-red-200 rounded-3xl p-8 flex flex-col justify-center shadow-2xl shadow-red-100 backface-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
              <div className="space-y-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Recipient Wallet Address (ERC-20)</p>
                  <p className="text-sm font-mono text-slate-800 break-all">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Select Network</p>
                  <p className="text-sm text-red-600 font-medium">Warning: Sending to wrong network = lost funds</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Estimated Gas Fee</p>
                  <p className="text-sm font-mono text-slate-800">0.015 ETH (~$45.00)</p>
                </div>
              </div>
            </motion.div>

            {/* Globypay Card */}
            <motion.div
              animate={{ opacity: showSolution ? 1 : 0, rotateY: showSolution ? 0 : 90, zIndex: showSolution ? 10 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50 border border-emerald-200 rounded-3xl p-8 flex flex-col justify-center shadow-2xl shadow-emerald-100/50 backface-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-6" />
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                  <p className="text-xs text-slate-500 mb-1">Send to Mobile Number</p>
                  <p className="text-xl font-semibold text-slate-900 tracking-wider">+91 98765 43210</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">You Send</p>
                    <p className="text-xl font-bold text-emerald-600">₹ 5,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 mb-1">Flat Fee</p>
                    <p className="text-sm font-semibold text-slate-700">0.5%</p>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20">
                  Pay Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- HOW IT WORKS (3 STEPS) --- */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative"
          >
            {/* Connecting line for desktop */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 z-0 origin-left"
            />

            {/* Step 1 */}
            <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-black border border-white/20 flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enter Phone Number</h3>
              <p className="text-zinc-400 max-w-xs">Type the recipient's phone number and the desired amount in either INR or Crypto.</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-black border border-white/20 flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Resolution</h3>
              <p className="text-zinc-400 max-w-xs">Globypay auto-resolves the number to the correct secure wallet, showing live rates and a flat 0.5% fee.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeIn} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-black border border-white/20 flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3">One-Tap Settlement</h3>
              <p className="text-zinc-400 max-w-xs">Confirm with your PIN. The recipient instantly gets funds in INR with a familiar UPI-style success screen.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- DEVELOPER API SECTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 items-center shadow-2xl overflow-hidden relative">

          {/* Subtle grid background for the card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="flex-1 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-6 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Developer API
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Integrate crypto payments in minutes.</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              With the Globypay Merchant Gateway, your e-commerce store can accept USDC, ETH, and BTC globally, while you receive daily settlements in INR. Just a few lines of code.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/5">
                Read the Docs
              </button>
            </div>
          </motion.div>

          {/* Fake Code Editor */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="w-full lg:w-[500px] relative z-10"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl">
              {/* Editor Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-xs font-mono text-zinc-500">checkout.js</div>
              </div>
              {/* Editor Body */}
              <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-zinc-300">
                <pre>
                  <span className="text-purple-400">import</span> {'{ Globypay }'} <span className="text-purple-400">from</span> <span className="text-emerald-300">'@globypay/node'</span>;
                  <br /><br />
                  <span className="text-zinc-500">// Initialize with your secret key</span><br />
                  <span className="text-purple-400">const</span> globypay = <span className="text-purple-400">new</span> Globypay(<span className="text-emerald-300">'sk_live_12345'</span>);
                  <br /><br />
                  <span className="text-purple-400">await</span> globypay.payments.<span className="text-blue-400">create</span>({'{'}<br />
                  {'  '}amount: <span className="text-orange-400">5000</span>, <span className="text-zinc-500">// Amount in INR</span><br />
                  {'  '}currency: <span className="text-emerald-300">'INR'</span>,<br />
                  {'  '}accepts: [<span className="text-emerald-300">'USDT'</span>, <span className="text-emerald-300">'ETH'</span>],<br />
                  {'  '}settlement_destination: <span className="text-emerald-300">'UPI'</span>,<br />
                  {'  '}customer_phone: <span className="text-emerald-300">'+919876543210'</span><br />
                  {'}'});
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* --- CTA SECTION --- */}
      <section id="waitlist" className="py-32 px-6 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-300/30 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUpBlur}
          className="max-w-3xl mx-auto text-center relative z-10 bg-white/80 p-12 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 backdrop-blur-xl"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-slate-900">Ready to abstract the complexity?</h2>
          <p className="text-xl text-slate-600 mb-10">Join the waitlist for Globypay and be the first to experience frictionless cross-border payments.</p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all text-slate-900 placeholder:text-slate-400"
            />
            <button className="px-8 py-4 rounded-full bg-[#121212] text-white font-bold hover:bg-black transition-colors whitespace-nowrap shadow-md shadow-black/20">
              Get Early Access
            </button>
          </form>
        </motion.div>
      </section>

    </div>
  );
}