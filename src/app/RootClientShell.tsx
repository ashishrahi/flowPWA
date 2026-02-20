"use client";

import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import WhatsappFloatingButton from "@/AppComponents/WhatsappFloatingButton";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 mins
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});

interface RootClientShellProps {
  children: ReactNode;
}

export default function RootClientShell({ children }: RootClientShellProps) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* React Query Provider */}
        <QueryClientProvider client={queryClient}>
          
          {/* Background Container */}
          <div className="background-container fixed inset-0 z-0 pointer-events-none">
            <div className="hyperflow-bg">
              <div className="gradient-orb orb-1" />
              <div className="gradient-orb orb-2" />
              <div className="gradient-orb orb-3" />
              <div className="gradient-orb orb-4" />
              <div className="grid-overlay" />
              <div className="noise-texture" />
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content relative z-10">{children}</div>

          {/* WhatsApp Floating Button */}
          <WhatsappFloatingButton />

          {/* Global Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: { fontFamily: "var(--font-geist-sans)" },
            }}
          />

          {/* React Query Devtools */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}