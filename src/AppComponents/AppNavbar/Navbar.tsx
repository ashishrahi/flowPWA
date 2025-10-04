"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "@/AppComponents/AppTheme/ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  handleAnchorClick: (hash: string) => void;
}

export default function Navbar({ handleAnchorClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    handleAnchorClick(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      >
        {/* Glass Navbar Container */}
        <div className="backdrop-blur-2xl border border-white/15 rounded-2xl bg-white/5 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
            
            {/* Logo - Always Visible */}
            <motion.div
              className="flex items-center space-x-2 group cursor-pointer z-20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              />
              <motion.span
                className="text-white font-bold text-lg md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hyperflow
              </motion.span>
            </motion.div>

            {/* Desktop Navigation Links - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 lg:px-4 lg:py-2 rounded-full hover:bg-white/5 min-w-[80px] lg:min-w-[90px] text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -1,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Buttons - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <motion.button
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium border border-white/20 hover:border-white/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px -8px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button - Visible only on Mobile */}
            <div className="flex items-center space-x-3 md:hidden">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 rounded-lg bg-white/10 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu - Slides down from navbar */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-4 border-t border-white/10 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200 text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.button>
              ))}
              {/* Mobile CTA Button */}
              <motion.button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 text-sm font-medium mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}