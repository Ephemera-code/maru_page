
import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Light Food | Comida Saludable y Sin Culpa",
  description: "Descubre el sabor de cuidarte con Light Food. Comida fresca, natural, sin sal, sin azúcar y sin grasas saturadas. ¡Haz tu pedido ahora!",
  keywords: ["comida saludable", "sin sal", "sin azúcar", "viandas light", "delivery saludable", "light food", "comida sana"],
  openGraph: {
    title: "Light Food | Comida Saludable y Sin Culpa",
    description: "Comida fresca, natural, sin sal, sin azúcar y sin grasas saturadas. ¡Haz tu pedido ahora!",
    type: "website",
    locale: "es_AR",
    url: "https://lightfood.com", // Replace with actual URL if known, or leave as placeholder
    siteName: "Light Food",
  },
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
        <CartProvider>
          <Loader />
          <Navbar />
          <Background />
          <CartDrawer />
          <section className="flex flex-col min-h-screen relative z-0">
            {children}
          </section>
        </CartProvider>
      </body>
    </html>
  );
}
