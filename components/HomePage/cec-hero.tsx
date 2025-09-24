"use client"

import { useEffect, useState } from "react"
import { AnimatedBackground } from "./animated-background"
import { AnimatedStats } from "./animated-stats"
import Image, { StaticImageData } from "next/image"
import { assets } from "@/data"
import { useSelectYear } from "@/providers/SelectYearProvider"
import Header from "../Header"
import Footer from "../Footer"

const ShowHero = ({ year }: { year: number }) => {

    const [source, setSource] = useState<StaticImageData | string>("")

    useEffect(() => {
        for (let i = 0; i < assets.length; i++) {
            if (assets[i].id === year) {
                setSource(assets[i].hero);
                break;
            } else {
                setSource("/placeholder.svg");
            }
        }
    }, [year]);

    return <div className="w-[100%] h-[100%]">
        <Image
            src={source || "/placeholder.svg"}
            alt="hero"
            className="object-cover w-full h-full"
            fill
        />
    </div>
}

export function CECHero() {
    const [mounted, setMounted] = useState(false);

    const { year } = useSelectYear();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
            <Header />
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            >
                <ShowHero year={year} />
                <div className="absolute inset-0 bg-dark-1" />
            </div>

            <AnimatedBackground />

            <div className="relative z-10 max-w-6xl px-4 mx-auto text-center">
                {/* Main Heading */}
                <div className="mb-8">
                    <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl text-balance">
                        Welcome to
                        <span className="ml-4 relative text-[#ffd60a]">
                            CEC Club!
                            <span className="absolute bottom-0 left-0 inline-block w-[100%] h-[4px] bg-[#ffd60a] shadow-[0_0px_6px_yellow] rounded-md" />
                            <div className="absolute left-0 right-0 h-1 rounded-full -bottom-2 bg-gradient-to-r from-primary to-accent" />
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300 md:text-xl text-pretty">
                        Your hub for technology, innovation, and collaboration.
                    </p>
                </div>

                <AnimatedStats />

            </div>
        </section>
    )
}
