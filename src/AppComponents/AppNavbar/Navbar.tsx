"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "@/AppComponents/AppTheme/ThemeToggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LogoDark from '@/assets/Asset1.png'
import LogoLight from '@/assets/Asset2.png'


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
        className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-[95%] max-w-4xl"
      >
        {/* Themed Glass Navbar Container */}
        <div className="backdrop-blur-2xl border border-border rounded-2xl bg-background/80 shadow-lg shadow-ring/10">
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">

            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 group cursor-pointer z-20 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
    src={LogoDark} 
    width={120}
    height={120}
    alt="Logo Dark"
    className="hidden dark:block"
  />
  <Image
    src={LogoLight} 
    width={120}
    height={120}
    alt="Logo Light"
    className="block dark:hidden"
  />
            </motion.div>


            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium px-3 py-2 lg:px-4 lg:py-2 rounded-full hover:bg-accent/40 min-w-[80px] lg:min-w-[90px] text-center whitespace-nowrap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              <ThemeToggle />
              <motion.button
                className="bg-accent/40 hover:bg-accent text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-border hover:border-ring transition-all duration-300 whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px -8px var(--color-ring)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:hidden">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-2 rounded-lg bg-accent/30 border border-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={18} className="sm:w-5 sm:h-5" />
                ) : (
                  <Menu size={18} className="sm:w-5 sm:h-5" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border/60"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left text-muted-foreground hover:text-foreground py-3 px-4 rounded-lg hover:bg-accent/40 transition-all duration-200 text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-accent/40 hover:bg-accent text-foreground py-3 px-4 rounded-lg border border-border hover:border-ring transition-all duration-300 text-sm font-medium mt-4"
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
          className="fixed inset-0 bg-background/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
