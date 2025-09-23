"use client"

import { Github, Linkedin } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import Header from "../Header"
import Footer from "../Footer"
import { assets, fakeTeamInfo, teamMembers, TeamProps } from "@/data"
import { mainActivities, missionInfo, statistics } from "@/constants"
import GetIcons from "../GetIcons"

import { useSelectYear } from "@/providers/SelectYearProvider"
import { useMobileMenu } from "@/providers/MobileMenuProvider"

const ShowImage = ({ year }: { year: number }) => {

    const [source, setSource] = useState<StaticImageData | string>("")

    useEffect(() => {
        for (let i = 0; i < assets.length; i++) {
            if (assets[i].id === year) {
                setSource(assets[i].founded);
                break;
            } else {
                setSource("/placeholder.svg");
            }
        }
    }, [year]);

    return <div className="w-[100%] md:h-[600px]">
        <Image
            src={source || "/placeholder.svg"}
            // alt="hero"
            // className="object-cover w-full h-full"
            fill
            alt="hero"
            className="w-[100%] h-[100%] object-cover"
        />
    </div>
}

const ShowTeamMembers = ({ year }: { year: number }) => {

    const [members, setMembers] = useState<TeamProps[]>([]);

    useEffect(() => {
        for (let i = 0; i < teamMembers.length; i++) {
            if (year === teamMembers[i].id) {
                setMembers(teamMembers[i]["team"]);
                break;
            } else {
                setMembers(fakeTeamInfo);
            }
        }
    }, [year]);


    return members?.map(({ id, name, title, desc, profile, linkedIn, gitHub }) => <div
        key={id}
        className="text-center">
        <div className="relative mb-4">
            <Image
                src={profile}
                alt={name}
                className="w-30 h-30 rounded-full mx-auto border-4 border-[#ffd60a] object-cover"
            />
        </div>
        <h3 className="mb-1 text-lg font-semibold text-white"> {name} </h3>
        <p className="text-[#ffd60a] text-sm font-medium mb-2"> {title} </p>
        <p className="text-[#444444] text-sm mb-4 leading-relaxed"> {desc} </p>
        <a
            href={linkedIn}
            className="inline-flex items-center justify-center w-8 h-8 transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
        >
            <Linkedin size={16} className="text-white" />
        </a>
        {gitHub && <a
            href={linkedIn}
            className="inline-flex items-center justify-center w-8 h-8 ml-2 transition-colors bg-white rounded-full hover:bg-black group"
        >
            <Github size={16} className="text-black group-hover:text-white" />
        </a>}
    </div>
    )
}

export default function About() {

    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    const { year } = useSelectYear();

    return (
        <div className="min-h-screen bg-[#121212]">
            {/* Header */}
            <Header />

            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Hero Section */}
            <section className="bg-[#ffd60a] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">About Us</h1>
                    <p className="max-w-2xl mx-auto text-lg text-white md:text-xl">
                        Learn about our journey, mission and the team behind CEC Club
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        {/* <ShowImage year={year} /> */}
                        {
                            year === 2025 && <Image
                                src={assets[0].founded}
                                alt="hero"
                                className="w-[100%] h-[100%]"
                            />
                        }

                    </div>

                    {missionInfo.map(({ id, title, desc1, desc2, missions }) => <div
                        className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
                        key={id}>
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-white"> {title} </h2>
                            <p className="text-[#444444] text-lg leading-relaxed mb-6"> {desc1} </p>
                            <p className="text-[#444444] text-lg leading-relaxed"> {desc2} </p>
                        </div>
                        <div className="space-y-8">
                            {
                                missions.map(({ id, title, desc }) => <div key={id}
                                    className="bg-[#1a1a1a] p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-[#ffd60a] mb-3"> {title} </h3>
                                    <p className="text-[#444444]"> {desc} </p>
                                </div>)
                            }
                        </div>
                    </div>
                    )}

                    {/* Statistics Section */}
                    <div className="mt-16 text-center">
                        {statistics.map(({ id, title, impacts }) => <div key={id}>
                            <h2 className="mb-12 text-3xl font-bold text-white"> {title} </h2>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {
                                    impacts.map(({ id, number, title, desc }) => <div key={id}
                                        className="bg-[#1a1a1a] p-8 rounded-lg">
                                        <div className="text-4xl font-bold text-[#ffd60a] mb-2"> {number} </div>
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

            {/* Leadership Team Section */}
            <section className="py-16 px-6 bg-[#121212]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Leadership Team</h2>
                        <p className="text-lg text-blue-400">Meet the dedicated individuals who make CEC Club possible</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-[80%] m-auto">
                        <ShowTeamMembers year={year} />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
