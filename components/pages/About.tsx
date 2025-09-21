"use client"

import { Github, Linkedin, Twitter, Menu, X, BookOpen, Trophy, Mic, Settings, Users, GraduationCap } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Header from "../Header"
import Footer from "../Footer"

export default function About() {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
                    <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                        Learn about our journey, mission and the team behind CEC Club
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <Image
                            src={""}
                            alt="CEC Club team presentation"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-[#444444] text-lg leading-relaxed mb-6">
                                CEC Club is dedicated to fostering innovation, collaboration, and technological excellence among
                                students and professionals. We believe in the power of technology to transform lives and create
                                meaningful impact in our community.
                            </p>
                            <p className="text-[#444444] text-lg leading-relaxed">
                                Through workshops, projects, and events, we provide a platform for learning, sharing knowledge, and
                                building the next generation of tech leaders.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-[#1a1a1a] p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-[#ffd60a] mb-3">Innovation</h3>
                                <p className="text-[#444444]">
                                    We encourage creative thinking and innovative solutions to real-world problems through technology.
                                </p>
                            </div>

                            <div className="bg-[#1a1a1a] p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-[#ffd60a] mb-3">Collaboration</h3>
                                <p className="text-[#444444]">
                                    Building a strong community where members support each other and work together on exciting projects.
                                </p>
                            </div>

                            <div className="bg-[#1a1a1a] p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-[#ffd60a] mb-3">Excellence</h3>
                                <p className="text-[#444444]">
                                    Striving for the highest standards in everything we do, from code quality to event organization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-white mb-12">Our Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-[#1a1a1a] p-8 rounded-lg">
                                <div className="text-4xl font-bold text-[#ffd60a] mb-2">50+</div>
                                <div className="text-white font-semibold mb-2">Active Members</div>
                                <p className="text-[#444444] text-sm">Passionate students and professionals from diverse backgrounds</p>
                            </div>

                            <div className="bg-[#1a1a1a] p-8 rounded-lg">
                                <div className="text-4xl font-bold text-[#ffd60a] mb-2">20+</div>
                                <div className="text-white font-semibold mb-2">Projects Completed</div>
                                <p className="text-[#444444] text-sm">Innovative solutions and applications built by our community</p>
                            </div>

                            <div className="bg-[#1a1a1a] p-8 rounded-lg">
                                <div className="text-4xl font-bold text-[#ffd60a] mb-2">15+</div>
                                <div className="text-white font-semibold mb-2">Events Organized</div>
                                <p className="text-[#444444] text-sm">Workshops, hackathons, and tech talks throughout the year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 px-6 bg-[#121212]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
                        <p className="text-blue-400 text-lg">Explore the various activities and initiatives we organize</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Workshops & Courses */}
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
                            <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="text-black" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Workshops & Courses</h3>
                            <p className="text-[#444444] text-sm leading-relaxed">
                                We regularly host hands-on workshops covering topics like web development, mobile apps, AI,
                                cybersecurity, and more.
                            </p>
                        </div>

                        {/* Competitions */}
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
                            <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center mb-4">
                                <Trophy className="text-black" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Competitions</h3>
                            <p className="text-[#444444] text-sm leading-relaxed">
                                We organize and participate in coding competitions, hackathons, and tech challenges to foster innovation
                                and teamwork.
                            </p>
                        </div>

                        {/* Conferences */}
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
                            <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center mb-4">
                                <Mic className="text-black" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Conferences</h3>
                            <p className="text-[#444444] text-sm leading-relaxed">
                                Our speaker series brings industry experts and academics to share insights on emerging technologies and
                                career paths.
                            </p>
                        </div>

                        {/* Projects */}
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
                            <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center mb-4">
                                <Settings className="text-black" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Projects</h3>
                            <p className="text-[#444444] text-sm leading-relaxed">
                                We facilitate collaborative projects that solve real problems while building practical experience for
                                members.
                            </p>
                        </div>

                        {/* Networking */}
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
                            <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center mb-4">
                                <Users className="text-black" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Networking</h3>
                            <p className="text-[#444444] text-sm leading-relaxed">
                                Our mixers and industry visits help students build connections that lead to internships and job
                                opportunities.
                            </p>
                        </div>

                        {/* Mentorship */}
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
                            <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center mb-4">
                                <GraduationCap className="text-black" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Mentorship</h3>
                            <p className="text-[#444444] text-sm leading-relaxed">
                                We pair experienced members with newcomers to provide guidance, support, and knowledge transfer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="py-16 px-6 bg-[#121212]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Leadership Team</h2>
                        <p className="text-blue-400 text-lg">Meet the dedicated individuals who make CEC Club possible</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Ahmed Ben Ahmed - President */}
                        <div className="text-center">
                            <div className="relative mb-4">
                                <Image
                                    src={}
                                    alt="Ahmed Ben Ahmed"
                                    className="w-30 h-30 rounded-full mx-auto border-4 border-[#ffd60a] object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">Ahmed Ben Ahmed</h3>
                            <p className="text-[#ffd60a] text-sm font-medium mb-2">President</p>
                            <p className="text-[#444444] text-sm mb-4 leading-relaxed">
                                Computer Engineering student leading the club's vision and operations.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                            >
                                <Linkedin size={16} className="text-white" />
                            </a>
                        </div>

                        {/* Zouhair Serrar - Vice President */}
                        <div className="text-center">
                            <div className="relative mb-4">
                                <Image
                                    src={assets.zouhir}
                                    alt="Zouhair Serrar"
                                    className="w-30 h-30 rounded-full mx-auto border-4 border-[#ffd60a] object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">Zouhair Serrar</h3>
                            <p className="text-[#ffd60a] text-sm font-medium mb-2">Vice President</p>
                            <p className="text-[#444444] text-sm mb-4 leading-relaxed">
                                Supporting club leadership and overseeing project execution.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                            >
                                <Linkedin size={16} className="text-white" />
                            </a>
                        </div>

                        {/* Chaimaa Dhah - Secrétaire Générale */}
                        <div className="text-center">
                            <div className="relative mb-4">
                                <Image
                                    src={assets.chaimaa}
                                    alt="Chaimaa Dhah"
                                    className="w-30 h-30 rounded-full mx-auto border-4 border-[#ffd60a] object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">Chaimaa Dhah</h3>
                            <p className="text-[#ffd60a] text-sm font-medium mb-2">Secrétaire Générale</p>
                            <p className="text-[#444444] text-sm mb-4 leading-relaxed">
                                Managing club communications and administrative tasks.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                            >
                                <Linkedin size={16} className="text-white" />
                            </a>
                        </div>

                        {/* Aya Farmati - Trésorière */}
                        <div className="text-center">
                            <div className="relative mb-4">
                                <Image
                                    src={assets.aya}
                                    alt="Aya Farmati"
                                    className="w-30 h-30 rounded-full mx-auto border-4 border-[#ffd60a] object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">Aya Farmati</h3>
                            <p className="text-[#ffd60a] text-sm font-medium mb-2">Trésorière</p>
                            <p className="text-[#444444] text-sm mb-4 leading-relaxed">Handling club finances and budget planning.</p>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                            >
                                <Linkedin size={16} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <Footer />
        </div>
    )
}
