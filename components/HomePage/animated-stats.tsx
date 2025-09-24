"use client"

import { useSelectYear } from "@/providers/SelectYearProvider"
import { useEffect, useState } from "react"

interface StatItem {
    value: number
    label: string
    suffix: string
}

const stats2025: StatItem[] = [
    { value: 50, label: "MEMBERS", suffix: "+" },
    { value: 20, label: "PROJECTS", suffix: "+" },
    { value: 15, label: "EVENTS", suffix: "+" },
]

const stats2026: StatItem[] = [
    { value: 13, label: "MEMBERS", suffix: "+" },
    { value: 0, label: "PROJECTS", suffix: "+" },
    { value: 0, label: "EVENTS", suffix: "+" },
]

export function AnimatedStats() {

    const {year} = useSelectYear();
    
    const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0])
    const [isVisible, setIsVisible] = useState(false);

    const [stats, setStats] = useState([] as StatItem[])
    

    useEffect(() => {
        if(year === 2025) {
            setStats(stats2025)
        }else {
            setStats(stats2026)
        }
    }, [year])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (!isVisible) return

        const animateCounters = () => {
            const duration = 2000 // 2 seconds
            const steps = 60
            const stepDuration = duration / steps
            
            stats.forEach((stat, index) => {
                let currentStep = 0
                const increment = stat.value / steps

                const timer = setInterval(() => {
                    currentStep++
                    const currentValue = Math.min(increment * currentStep, stat.value)

                    setAnimatedValues((prev) => {
                        const newValues = [...prev]
                        newValues[index] = Math.floor(currentValue)
                        return newValues
                    })

                    if (currentStep >= steps) {
                        clearInterval(timer)
                    }
                }, stepDuration)
            })
        }

        animateCounters()
    }, [isVisible,stats])

    return (
        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-3 md:gap-12">
            {stats.map((stat, index) => (
                <div
                    key={stat.label}
                    className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                >
                    <div className="relative">

                        {/* Counter */}
                        <div className="relative z-10 py-8">
                            <div className="mb-2 text-4xl font-bold text-white md:text-6xl">
                                {animatedValues[index]}
                                {stat.suffix}
                            </div>
                            <div className="text-sm font-semibold tracking-wider text-gray-300 md:text-base">{stat.label}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
