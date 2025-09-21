"use client"

import { Github, Linkedin, Twitter, Menu, X } from "lucide-react"
import { useState } from "react"
import Header from "../Header"
import Footer from "../Footer"
import { assets } from "@/data"
import Image from "next/image"

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-[#121212]">
            {/* Header */}
            <Header 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
            isMobileMenuOpen={isMobileMenuOpen}
            />

            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center">
                {/* <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${assets.hero})`,
                    }}
                >
                </div> */}
                <div className="absolute left-0 top-0 w-[100%] h-[100%]">
                    <Image
                    src={assets.hero}
                    alt="hero"
                    className="w-[100%] h-[100%]"
                    />
                <div className="absolute inset-0 bg-dark-1"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Welcome to{" "}
                        <span className="text-[#ffd60a] relative">
                            CEC Club!
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#ffd60a]"></div>
                        </span>
                    </h1>
                    <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
                        Your hub for technology, innovation, and collaboration.
                    </p>

                    {/* Statistics */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-[#ffd60a] rounded-full flex items-center justify-center mb-2 mx-auto">
                                <span className="text-2xl font-bold text-black">50+</span>
                            </div>
                            <p className="text-white font-semibold tracking-wider">MEMBERS</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 bg-[#ffd60a] rounded-full flex items-center justify-center mb-2 mx-auto">
                                <span className="text-2xl font-bold text-black">20+</span>
                            </div>
                            <p className="text-white font-semibold tracking-wider">PROJECTS</p>
                        </div>
                        <div className="text-center">
                            <div className="w-24 h-24 bg-[#ffd60a] rounded-full flex items-center justify-center mb-2 mx-auto">
                                <span className="text-2xl font-bold text-black">15+</span>
                            </div>
                            <p className="text-white font-semibold tracking-wider">EVENTS</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
