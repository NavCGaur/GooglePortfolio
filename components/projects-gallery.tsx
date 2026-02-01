"use client"

import { useRef } from "react"
import { ProjectCard } from "./project-card"
import { projects } from "@/.velite"
import { useProjectModal, Project } from "@/hooks/use-project-modal"

interface ProjectsGalleryProps {
    onProjectClick?: (slug: string) => void
}

export function ProjectsGallery({ onProjectClick }: ProjectsGalleryProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const { openModal } = useProjectModal()

    const handleProjectClick = (slug: string) => {
        // Find the project by slug
        const project = projects.find(p => p.slug === slug)

        if (project) {
            // Cast to Project type and open modal
            openModal(project as unknown as Project)
        }

        // Call custom handler if provided
        if (onProjectClick) {
            onProjectClick(slug)
        }
    }

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            // Get the first card element to calculate its width
            const firstCard = scrollContainerRef.current.querySelector('div[class*="flex-shrink-0"]') as HTMLElement

            if (firstCard) {
                // Calculate card width including gap (24px = gap-6)
                const cardWidth = firstCard.offsetWidth + 24

                // Scroll exactly one card width
                const scrollAmount = cardWidth
                const currentScroll = scrollContainerRef.current.scrollLeft
                const newScrollLeft = direction === "left"
                    ? currentScroll - scrollAmount
                    : currentScroll + scrollAmount

                scrollContainerRef.current.scrollTo({
                    left: newScrollLeft,
                    behavior: "smooth"
                })
            }
        }
    }

    return (
        <section id="projects" className="w-full py-24 px-6 md:px-12 bg-[#FBFBF9]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-20">
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl ">
                            Featured Work
                        </h2>

                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-border bg-card hover:bg-accent hover:border-foreground/20 transition-all duration-200 flex items-center justify-center group cursor-pointer"
                            aria-label="Scroll left"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="text-muted-foreground group-hover:text-foreground transition-colors"
                            >
                                <path
                                    d="M12 4L6 10L12 16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-border bg-card hover:bg-accent hover:border-foreground/20 transition-all duration-200 flex items-center justify-center group cursor-pointer"
                            aria-label="Scroll right"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="text-muted-foreground group-hover:text-foreground transition-colors"
                            >
                                <path
                                    d="M8 4L14 10L8 16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        }}
                    >
                        {[...projects]
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((project) => (
                                <div
                                    key={project.slug}
                                    className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px]"
                                >
                                    <ProjectCard
                                        title={project.title}
                                        cover={project.cover}
                                        slug={project.slug}
                                        description={project.description}
                                        techStack={project.techStack}
                                        onClick={handleProjectClick}
                                    />
                                </div>
                            ))}
                    </div>
                </div>

                <div className="w-full h-px bg-black/10 mt-20" />
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}
