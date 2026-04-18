"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight, Bitcoin, Hexagon, Sun, Dog, Globe, Landmark } from "lucide-react";

export function PhoneMockup() {
  const [activeStep, setActiveStep] = useState(0);

  // Cycle through transaction steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((current) => {
        if (current === 0) return 1;
        if (current === 1) return 2;
        if (current === 2) return 3;
        if (current === 3) return 4;
        return 0; // After 4, go back to 0
      });
    }, 3500); // 3.5 seconds per step
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-center perspective-1000 h-[600px] w-full">
      {/* 3D Container */}
      <motion.div
        animate={{
          rotateY: [-15, 15, -15],
          rotateX: [5, -5, 5],
          y: [-10, 10, -10]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[640px] bg-slate-950 rounded-[3.5rem] p-3 shadow-2xl shadow-blue-900/20"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Silver Edge/Bezel */}
        <div className="absolute inset-0 rounded-[3.5rem] border-[4px] border-slate-700/50 pointer-events-none" />
        <div className="absolute inset-[2px] rounded-[3.25rem] border border-slate-800 pointer-events-none" />

        {/* Screen */}
        <div className="relative w-full h-full bg-[#f9f9f9] rounded-[2.75rem] overflow-hidden flex flex-col font-sans">

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-between px-3">
            <div className="w-2 h-2 rounded-full bg-slate-800" />
            <div className="w-2 h-2 rounded-full bg-emerald-900 animate-pulse" />
          </div>

          {/* Status Bar */}
          <div className="w-full h-12 flex justify-between items-center px-6 pt-2 text-[10px] font-bold text-slate-800 z-40 relative">
            <span>9:41</span>
            <div className="flex gap-1.5 items-center">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
            </div>
          </div>

          {/* App Header */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center gap-2 mb-6">
              <img src="/globypay-logo.png" alt="Globypay Logo" className="h-6 w-auto object-contain drop-shadow-sm" />
              <span className="font-bold tracking-tight text-slate-900 text-sm">Globypay</span>
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 px-6 relative w-full h-full">
            <AnimatePresence mode="wait">

              {/* STEP 0: Select Method */}
              {activeStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-x-6 top-0"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Send Money</h2>
                    <p className="text-xs text-slate-500 font-medium">Choose payment method.</p>
                  </div>

                  <div className="space-y-3 mt-6">
                    <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-600 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Crypto Wallet</p>
                          <p className="text-[10px] text-slate-500">Send via blockchain</p>
                        </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between opacity-50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                          <Landmark className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">UPI / Bank</p>
                          <p className="text-[10px] text-slate-500">Send from local bank</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 1: Select Crypto Asset */}
              {activeStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-x-6 top-0"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Select Coin</h2>
                    <p className="text-xs text-slate-500 font-medium">Which crypto to send?</p>
                  </div>

                  <div className="space-y-2 mt-5">
                    <div className="p-3 rounded-2xl bg-blue-50 border-2 border-blue-600 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                          <Bitcoin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Bitcoin</p>
                          <p className="text-[10px] text-slate-500">BTC</p>
                        </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>

                    <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between opacity-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                          <Hexagon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Ethereum</p>
                          <p className="text-[10px] text-slate-500">ETH</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between opacity-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                          <Sun className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Solana</p>
                          <p className="text-[10px] text-slate-500">SOL</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between opacity-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                          <Dog className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Dogecoin</p>
                          <p className="text-[10px] text-slate-500">DOGE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Enter Details */}
              {activeStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-x-6 top-0 bottom-0"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Send Crypto</h2>
                    <p className="text-xs text-slate-500 font-medium">To any mobile number globally.</p>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Recipient</label>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🇮🇳</span>
                        <span className="text-lg font-semibold text-slate-800">+91 98765 43210</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Amount</label>
                        <span className="text-2xl font-bold text-slate-900">₹500</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-slate-100 flex items-center gap-1">
                        <Bitcoin className="w-4 h-4 text-orange-500" />
                        <span className="text-xs font-bold uppercase">BTC</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-0 right-0">
                    <div className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold flex justify-center items-center gap-2 shadow-lg shadow-blue-600/30">
                      Slide to Send <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Processing */}
              {activeStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center pb-20"
                >
                  <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-6" />
                  <h2 className="text-lg font-bold text-slate-900 mb-2">Processing...</h2>
                </motion.div>
              )}

              {/* STEP 4: Success */}
              {activeStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex flex-col items-center justify-center pb-20 px-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Sent!</h2>

                  <div className="w-full p-5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-4 text-center">
                    <p className="text-xs text-slate-500 mb-1">Recipient gets exactly</p>
                    <p className="text-3xl font-bold text-emerald-600 mb-4">₹ 500</p>
                    <div className="h-px w-full bg-slate-100 mb-4"></div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full z-50" />
        </div>
      </motion.div>
    </div>
  );
}
