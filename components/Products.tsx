
"use client";

import { useState } from "react";

export default function Products() {
    const categories = [
        "Todos", "Sandwiches 🥪", "Pizzas 🍕", "Especiales 🍽️", "Desayuno ☕", "Empanadas 🥟", "Bebidas 🥤"
    ];

    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const products = [
        { name: "Ensalada César", price: "$12.00", image: "🥗", category: "Especiales 🍽️", description: "Lechuga romana, crutones, queso parmesano y aderezo César casero." },
        { name: "Wrap de Pollo", price: "$10.00", image: "🌯", category: "Sandwiches 🥪", description: "Pollo a la parrilla, vegetales frescos y salsa de yogurt en tortilla integral." },
        { name: "Smoothie Verde", price: "$6.00", image: "🥤", category: "Bebidas 🥤", description: "Espinaca, piña, manzana y jengibre para un boost de energía." },
        { name: "Bowl de Quinoa", price: "$14.00", image: "🥣", category: "Especiales 🍽️", description: "Quinoa, aguacate, tomate cherry, pepino y garbanzos." },
        { name: "Sandwich de Pavo", price: "$8.00", image: "🥪", category: "Sandwiches 🥪", description: "Pavo ahumado, queso swiss, lechuga y tomate en pan integral." },
        { name: "Pizza Margarita", price: "$15.00", image: "🍕", category: "Pizzas 🍕", description: "Salsa de tomate casera, mozzarella fresca y albahaca." },
        { name: "Café con Leche", price: "$4.00", image: "☕", category: "Desayuno ☕", description: "Café recién molido con leche vaporizada a tu gusto." },
        { name: "Empanada de Carne", price: "$3.00", image: "🥟", category: "Empanadas 🥟", description: "Relleno jugoso de carne cortada a cuchillo, aceitunas y huevo." },
    ];

    const filteredProducts = selectedCategory === "Todos"
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <section id="products" className="py-20 ">
            <div className=" w-screen flex items-center backdrop-blur-xs justify-center bg-amber-50/50 h-20">
                <p className="text-center text-[#3C3F3C] font-semibold">
                    🍰️ Todos los combos van con postre diet <br />
                    ⭐️ Sandwich con crostones símil papas-fritas
                </p>
            </div>
            <div className="container mx-auto ">
                <h2 className="text-4xl w-screen backdrop-blur-xs bg-amber-50/50 h-15  font-bold text-center  text-[#3C3F3C]">Menu</h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap backdrop-blur-xs bg-amber-50/50 justify-center pb-5 gap-2 mb-8 max-w-5xl mx-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-1.5 text-sm rounded-full font-semibold transition-all ${selectedCategory === category
                                ? "bg-green-600 text-white shadow-md scale-105"
                                : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="bg-amber-50/70 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center relative h-full">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                            <div className="text-6xl mb-4 py-4">{product.image}</div>
                            <p className="text-[#3C3F3C] font-semibold text-sm mb-12 grow">{product.description}</p>

                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                                <p className="text-[#C72425] font-bold text-xl">{product.price}</p>
                                <button className="bg-[#C72425] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#a61e1f] transition-colors text-sm shadow-md">
                                    Agregar +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
