"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Header from "../Header"
import Footer from "../Footer"
import { eventsCEC, EventsProps } from "@/data"
import { useSelectYear } from "@/providers/SelectYearProvider"
import { useMobileMenu } from "@/providers/MobileMenuProvider"

const ShowCECEvents = ({ year }: { year: number }) => {

    const [events, setEvents] = useState<EventsProps[] | null>(null)

    useEffect(() => {
        for(let i = 0; i < eventsCEC.length; i++) {
            if(eventsCEC[i].id === year) {
                setEvents(eventsCEC[i].events);
                break;
            }else {
                setEvents(null)
            }
        }
    }, [year]);

    return events?.map(({id, picture, title, date, status, speakers, desc}) => <div key={id} className="flex items-center px-4 py-3 rounded-lg bg-dark-1 w-[90%] m-auto max-sm:flex max-sm:flex-col max-sm:gap-2">
        <div className="md:w-1/3">
            <Image
                src={picture || "/placeholder.svg"}
                alt={title}
                className="object-cover w-full max-h-[300px]" 
            />
        </div>
        <div className="w-2/3 md:p-6">
            <h3 className="mb-3 text-xl font-bold text-white max-sm:text-sm">{title}</h3>
            <div className="flex items-center text-[#ffd60a] text-sm mb-2">
                <Calendar size={14} className="mr-2" />
                {date}
            </div>
            <div className="flex items-center text-[#ffd60a] text-sm mb-4">
                <MapPin size={14} className="mr-2" />
                {status}
            </div>
            {speakers && (
                <div className="text-[#444444] text-sm mb-4">
                    <strong>Speakers:</strong> {speakers.join(", ")}
                </div>
            )}
            <p className="text-[#444444] mb-6 text-sm leading-relaxed">{desc}</p>
            <Button className="bg-[#ffd60a] text-black max-sm:mb-3 hover:bg-[#ffd60a]/90 font-semibold text-sm px-6">
                LEARN MORE
            </Button>
        </div>
    </div>)
    
}

export default function Events() {

    const {isMobileMenuOpen, setIsMobileMenuOpen} = useMobileMenu();

    const {year} = useSelectYear();

    return (
        <div className="min-h-screen bg-[#121212]">
            {/* Header */}
            <Header />

            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Hero Section */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="border-4 border-[#ffd60a] rounded-lg p-12 md:p-20 text-center">
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            <span className="text-[#ffd60a]">EVENTS</span>
                            <span className="text-white"> & WORKSHOPS</span>
                        </h1>
                        <div className="w-24 h-1 bg-[#ffd60a] mx-auto mb-8"></div>
                        <p className="max-w-2xl mx-auto text-xl text-white">
                            Discover our tech gatherings, workshops, and learning opportunities
                        </p>
                    </div>
                </div>
            </section>

            {/* Past Events Section */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                            <span className="text-[#ffd60a]">{"{ "}</span>
                            <span className="text-white">PAST EVENTS</span>
                            <span className="text-[#ffd60a]">{" }"}</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#ffd60a] mx-auto"></div>
                    </div>

                    <div className="space-y-8">
                        <ShowCECEvents year={year} />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
