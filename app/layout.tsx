
import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Olivia Light Food | Comida Sana, Sin Grasa y Sin Azúcar",
  description: "Disfruta de la mejor comida sana en Olivia Light. Especialistas en platos sin grasa, sin azúcar y sin sal. Delivery de viandas saludables, catering para eventos y menú ejecutivo natural.",
  keywords: [
    "comida sana",
    "sin grasa",
    "sin azúcar",
    "sin sal",
    "comida saludable",
    "viandas light",
    "delivery saludable",
    "Olivia Light Food",
    "alimentación natural",
    "menú ejecutivo saludable",
    "catering saludable para eventos",
    "islas gastronómicas saludables"
  ],
  authors: [{ name: "Olivia Light Food" }],
  creator: "Olivia Light Food",
  publisher: "Olivia Light Food",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Olivia Light Food | Comida Sana, Sin Grasa y Sin Azúcar",
    description: "Comida fresca, natural y saludable. Especialistas en menús sin sal, sin azúcar y sin grasas. ¡Haz tu pedido online!",
    type: "website",
    locale: "es_AR",
    url: "https://lightfood.com",
    siteName: "Olivia Light Food",
    images: [
      {
        url: "/images/logo_final.svg",
        width: 800,
        height: 600,
        alt: "Logo Olivia Light Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivia Light Food | Comida Sana, Sin Grasa y Sin Azúcar",
    description: "Alimentación consciente y sabrosa. Viandas saludables sin sal, azúcar ni grasas saturadas.",
    images: ["/images/logo_final.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Olivia Light Food",
              "image": "https://lightfood.com/images/logo_final.svg",
              "@id": "https://lightfood.com",
              "url": "https://lightfood.com",
              "telephone": "+5491165878387",
              "email": "Olivialightfastfoodllc@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tu Dirección Aquí",
                "addressLocality": "Buenos Aires",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.6037,
                "longitude": -58.3816
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "menu": "https://lightfood.com/#products",
              "servesCuisine": ["Saludable", "Light", "Vegetariana"],
              "priceRange": "$$"
            }),
          }}
        />
      </head>
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
