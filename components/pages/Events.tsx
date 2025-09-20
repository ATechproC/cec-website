"use client"

import { Button } from "@/components/ui/button"
import { assets } from "@/constants"
import { Github, Linkedin, Twitter, Menu, X, Calendar, MapPin, Clock, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Header from "../Header"
import Footer from "../Footer"

export default function Events() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const events = [
        {
            id: 1,
            title: "Web Development Workshop",
            date: "March 15, 2025",
            time: "2:00 PM - 5:00 PM",
            location: "ENSA Berrechid - Lab A",
            attendees: 25,
            description:
                "Learn modern web development with React, Next.js, and Tailwind CSS. Perfect for beginners and intermediate developers.",
            image: "/web-development-workshop-coding.jpg",
        },
        {
            id: 2,
            title: "AI & Machine Learning Seminar",
            date: "March 22, 2025",
            time: "10:00 AM - 12:00 PM",
            location: "ENSA Berrechid - Amphitheater",
            attendees: 50,
            description:
                "Explore the latest trends in AI and ML with industry experts. Includes hands-on demonstrations and Q&A session.",
            image: "/artificial-intelligence-machine-learning-presentat.jpg",
        },
        {
            id: 3,
            title: "Hackathon 2025",
            date: "April 5-6, 2025",
            time: "9:00 AM - 6:00 PM",
            location: "ENSA Berrechid - Main Hall",
            attendees: 100,
            description:
                "48-hour coding challenge to solve real-world problems. Teams of 3-4 members. Prizes for top 3 solutions.",
            image: "/placeholder-qswx0.png",
        },
        {
            id: 4,
            title: "Cybersecurity Workshop",
            date: "April 12, 2025",
            time: "3:00 PM - 6:00 PM",
            location: "ENSA Berrechid - Lab B",
            attendees: 30,
            description: "Learn about cybersecurity fundamentals, ethical hacking, and how to protect systems from threats.",
            image: "/cybersecurity-hacking-workshop-computer-security.jpg",
        },
        {
            id: 5,
            title: "Mobile App Development",
            date: "April 19, 2025",
            time: "1:00 PM - 4:00 PM",
            location: "ENSA Berrechid - Lab C",
            attendees: 35,
            description: "Build your first mobile app using React Native. From setup to deployment on app stores.",
            image: "/mobile-app-development.png",
        },
        {
            id: 6,
            title: "Tech Career Fair",
            date: "April 26, 2025",
            time: "9:00 AM - 4:00 PM",
            location: "ENSA Berrechid - Campus",
            attendees: 200,
            description:
                "Meet with top tech companies, learn about internship opportunities, and network with industry professionals.",
            image: "/career-fair-tech-companies-networking.jpg",
        },
    ]

    const pastEvents = [
        {
            id: 1,
            title: "Problem Solving",
            date: "April 24, 2025",
            time: "10:00 PM",
            location: "Google Meet",
            description:
                "A session focused on problem-solving techniques and critical thinking. Discover advanced approaches to tackle complex programming challenges.",
            image: assets.problem_solving_event,
            featured: true,
        },
        {
            id: 2,
            title: "Hackathons: Where It All Began",
            date: "December 27, 2024",
            location: "Online",
            speakers: ["Hassan Maghribi", "Otmane Moussaoui", "Ismail Hamdach"],
            description: "Exploring the origins and impact of hackathons with industry experts.",
            image: assets.pod,
            featured: false,
        },
    ]

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
                <div className="max-w-7xl mx-auto">
                    <div className="border-4 border-[#ffd60a] rounded-lg p-12 md:p-20 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-[#ffd60a]">EVENTS</span>
                            <span className="text-white"> & WORKSHOPS</span>
                        </h1>
                        <div className="w-24 h-1 bg-[#ffd60a] mx-auto mb-8"></div>
                        <p className="text-xl text-white max-w-2xl mx-auto">
                            Discover our tech gatherings, workshops, and learning opportunities
                        </p>
                    </div>
                </div>
            </section>

            {/* Past Events Section */}
            <section className="px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            <span className="text-[#ffd60a]">{"{ "}</span>
                            <span className="text-white">PAST EVENTS</span>
                            <span className="text-[#ffd60a]">{" }"}</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#ffd60a] mx-auto"></div>
                    </div>

                    <div className="space-y-8">
                        {pastEvents.map((event) => (
                            <div
                                key={event.id}
                                className={`border-2 border-[#ffd60a] rounded-lg overflow-hidden ${event.featured ? "lg:flex lg:items-center" : "max-w-2xl"
                                    }`}
                            >
                                {event.featured ? (
                                    // Featured event layout
                                    <>
                                        <div className="lg:w-1/2">
                                            <div className="relative">
                                                <Image
                                                    src={event.image || "/placeholder.svg"}
                                                    alt={event.title}
                                                    className="w-full h-64 lg:h-80 object-cover"
                                                />
                                                <div className="absolute top-4 right-4">
                                                    <span className="bg-[#ffd60a] text-black px-3 py-1 rounded text-sm font-bold">FEATURED</span>
                                                </div>
                                                <div className="absolute bottom-4 left-4 text-white">
                                                    <div className="flex items-center text-sm mb-1">
                                                        <Calendar size={14} className="mr-2" />
                                                        {event.date}
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <Clock size={14} className="mr-2" />
                                                        {event.time}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 p-8">
                                            <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                                            <div className="flex items-center text-[#ffd60a] text-sm mb-2">
                                                <Calendar size={16} className="mr-2" />
                                                {event.date} - {event.time}
                                            </div>
                                            <div className="flex items-center text-[#ffd60a] text-sm mb-6">
                                                <MapPin size={16} className="mr-2" />
                                                {event.location}
                                            </div>
                                            <p className="text-[#444444] mb-8 leading-relaxed">{event.description}</p>
                                            <Button className="bg-[#ffd60a] text-black hover:bg-[#ffd60a]/90 font-semibold px-8">
                                                EVENT DETAILS
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    // Regular event layout
                                    <div className="flex">
                                        <div className="w-1/3">
                                            <Image
                                                src={event.image || "/placeholder.svg"}
                                                alt={event.title}
                                                className="w-full h-48 object-cover"
                                            />
                                        </div>
                                        <div className="w-2/3 p-6">
                                            <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                                            <div className="flex items-center text-[#ffd60a] text-sm mb-2">
                                                <Calendar size={14} className="mr-2" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center text-[#ffd60a] text-sm mb-4">
                                                <MapPin size={14} className="mr-2" />
                                                {event.location}
                                            </div>
                                            {event.speakers && (
                                                <div className="text-[#444444] text-sm mb-4">
                                                    <strong>Speakers:</strong> {event.speakers.join(", ")}
                                                </div>
                                            )}
                                            <p className="text-[#444444] mb-6 text-sm leading-relaxed">{event.description}</p>
                                            <Button className="bg-[#ffd60a] text-black hover:bg-[#ffd60a]/90 font-semibold text-sm px-6">
                                                LEARN MORE
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
