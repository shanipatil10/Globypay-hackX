"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Zap, ShieldCheck } from "lucide-react";

export function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-slate-900 text-slate-300 py-16 px-6 border-t border-slate-800 mt-auto"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Globypay.</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Making crypto payments as easy as UPI. No complex wallets, just phone numbers.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <Zap className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Features</Link></li>
            <li><Link href="/#demo" className="hover:text-blue-400 transition-colors">How it Works</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">API Docs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/know-more" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Compliance</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Globypay Inc. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          All systems operational
        </div>
      </div>
    </motion.footer>
  );
}
