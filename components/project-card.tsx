"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    title: string
    cover: string
    slug: string
    description: string
    techStack?: string[]
    onClick: (slug: string) => void
}

export function ProjectCard({
    title,
    cover,
    slug,
    description,
    techStack = [],
    onClick
}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            onClick={() => onClick(slug)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        >
            {/* Card Container */}
            <div className="relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 ease-out group-hover:border-foreground/20 group-hover:shadow-xl">
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                        src={cover}
                        alt={title}
                        fill
                        className={cn(
                            "object-cover transition-all duration-500 ease-out",
                            isHovered && "scale-105 brightness-90"
                        )}
                    />

                    {/* Overlay on Hover */}
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300",
                        isHovered && "opacity-100"
                    )}>
                        {/* Tech Stack Pills */}
                        {techStack.length > 0 && (
                            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                                {techStack.slice(0, 4).map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {techStack.length > 4 && (
                                    <span className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20">
                                        +{techStack.length - 4}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Hover Indicator */}
                    <div className={cn(
                        "absolute top-4 right-4 w-10 h-10 rounded-full bg-[#c2f04c] flex items-center justify-center opacity-0 scale-75 transition-all duration-300",
                        isHovered && "opacity-100 scale-100"
                    )}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="text-black"
                        >
                            <path
                                d="M6 3L11 8L6 13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-2">
                    <h3 className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-[#c2f04c]">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c2f04c] to-transparent scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </button>
    )
}
