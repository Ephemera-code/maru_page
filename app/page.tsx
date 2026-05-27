
"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Footer from "@/components/Footer";
import DesktopNotice from "@/components/DesktopNotice";

export default function Home() {
  const [viewport, setViewport] = useState<"mobile" | "desktop" | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => setViewport(mediaQuery.matches ? "desktop" : "mobile");

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  if (viewport === null) {
    return null;
  }

  if (viewport === "desktop") {
    return <DesktopNotice />;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
