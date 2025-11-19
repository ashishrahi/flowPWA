"use client";

import { useCallback } from 'react';
import Features from "@/AppComponents/AppFeatures/Features";
import Footer from "@/AppComponents/AppFooter/Footer";
import Hero from "@/AppComponents/AppHero/Hero";
import Navbar from "@/AppComponents/AppNavbar/Navbar";
import Pricing from "@/AppComponents/AppPricing/Pricing";
import ContactForm from "@/AppComponents/AppContact/ContactForm";
import Testimonials from "@/AppComponents/AppTestimonials/Testimonials";

export default function Home() {

  const handleAnchorClick = useCallback((hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      const offset = 80; // offset for fixed navbar
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar handleAnchorClick={handleAnchorClick} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
