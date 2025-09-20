"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Menu, X, Code } from "lucide-react"
import { useState } from "react"
import Header from "../Header"
import Footer from "../Footer"

export default function Projects() {
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
            <section className="px-6 py-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our <span className="text-[#ffd60a]">Projects</span>
                    </h1>
                    <p className="text-lg text-[#444444] max-w-4xl mx-auto mb-16">
                        Explore the innovative projects developed by our members. From web and mobile applications to IoT solutions
                        and AI tools, our projects showcase the creativity and technical skills of our community.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Weather App */}
                        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333333] hover:border-[#ffd60a] transition-colors">
                            <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative">
                                <img
                                    src="/weather-app-interface-with-temperature-display.jpg"
                                    alt="Weather App Interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">Weather App</h3>
                                <p className="text-[#444444] mb-6 leading-relaxed">
                                    A web application providing real-time weather updates and forecasts. Users can search for cities to
                                    view temperature, conditions, and hourly predictions.
                                </p>
                                <Button className="w-full bg-transparent border border-[#ffd60a] text-[#ffd60a] hover:bg-[#ffd60a] hover:text-black transition-colors">
                                    <Code size={16} className="mr-2" />
                                    Code
                                </Button>
                            </div>
                        </div>

                        {/* CityGuide+ */}
                        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333333] hover:border-[#ffd60a] transition-colors">
                            <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 relative">
                                <img
                                    src="/city-guide-app-with-colorful-moroccan-patterns-and.jpg"
                                    alt="CityGuide+ Interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">CityGuide+</h3>
                                <p className="text-[#444444] mb-6 leading-relaxed">
                                    A web application for discovering and navigating popular cities. Features city information and QR code
                                    integration for enhanced exploration.
                                </p>
                                <Button className="w-full bg-transparent border border-[#ffd60a] text-[#ffd60a] hover:bg-[#ffd60a] hover:text-black transition-colors">
                                    <Code size={16} className="mr-2" />
                                    Code
                                </Button>
                            </div>
                        </div>

                        {/* Palestine */}
                        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333333] hover:border-[#ffd60a] transition-colors">
                            <div className="aspect-video bg-gradient-to-br from-green-600 to-red-600 relative">
                                <img
                                    src="/palestine-news-portal-with-arabic-text-and-cultura.jpg"
                                    alt="Palestine News Portal"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">Palestine</h3>
                                <p className="text-[#444444] mb-6 leading-relaxed">
                                    A news portal dedicated to events, history, and information related to Palestine. Offers categorized
                                    news for easy browsing.
                                </p>
                                <Button className="w-full bg-transparent border border-[#ffd60a] text-[#ffd60a] hover:bg-[#ffd60a] hover:text-black transition-colors">
                                    <Code size={16} className="mr-2" />
                                    Code
                                </Button>
                            </div>
                        </div>

                        {/* IoT Smart Home */}
                        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333333] hover:border-[#ffd60a] transition-colors">
                            <div className="aspect-video bg-gradient-to-br from-purple-500 to-indigo-600 relative">
                                <img
                                    src="/smart-home-iot-dashboard-with-sensors-and-controls.jpg"
                                    alt="IoT Smart Home Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">IoT Smart Home</h3>
                                <p className="text-[#444444] mb-6 leading-relaxed">
                                    An IoT solution for home automation with sensor monitoring and remote control capabilities. Built with
                                    Arduino and web dashboard.
                                </p>
                                <Button className="w-full bg-transparent border border-[#ffd60a] text-[#ffd60a] hover:bg-[#ffd60a] hover:text-black transition-colors">
                                    <Code size={16} className="mr-2" />
                                    Code
                                </Button>
                            </div>
                        </div>

                        {/* AI Chatbot */}
                        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333333] hover:border-[#ffd60a] transition-colors">
                            <div className="aspect-video bg-gradient-to-br from-teal-500 to-cyan-600 relative">
                                <img
                                    src="/ai-chatbot-interface-with-conversation-bubbles.jpg"
                                    alt="AI Chatbot Interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">AI Chatbot</h3>
                                <p className="text-[#444444] mb-6 leading-relaxed">
                                    An intelligent chatbot powered by machine learning algorithms. Provides automated customer support and
                                    natural language processing.
                                </p>
                                <Button className="w-full bg-transparent border border-[#ffd60a] text-[#ffd60a] hover:bg-[#ffd60a] hover:text-black transition-colors">
                                    <Code size={16} className="mr-2" />
                                    Code
                                </Button>
                            </div>
                        </div>

                        {/* E-Commerce Platform */}
                        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333333] hover:border-[#ffd60a] transition-colors">
                            <div className="aspect-video bg-gradient-to-br from-pink-500 to-rose-600 relative">
                                <img
                                    src="/e-commerce-platform-with-shopping-cart-and-product.jpg"
                                    alt="E-Commerce Platform"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">E-Commerce Platform</h3>
                                <p className="text-[#444444] mb-6 leading-relaxed">
                                    A full-stack e-commerce solution with payment integration, inventory management, and user
                                    authentication. Built with modern web technologies.
                                </p>
                                <Button className="w-full bg-transparent border border-[#ffd60a] text-[#ffd60a] hover:bg-[#ffd60a] hover:text-black transition-colors">
                                    <Code size={16} className="mr-2" />
                                    Code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
