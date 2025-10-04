import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyperflow Clone - AI Sales Platform",
  description: "Modern AI-powered sales platform clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Background Container - Fixed position for scroll */}
        <div className="background-container">
          <div className="hyperflow-bg">
            <div className="gradient-orb orb-1" />
            <div className="gradient-orb orb-2" />
            <div className="gradient-orb orb-3" />
            <div className="gradient-orb orb-4" />
            <div className="grid-overlay" />
            <div className="noise-texture" />
          </div>
        </div>
        
        {/* Main Content - Normal flow for scroll */}
        <div className="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}