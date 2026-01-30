"use client"

import { useState, useEffect } from "react"

interface AnimatedStatsProps {
    stats: string[]
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out
            setIsVisible(false)

            // Wait for fade out, then change text and fade in
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % stats.length)
                setIsVisible(true)
            }, 300) // Half of the transition duration
        }, 5000) // Show each stat for 3 seconds

        return () => clearInterval(interval)
    }, [stats.length])

    return (
        <p
            className={`text-base md:text-2xl text-[#4f4f4f] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {stats[currentIndex]}
        </p>
    )
}
