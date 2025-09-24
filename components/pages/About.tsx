"use client"

import { Code } from "lucide-react"
import Link from "next/link"
import Header from "../Header"
import Footer from "../Footer"
import ShowTeamMembers from "../ShowTeamMembers"
import { useSelectYear } from "@/providers/SelectYearProvider"
import { mainActivities, statistics } from "@/constants"
import GetIcons from "../GetIcons"
import Image from "next/image"
import { assets } from "@/data"

export default function About() {

    const { year } = useSelectYear();

    const getNumber = (id: number, number: string) => {
        if (year === 2025) {
            return number
        }


        if (year !== 2025 && id === 1) {
            return "13+"
        }

        return "0";
    }

    return (
        <div className="min-h-screen bg-[#121212]">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#ffd60a] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mb-6 text-4xl font-bold text-black md:text-6xl">About CEC Club</h1>
                    <p className="max-w-2xl mx-auto text-lg text-black md:text-xl">
                        Learn about our journey, mission and the team behind the Computer Engineering Club
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                                Our <span className="text-[#ffd60a]">Mission</span>
                            </h2>
                            <p className="mb-6 text-lg leading-relaxed text-gray-400">
                                The Computer Engineering Club (CEC) at ENSA Berrechid is dedicated to fostering innovation,
                                collaboration, and excellence in technology education. We provide a platform for students to explore,
                                learn, and create cutting-edge solutions.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-400">
                                Through workshops, projects, and community engagement, we aim to bridge the gap between academic
                                learning and real-world application, preparing our members for successful careers in technology.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="w-full h-80 bg-gradient-to-br from-[#ffd60a]/20 to-[#ffd60a]/5 rounded-2xl flex items-center justify-center">
                                <div className="text-center">
                                    {
                                        (year === 2025) ? <Image
                                            src={assets[0].founded}
                                            className="object-cover w-full rounded-md h-80"
                                            alt=""
                                        /> : <>
                                            <Code size={80} className="text-[#ffd60a] mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold text-white">Innovation Through Code</h3>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-[#0a0a0a]">
                <div className="max-w-6xl px-6 mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                            Our <span className="text-[#ffd60a]">Impact</span>
                        </h2>
                        <p className="text-lg text-gray-400">Numbers that reflect our commitment to excellence</p>
                    </div>

                    <div className="mt-16 text-center">
                        {statistics.map(({ id, title, impacts }) => <div key={id}>
                            <h2 className="mb-12 text-3xl font-bold text-white"> {title} </h2>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {
                                    impacts.map(({ id, number, title, desc }) => <div key={id}
                                        className="bg-[#1a1a1a] p-8 rounded-lg">
                                        <div className="text-4xl font-bold text-[#ffd60a] mb-2"> {
                                            getNumber(id, number) === "0" ?
                                                <span className="text-[25px]">
                                                    Coming Soon
                                                </span>
                                                : getNumber(id, number)
                                        } </div>
                                        <div className="mb-2 font-semibold text-white"> {title} </div>
                                        <p className="text-[#444444] text-sm"> {desc} </p>
                                    </div>)
                                }
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 px-6 bg-[#121212]">
                {mainActivities.map(({ id, title, desc, activities }) => <div key={id}
                    className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl"> {title} </h2>
                        <p className="text-lg text-blue-400"> {desc} </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            activities.map(({ id, icon, title, desc }) => <div
                                key={id} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
                                <div className="w-12 h-12 bg-[#ffd60a] rounded-lg flex items-center justify-center mb-4">
                                    <GetIcons type={icon} className="text-black" size={24} />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-white"> {title} </h3>
                                <p className="text-[#444444] text-sm leading-relaxed"> {desc} </p>
                            </div>)
                        }
                    </div>
                </div>)}

            </section>

            {/* Team Section */}
            <ShowTeamMembers year={year} />

            {/* CTA Section */}
            <section className="relative px-4 py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#ffd60a]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl text-balance">
                        Become a Part of Our Tech Community
                    </h2>
                    <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed md:text-xl text-black/80 text-pretty">
                        Whether you're a coding expert or just starting out, there's a place for you in CEC Club. Join us and help
                        shape the future of technology at ENSA Berrechid.
                    </p>
                    <Link
                        href="/project-idea"
                        className="inline-block px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform bg-black rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 hover:shadow-xl"
                    >
                        Join CEC Club
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
