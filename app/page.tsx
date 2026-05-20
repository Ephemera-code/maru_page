
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
