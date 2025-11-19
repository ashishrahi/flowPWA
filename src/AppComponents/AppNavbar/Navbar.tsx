"use client";

import { useState } from "react";
import ThemeToggle from "@/AppComponents/AppTheme/ThemeToggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LogoDark from '@/assets/Asset1.png';
import LogoLight from '@/assets/Asset2.png';

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
      <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-[95%] max-w-4xl">
        
        <div className="backdrop-blur-2xl border border-border rounded-2xl bg-background/80 shadow-lg shadow-ring/10">
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">

            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer z-20 flex-shrink-0">
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium px-3 py-2 lg:px-4 lg:py-2 rounded-full hover:bg-accent/40 min-w-[80px] lg:min-w-[90px] text-center whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              <ThemeToggle />
              <button
                className="bg-accent/40 hover:bg-accent text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-border hover:border-ring transition-all duration-300 whitespace-nowrap"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground p-2 rounded-lg bg-accent/30 border border-border"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={18} className="sm:w-5 sm:h-5" />
                ) : (
                  <Menu size={18} className="sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden overflow-hidden border-t border-border/60">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left text-muted-foreground hover:text-foreground py-3 px-4 rounded-lg hover:bg-accent/40 transition-all duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </button>
                ))}

                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-accent/40 hover:bg-accent text-foreground py-3 px-4 rounded-lg border border-border hover:border-ring transition-all duration-300 text-sm font-medium mt-4"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
