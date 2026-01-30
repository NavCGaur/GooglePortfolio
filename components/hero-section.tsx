import { siteConfig } from "@/config/site"
import { AnimatedButton } from "@/components/ui/animated-button"
import { FeaturedProjects } from "@/components/featured-projects"
import { AnimatedStats } from "@/components/animated-stats"

export function HeroSection() {
    return (
        <section className="w-full py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Two Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16">
                    {/* Left Column - Main Content */}
                    <div className="space-y-8">
                        {/* Hero Title */}
                        <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-none">
                            {siteConfig.name}
                        </h1>

                        {/* Subtitle/Description 
                        
                        <p className="text-lg md:text-xl text-[#4c4c4c] max-w-2xl leading-relaxed">
                            {siteConfig.title} {siteConfig.description.toLowerCase()}
                        </p>
                        */}


                        {/* Animated Stats */}
                        <AnimatedStats stats={siteConfig.stats} />

                        {/* CTA Button */}
                        <div>
                            <AnimatedButton
                                href={siteConfig.cta.primaryHref}
                                variant="primary"
                                className="text-base px-8 py-4"
                            >
                                {siteConfig.cta.primary}
                            </AnimatedButton>
                        </div>
                    </div>

                    {/* Right Column - Featured Projects */}
                    <div className="lg:pt-8">
                        <FeaturedProjects />
                    </div>
                </div>
            </div>
        </section>
    )
}
