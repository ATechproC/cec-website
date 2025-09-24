"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Linkedin, Github, Crown, Star, Sparkles } from "lucide-react"
import { fakeTeamInfo, teamMembers, TeamProps } from "@/data"


const ShowTeamMembers = ({ year }: { year: number }) => {
    const [members, setMembers] = useState<TeamProps[]>([])

    useEffect(() => {
        for (let i = 0; i < teamMembers.length; i++) {
            if (year === teamMembers[i].id) {
                setMembers(teamMembers[i]["team"])
                break
            } else {
                setMembers(fakeTeamInfo)
            }
        }
    }, [year])

    const president = members.find((member) => member.title.toLowerCase().includes("président"))
    
    return (
        <section className="py-20 bg-[#0a0a0a] w-[96%] mx-auto">
            <div className="container px-4 mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        Meet Our <span className="text-[#ffd60a]">Team</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Dedicated leaders driving innovation and excellence in computer engineering
                    </p>
                </div>

                {president && (
                    <div className="flex justify-center mb-20">
                        <div className="max-w-3xl w-full px-16 py-16 text-center rounded-3xl bg-gradient-to-br from-[#ffd60a]/40 via-[#ffd60a]/30 to-[#ffd60a]/20 border-4 border-[#ffd60a] shadow-2xl shadow-[#ffd60a]/30 relative overflow-hidden animate-pulse-slow">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ffd60a]/10 to-transparent"></div>
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffd60a]/20 rounded-full -translate-y-20 translate-x-20"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffd60a]/20 rounded-full translate-y-16 -translate-x-16"></div>
                            <div className="absolute top-1/2 left-0 w-24 h-24 bg-[#ffd60a]/15 rounded-full -translate-y-12 -translate-x-12"></div>
                            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#ffd60a]/15 rounded-full"></div>

                            <div className="absolute top-8 left-8">
                                <Sparkles size={20} className="text-[#ffd60a] animate-pulse" />
                            </div>
                            <div className="absolute top-12 right-12">
                                <Star size={16} className="text-[#ffd60a] animate-pulse" style={{ animationDelay: "0.5s" }} />
                            </div>
                            <div className="absolute bottom-8 left-16">
                                <Star size={14} className="text-[#ffd60a] animate-pulse" style={{ animationDelay: "1s" }} />
                            </div>

                            <div className="relative z-10">
                                <div className="relative mb-10">
                                    <div className="relative w-56 h-56 mx-auto">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffd60a] to-[#ffb700] p-1 animate-spin-slow">
                                            <div className="w-full h-full rounded-full bg-[#0a0a0a] p-2">
                                                <Image
                                                    src={president.profile || "/placeholder.svg"}
                                                    alt={president.name}
                                                    fill
                                                    className="object-cover rounded-full shadow-2xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#ffd60a] to-[#ffb700] rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-bounce-slow">
                                            <Crown size={32} className="text-black" />
                                        </div>
                                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#ffd60a] to-[#ffb700] rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                                            <Star size={20} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mb-6 text-4xl font-bold tracking-wide text-white">{president.name}</h3>
                                <p className="text-[#ffd60a] text-2xl font-bold mb-8 uppercase tracking-widest bg-gradient-to-r from-[#ffd60a] to-[#ffb700] bg-clip-text text-transparent">
                                    {president.title}
                                </p>
                                <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-300">{president.desc}</p>
                                <div className="flex justify-center gap-8">
                                    <a
                                        href={president.linkedIn}
                                        className="inline-flex items-center justify-center w-16 h-16 transition-all bg-blue-600 border-2 border-blue-400 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-125 hover:shadow-blue-500/40"
                                    >
                                        <Linkedin size={28} className="text-white" />
                                    </a>
                                    {president.gitHub && (
                                        <a
                                            href={president.gitHub}
                                            target="_blank"
                                            className="inline-flex items-center justify-center w-16 h-16 transition-all bg-white border-2 border-gray-300 rounded-full shadow-2xl hover:bg-black group hover:scale-125 hover:shadow-gray-500/40"
                                        >
                                            <Github size={28} className="text-black group-hover:text-white" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
                    {members.map(({ id, name, title, desc, profile, linkedIn, gitHub }) => {
                        if (id !== 1) {
                            return (
                                <div
                                    key={id}
                                    className="px-8 py-10 text-center rounded-2xl bg-[#121212]/70 hover:bg-[#121212]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ffd60a]/10 border border-gray-800/50 hover:border-[#ffd60a]/40 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#ffd60a]/5 rounded-full -translate-y-10 translate-x-10"></div>

                                    <div className="relative z-10">
                                        <div className="relative mb-6">
                                            <div className="relative w-32 h-32 mx-auto">
                                                <Image
                                                    src={profile || "/placeholder.svg"}
                                                    alt={name}
                                                    fill
                                                    className="rounded-full border-3 border-[#ffd60a] object-cover shadow-lg"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="mb-3 text-xl font-semibold text-white">{name}</h3>
                                        <p className="text-[#ffd60a] text-sm font-semibold mb-4 uppercase tracking-wide">{title}</p>
                                        <p className="mb-8 text-sm leading-relaxed text-gray-400">{desc}</p>
                                        <div className="flex justify-center gap-4">
                                            <a
                                                href={linkedIn}
                                                className="inline-flex items-center justify-center w-12 h-12 transition-all bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110"
                                            >
                                                <Linkedin size={20} className="text-white" />
                                            </a>
                                            {gitHub && (
                                                <a
                                                    href={gitHub}
                                                    className="inline-flex items-center justify-center w-12 h-12 transition-all bg-white rounded-full shadow-lg hover:bg-black group hover:scale-110"
                                                >
                                                    <Github size={20} className="text-black group-hover:text-white" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default ShowTeamMembers
