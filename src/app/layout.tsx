// app/layout.tsx
import type { Metadata } from "next";
import RootClientShell from "./RootClientShell";

export const metadata: Metadata = {
  title: "Hyperflow - AI Sales Platform",
  description: "Modern AI-powered sales ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootClientShell>
      {children}
    </RootClientShell>
  );
}