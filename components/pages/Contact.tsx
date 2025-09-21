"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"
import Header from "../Header"
import Footer from "../Footer"
import ContactForm from "../ContactForm"

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
                <div className="fixed inset-0 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Hero Section */}
            <section className="bg-[#ffd60a] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
                    <p className="max-w-2xl mx-auto text-lg text-white">
                        We'd love to hear from you! Reach out with any questions, ideas, or just to say hello!
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Get In Touch */}
                        <div className="bg-[#1a1a1a] rounded-lg p-8">
                            <h2 className="mb-6 text-2xl font-bold text-white">Get In Touch</h2>
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
                                        <h3 className="mb-1 font-semibold text-white">Address</h3>
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
                                        <h3 className="mb-1 font-semibold text-white">Phone</h3>
                                        <p className="text-[#444444]">(+212) 612345678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#ffd60a] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail size={20} className="text-black" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-white">Email</h3>
                                        <p className="text-[#444444]">computer.engineering.ensab22@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
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
                        <ContactForm />
                    </div>

                    {/* Map Section */}
                    <div className="mt-16">
                        <h2 className="mb-8 text-3xl font-bold text-center text-white">Find Us</h2>
                        <div className="bg-[#1a1a1a] rounded-lg p-4 overflow-hidden">
                            <div className="w-full overflow-hidden rounded-lg h-96">
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
