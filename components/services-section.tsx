"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site"
import { format } from "path"

function StickySectionHeader({ number, title }: { number: string; title: string }) {
    return (
        <div className="flex items-start gap-4">
            <span className="font-heading text-lg text-primary font-bold">{number}</span>
            <h2 className="font-heading text-xl font-bold text-foreground uppercase tracking-widest">{title}</h2>
        </div>
    )
}

function ServiceRow({ item, index }: { item: typeof siteConfig.services[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group relative border-t border-black/10 py-12 transition-colors duration-500 hover:bg-black/[0.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <div className="flex items-center gap-4 overflow-hidden">
                        <span className="font-heading text-xs text-neutral-400 group-hover:text-primary transition-colors duration-300">
                            {item.number}
                        </span>
                        <div
                            className={`transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'translate-x-2' : 'translate-x-0'
                                }`}
                        >
                            <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6 lg:col-start-5">
                    <p className="font-paragraph text-lg text-secondary leading-relaxed max-w-2xl">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export function ServicesSection() {
    return (
        <section className="w-full py-32 lg:py-30 px-6 md:px-12 lg:px-20 max-w-[120rem] mx-auto">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-3 relative">
                    <div className="sticky top-32">
                        <StickySectionHeader number="(01)" title="What I Do" />
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-9">
                    <div className="flex flex-col">
                        {siteConfig.services.map((service, index) => (
                            <ServiceRow key={service.id} item={service} index={index} />
                        ))}
                        <div className="w-full h-px bg-black/10" />
                    </div>
                </div>
            </div>
        </section>
    )
}
