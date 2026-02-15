"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
    const { items, removeFromCart, updateQuantity, cartTotal, isCartOpen, toggleCart, clearCart } = useCart();

    if (!isCartOpen) return null;

    const handleWhatsAppCheckout = () => {
        const phoneNumber = "5491123456789"; // Replace with actual number
        const message = `Hola! Quiero realizar el siguiente pedido:%0A%0A${items.map(item =>
            `- ${item.quantity}x ${item.name} ($${item.price * item.quantity})`
        ).join('%0A')}%0A%0ATotal: $${cartTotal}%0A%0AForma de pago: ...%0ADirección: ...`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
                <div className="p-4 border-b flex justify-between items-center bg-green-50">
                    <h2 className="text-xl font-bold text-gray-800">Tu Pedido 🛒</h2>
                    <button
                        onClick={toggleCart}
                        className="p-2 hover:bg-green-100 rounded-full transition-colors text-black"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {items.length === 0 ? (
                        <div className="text-center text-gray-500 mt-10">
                            <p className="text-4xl mb-2">🥗</p>
                            <p>Tu carrito está vacío</p>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="flex gap-4 items-center bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-3xl">{item.image}</div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-green-600 font-bold">${item.price * item.quantity}</p>
                                </div>

                                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1 text-black">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="w-6 h-6 flex items-center justify-center hover:bg-white rounded"
                                    >
                                        -
                                    </button>
                                    <span className="w-4 text-center text-sm font-semibold">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="w-6 h-6 flex items-center justify-center hover:bg-white rounded"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-400 hover:text-red-600 p-1"
                                >
                                    🗑️
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-4 border-t bg-gray-50 space-y-4">
                        <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                            <span>Total:</span>
                            <span>${cartTotal}</span>
                        </div>

                        <button
                            onClick={handleWhatsAppCheckout}
                            className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            <span>Pedir por WhatsApp</span>
                            <span className="text-xl">📱</span>
                        </button>
                        <button
                            onClick={toggleCart}
                            className="w-full text-green-600 font-semibold text-sm hover:underline mt-2"
                        >
                            Seguir comprando
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
