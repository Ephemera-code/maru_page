"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Show loader for 2 seconds to ensure assets load visually or just for effect

        const handleLoad = () => setIsLoading(false);

        if (document.readyState === "complete") {
            // If already loaded, just wait for timer
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            clearTimeout(timer);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 opacity-100">
            <div className="relative flex flex-col items-center animate-pulse">
                <Image
                    src="/images/logo.svg"
                    alt="Loading..."
                    width={200}
                    height={200}
                    className="w-48 h-auto"
                    priority
                />
            </div>
        </div>
    );
}
