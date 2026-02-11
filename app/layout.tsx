
import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Light Food",
  description: "Light Food Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased relative"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        <Background />
        <section className="flex flex-col min-h-screen relative z-0">
          {children}
        </section>
      </body>
    </html>
  );
}
