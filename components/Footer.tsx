import { Instagram, Linkedin } from "lucide-react";
import React from "react";
import QuickLinks from "./QuickLinks";
import ResourcesLinks from "./ResourcesLinks";

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white px-6 pt-12 pb-5 mt-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <div className="mb-4 text-2xl font-bold">
                            <span className="text-[#ffd60a] mr-1">CEC</span>
                            <span className="text-white">CLUB</span>
                        </div>
                        <p className="mb-6 text-xl text-light">
                            Technology we love it, live it, share it
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/company/computer-engineering-club-cec/" target="_blank"
                                className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#ffd60a] hover:text-black transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/cec_ensab/?igsh=NHZudXp6cnM2c3po" target="_blank"
                                className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center hover:bg-[#ffd60a] hover:text-black transition-colors"
                            >
                                <Instagram size={18} />
                            </a>

                        </div>
                    </div>

                    <QuickLinks />

                    <ResourcesLinks />

                    {/* Contact */}
                    <div className="md:-ml-20">
                        <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                        <div className="space-y-2 text-[#444444]">
                            <a
                                className="inline-block transition-colors cursor-pointer hover:text-main"
                                href="" target="_blank">computer.engineering.ensab22@gmail.com</a>
                            <p>(+212) 612345678</p>
                            <p>
                                ENSA Berrechid Campus,
                                <br />
                                <a className="inline-block transition-colors cursor-pointer hover:text-main"
                                    href="https://www.google.com/maps/place/National+School+of+applied+sciences_BERRECHID/@33.2583511,-7.5840194,15z/data=!4m6!3m5!1s0xda63ce6a6c999b5:0x9823260201eae931!8m2!3d33.2583511!4d-7.5840194!16s%2Fg%2F1hd_fbwsk?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank">
                                    B.P :218, Avenue de l'université, Berrechid
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#333333] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[#444444] text-sm">
                        © 2025 Ignite Tech Hub. All rights reserved.
                    </p>
                    <div className="flex mt-4 space-x-6 md:mt-0">
                        <a
                            href="#"
                            className="text-[#444444] hover:text-[#ffd60a] text-sm transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <span className="text-[#444444]">|</span>
                        <a
                            href="#"
                            className="text-[#444444] hover:text-[#ffd60a] text-sm transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
