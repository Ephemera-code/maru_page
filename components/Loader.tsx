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
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/90 backdrop-blur-md shadow-md transition-opacity duration-700 opacity-100">
            <div className="relative flex flex-col items-center animate-pulse">
                <Image
                    src="/images/logo_final.svg"
                    alt="Loading..."
                    width={500}
                    height={500}
                    className="w-80 md:w-[500px] h-auto"
                    priority
                />
            </div>
        </div>
    );
}
