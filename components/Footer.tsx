import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return <footer className="bg-[#121212] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="md:col-span-1">
                    <div className="text-2xl font-bold mb-4">
                        <span className="text-[#ffd60a]">CEC</span>
                        <span className="text-white">CLUB</span>
                    </div>
                    <p className="text-[#444444] mb-6">Technology we love it, live it, share it</p>
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
                        <a
                            href="#"
                            className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#ffd60a] hover:text-black transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-[#444444] hover:text-[#ffd60a] transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#444444] hover:text-[#ffd60a] transition-colors">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#444444] hover:text-[#ffd60a] transition-colors">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#444444] hover:text-[#ffd60a] transition-colors">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-[#444444] hover:text-[#ffd60a] transition-colors">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#444444] hover:text-[#ffd60a] transition-colors">
                                Resources
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#444444] hover:text-[#ffd60a] transition-colors">
                                Join Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#444444] hover:text-[#ffd60a] transition-colors">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <div className="space-y-2 text-[#444444]">
                        <p>computer.engineering.ensab22@gmail.com</p>
                        <p>(+212) 612345678</p>
                        <p>
                            ENSA Berrechid Campus,
                            <br />
                            B.P :218, Avenue de l'université, Berrechid
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#333333] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-[#444444] text-sm">© 2025 Ignite Tech Hub. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-[#444444] hover:text-[#ffd60a] text-sm transition-colors">
                        Privacy Policy
                    </a>
                    <span className="text-[#444444]">|</span>
                    <a href="#" className="text-[#444444] hover:text-[#ffd60a] text-sm transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer