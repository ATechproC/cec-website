"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Menu, X, MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"
import Header from "../Header"
import Footer from "../Footer"

export default function Contact() {
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
            <section className="bg-[#ffd60a] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-lg text-white max-w-2xl mx-auto">
                        We'd love to hear from you! Reach out with any questions, ideas, or just to say hello!
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Get In Touch */}
                        <div className="bg-[#1a1a1a] rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                            <p className="text-[#444444] mb-8">
                                Feel free to reach out to us for collaboration, project ideas, or just to connect with our tech
                                community.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#ffd60a] rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin size={20} className="text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Address</h3>
                                        <p className="text-[#444444]">
                                            ENSA Berrechid Campus,
                                            <br />
                                            B.P :218, Avenue de l'université, Berrechid
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#ffd60a] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone size={20} className="text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Phone</h3>
                                        <p className="text-[#444444]">(+212) 612345678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#ffd60a] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail size={20} className="text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Email</h3>
                                        <p className="text-[#444444]">computer.engineering.ensab22@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#ffd60a] hover:text-black transition-colors"
                                    >
                                        <Twitter size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#ffd60a] hover:text-black transition-colors"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#ffd60a] hover:text-black transition-colors"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[#1a1a1a] rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-white font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-[#333333] text-white rounded-lg border border-[#444444] focus:border-[#ffd60a] focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-[#333333] text-white rounded-lg border border-[#444444] focus:border-[#ffd60a] focus:outline-none transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 bg-[#333333] text-white rounded-lg border border-[#444444] focus:border-[#ffd60a] focus:outline-none transition-colors"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="w-full px-4 py-3 bg-[#333333] text-white rounded-lg border border-[#444444] focus:border-[#ffd60a] focus:outline-none transition-colors resize-vertical"
                                        placeholder="Tell us more about your message..."
                                    ></textarea>
                                </div>

                                <Button className="w-full bg-[#ffd60a] text-black hover:bg-[#ffd60a]/90 font-semibold py-3 text-lg">
                                    SEND MESSAGE
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">Find Us</h2>
                        <div className="bg-[#1a1a1a] rounded-lg p-4 overflow-hidden">
                            <div className="w-full h-96 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8234567890123!2d-7.5876543210987654!3d33.2654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sENSA%20Berrechid!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                ></iframe>
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
