"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
    name: string
    role: string
    quote: string
    company?: string
    location?: string
    date?: string
    featured: boolean
    rating: number
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Show 2 testimonials at a time on desktop, 1 on mobile
    const itemsPerPage = 2
    const maxIndex = Math.max(0, testimonials.length - itemsPerPage)

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    }

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

    return (
        <section id="testimonials" className="w-full px-4 py-5 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                {/* Section Title */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase">
                        PERSPECTIVES
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative px-12 md:px-16">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-foreground/[0.03] hover:bg-foreground/[0.08] border border-foreground/10 rounded-none transition-all disabled:opacity-0 disabled:pointer-events-none"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-6 h-6 text-foreground/60" />
                    </button>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                        {visibleTestimonials.map((testimonial, index) => (
                            <div
                                key={currentIndex + index}
                                className="flex flex-col relative"
                            >
                                {/* Quote Icon */}
                                <div className="text-[#4d9c0f] mb-6">
                                    <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                                        <path d="M9.14286 0L13.7143 4.57143V13.7143H0V4.57143L4.57143 0H9.14286ZM27.4286 0L32 4.57143V13.7143H18.2857V4.57143L22.8571 0H27.4286Z" />
                                    </svg>
                                </div>

                                {/* Quote Text */}
                                <p className="text-xl md:text-2xl font-medium mb-8 leading-tight text-foreground/90">
                                    {testimonial.quote}
                                </p>

                                {/* Author Info */}
                                <div className="mt-auto">
                                    <p className="font-bold text-foreground">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1">
                                        {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-foreground/[0.03] hover:bg-foreground/[0.08] border border-foreground/10 rounded-none transition-all disabled:opacity-0 disabled:pointer-events-none"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-6 h-6 text-foreground/60" />
                    </button>
                </div>

                <div className="w-full h-px bg-black/10 mt-20" />
            </div>
        </section>
    )
}
