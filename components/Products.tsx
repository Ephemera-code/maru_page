
"use client";

import { useState } from "react";
import menuData from "@/app/data/menu.json";
import { useCart } from "@/context/CartContext";
import { Wheat } from "lucide-react";
import  Image from "next/image";

interface Product {
    name: string;
    price: string;
    image: string;
    category: string;
    description: string;
}

export default function Products() {
    const { addToCart } = useCart();

    // Relación categoría -> emoji


    // Relación categoría -> icono imagen
    // Aseguramos coincidencia exacta con los nombres de categoría del JSON
    const categoryIcons: Record<string, string | string[]> = {
        "Sandwiches": "/images/sandwich.png",
        "Pizzas": "/images/pizza.png",
        "Platos Principales y Pastas": [
            "/images/churrasco.png",
            "/images/pasta.png"
        ],
        "Ensaladas": "/images/ensalada.png",
        "Desayunos y Meriendas": "/images/desayuno-ingles.png",
        "Empanadas": "/images/empanada.png"
    };

    const categories = ["Todos", ...menuData.menu.map(c => c.categoria)];

    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const products: Product[] = menuData.menu.flatMap(category =>
        category.productos.map(product => ({
            name: product.nombre,
            price: `$${product.precio}`,
            image: "", // Sin emoji ni imagen
            category: category.categoria,
            description: product.descripcion
        }))
    );

    const filteredProducts = selectedCategory === "Todos"
        ? [
            ...products.filter(p => !p.category.startsWith("Ensaladas") && !p.category.startsWith("Desayunos y Meriendas")),
            ...products.filter(p => p.category.startsWith("Ensaladas") || p.category.startsWith("Desayunos y Meriendas"))
        ]
        : products.filter(product => product.category === selectedCategory);

    const handleAddToCart = (product: Product) => {
        // Robust price parsing keeping only numbers
        const priceNumber = parseInt(product.price.replace(/\D/g, ""));
        addToCart({
            name: product.name,
            price: priceNumber,
            image: product.image
        });
    };

    return (
        <section id="products" className="py-12 bg-[#ccdbb0c9] overflow-hidden">
            <div className="w-full px-3 flex flex-col items-center justify-center">
                <p className="text-center  text-lg text-[#4A5D23] font-semibold">
                    ⭐️ Todos los Sándwiches van con crostones símil papas-fritas y
                    postre diet 
                </p>
                <div className="flex items-center justify-center gap-2 mb-2 mt-2">
                    <Image src="/images/postre.png" alt="Postre" width={40} height={40}/>
                    <Image src="/images/pescado-y-papas-fritas.png" alt="Pescado" width={40} height={40}/>  <br />
                </div>
                <span className="text-sm text-center font-semibold text-[#4A5D23]/80">(Flan, postrecito de chocolate, de dulce de leche, vainilla, gelatina o ensalada de fruta. Los postres son aleatorios no a eleccion)</span>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center pt-8 gap-2">
                    <div className="bg-[#1B4332]/10 p-3 rounded-full">
                        <Wheat size={55} className="text-[#1B4332]" />
                    </div>
                    <p className="text-[#1B4332] font-bold text-lg text-center px-4 max-w-md uppercase tracking-tight leading-tight">
                        todos nuestros panes son exclusivos de olivia light <br />
                        <span className="text-sm normal-case font-semibold">(Usamos 50% de fibra. Soja, Arveja , Arroz y 50% de harina)</span>
                    </p>
                </div>
                <h2 className="text-4xl w-full h-20 flex items-center justify-center font-bold text-[#1B4332]">Menú</h2>
                <h1 className="sr-only">Comida sana sin grasa y sin azúcar - Olivia Light Food</h1>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center pb-5 gap-2 mb-8 max-w-5xl mx-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-1.5 pt-2 text-sm rounded-full font-semibold transition-all ${selectedCategory === category
                                ? "bg-green-600 text-white shadow-md scale-105"
                                : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-12 w-full">
                    {Array.from(new Set(filteredProducts.map(p => p.category))).map(category => (
                        <div key={category} className="w-full">
                            {(selectedCategory === "Todos" || selectedCategory === category) && (
                                <div className="flex items-center justify-center mb-8">
                                    <div className="h-px bg-[#1B4332]/20 grow md:grow-0 md:w-1/4"></div>
                                    <div className="flex flex-col items-center w-full">
                                        <h3 className="text-2xl font-bold text-[#1B4332] mx-4 uppercase tracking-wider text-center">
                                            {category}
                                        </h3>
                                        <div className="flex items-center justify-center gap-2 mt-2">
                                            {(() => {
                                                const icon = categoryIcons[category];
                                                if (!icon) return null;
                                                if (Array.isArray(icon)) {
                                                    return icon.map((src, idx) => (
                                                        <img key={src} src={src} alt={category + idx} className="inline-block w-8 h-8 align-middle" onError={e => (e.currentTarget.style.display = 'none')} />
                                                    ));
                                                }
                                                return <img src={icon} alt={category} className="w-8 h-8 align-middle" onError={e => (e.currentTarget.style.display = 'none')} />;
                                            })()}
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#1B4332]/20 grow md:grow-0 md:w-1/4"></div>
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                                {filteredProducts.filter(p => p.category === category).map((product, index) => (
                                    <div key={index} className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center relative h-full border border-white/20">
                                        <h3 className="text-xl font-bold text-[#1B4332] mb-2">{product.name}</h3>

                                        <p className="text-[#4A5D23] font-semibold text-sm mb-12 grow">{product.description}</p>

                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                                            <p className="text-[#1B4332] font-bold text-xl">{product.price}</p>
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="bg-[#1B4332] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#E67E22] transition-colors text-sm shadow-md active:scale-95"
                                            >
                                                Agregar +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
