"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion" // Note: standard package name
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to avoid hydration mismatch for specific client-side logic
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed top-0 left-0 flex justify-center w-full py-6  z-[50]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-center gap-12 px-0 py-2 bg-white/80 backdrop-blur-md border border-black/5 rounded-full shadow-sm w-full max-w-xl relative"
      >
        <Link href="/" passHref>
          <motion.div
            className="flex items-center gap-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <img
                src="/globypay-logo.png"
                alt="Globypay"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold tracking-tighter text-xl text-slate-900">lobyPay</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            href="/know-more"
            className="text-sm text-gray-500 hover:text-black transition-colors font-semibold tracking-tight"
          >
            Know More
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-500 hover:text-black transition-colors font-semibold tracking-tight"
          >
            Contact us
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#121212] rounded-full hover:bg-black transition-all"
          >
            Join the waitlist
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#F9F9F9] z-[-1] pt-32 px-10 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col space-y-8">
              {["know more", "Contact Us"].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={item === "know more" ? "/know-more" : item === "Contact Us" ? "/contact" : "/"}
                  className="text-4xl font-bold tracking-tighter"
                  onClick={toggleMenu}
                >
                  {item}
                </motion.a>
              ))}
              <hr className="border-black/5" />
              <button className="w-full py-4 bg-black text-white rounded-full font-bold">
                Join the waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }