"use client";

import { useState } from "react";
import ThemeToggle from "@/AppComponents/AppTheme/ThemeToggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LogoDark from "@/assets/Asset1.png";
import LogoLight from "@/assets/Asset2.png";

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
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[95%] max-w-4xl">
        
        <div className="backdrop-blur-2xl 
                        border border-neutral-200 dark:border-neutral-800
                        rounded-2xl 
                        bg-white/80 dark:bg-neutral-900/80 
                        shadow-lg">
          
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">

            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer z-20 flex-shrink-0">
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
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-neutral-600 dark:text-neutral-400
                             hover:text-neutral-900 dark:hover:text-neutral-100
                             transition-colors text-sm font-medium 
                             px-4 py-2 rounded-full
                             hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              <ThemeToggle />
              <button
                onClick={() => handleNavClick("#contact")}
                className="bg-neutral-900 dark:bg-neutral-100
                           text-white dark:text-black
                           px-4 py-2 rounded-lg text-sm font-medium
                           transition-all duration-300
                           hover:scale-105
                           hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg
                           bg-neutral-100 dark:bg-neutral-800
                           border border-neutral-200 dark:border-neutral-700"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left 
                               text-neutral-600 dark:text-neutral-400
                               hover:text-neutral-900 dark:hover:text-neutral-100
                               py-3 px-4 rounded-lg
                               hover:bg-neutral-100 dark:hover:bg-neutral-800
                               transition-all duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </button>
                ))}

                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full mt-4
                             bg-neutral-900 dark:bg-neutral-100
                             text-white dark:text-black
                             py-3 px-4 rounded-lg
                             transition-all duration-300
                             hover:bg-neutral-800 dark:hover:bg-neutral-200"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}