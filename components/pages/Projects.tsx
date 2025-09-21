"use client"

import { Code } from "lucide-react"
import { useEffect, useState } from "react"
import Header from "../Header"
import Footer from "../Footer"
import Image from "next/image"
import { CECProjects, ProjectsProps } from "@/data"
import Link from "next/link"

const ShowProjects = ({ year }: { year: number }) => {
    const [projects, setProjects] = useState([] as ProjectsProps[]);

    useEffect(() => {
        for (let i = 0; i < CECProjects.length; i++) {
            if (CECProjects[i].id === year) {
                setProjects(CECProjects[i].projects);
                break;
            }
        }
    }, [])

    return <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, src, title, desc, link }) => <div key={id}
            className="bg-[#1a1a1a] flex flex-col justify-between rounded-lg overflow-hidden border border-[#333333] hover:border-[#ffd60a] transition-colors">
            <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-blue-700 h-[210px]">
                <Image
                    src={src}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-white"> {title} </h3>
                <p className="text-[#444444] mb-6 leading-relaxed"> {desc} </p>
                <Link href={link}
                    className="w-full flex items-center justify-center gap-1 p-1 font-semibold bg-transparent border border-[#ffd60a] text-[#ffd60a] hover:bg-[#ffd60a] hover:text-black transition-colors">
                    <Code size={16} className="mr-2" />
                    View
                </Link>
            </div>
        </div>)}
    </div>
}

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
                <div className="fixed inset-0 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Hero Section */}
            <section className="px-6 py-16">
                <div className="mx-auto text-center max-w-7xl">
                    <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Our <span className="text-[#ffd60a]">Projects</span>
                    </h1>
                    <p className="text-lg text-[#444444] max-w-4xl mx-auto mb-16">
                        Explore the innovative projects developed by our members. From web and mobile applications to IoT solutions
                        and AI tools, our projects showcase the creativity and technical skills of our community.
                    </p>
                </div>
            </section>

            {/* Projects*/}
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-7xl">
                    <ShowProjects year={2025} />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
