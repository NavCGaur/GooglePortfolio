import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import { siteConfig } from "@/config/site"

export function HeroSectionNew() {
    return (
        <section className="relative w-full flex flex-col justify-center pt-8 pb-10 px-6 md:px-12 lg:px-20 max-w-[120rem] mx-auto min-h-[calc(100vh-80px)]">
            <div className="flex flex-col justify-between w-full">
                <div className="grid grid-cols-12 gap-6 w-full mb-8 lg:mb-0">
                    <div className="col-span-12 lg:col-span-11">
                        <h1
                            className="font-heading text-[11vw] lg:text-[8rem] leading-[0.9] font-bold text-foreground"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            <span style={{ letterSpacing: '0.07em' }} className="inline-block">{siteConfig.hero.headline.prefix}</span> <span className="text-primary inline-block" style={{ letterSpacing: '0.08em' }}>{siteConfig.hero.headline.highlight1}</span><br />
                            <span style={{ letterSpacing: '0.05em' }} className="inline-block">{siteConfig.hero.headline.middle}</span><br />
                            <span className="text-primary inline-block" style={{ letterSpacing: '-0.04em' }}>{siteConfig.hero.headline.highlight2}</span> {siteConfig.hero.headline.suffix}
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6 w-full mt-8 lg:mt-16 items-end">
                    <div className="col-span-12 lg:col-span-5">
                        <p
                            className="font-paragraph text-lg md:text-xl text-secondary leading-relaxed mb-6 font-medium tracking-[0.03em] md:tracking-[0.04em]"
                        >
                            {siteConfig.hero.description}
                        </p>

                        <div
                            className="flex flex-wrap gap-4"
                        >
                            <Link href={siteConfig.cta.secondaryHref}>
                                <button className="bg-primary text-white font-heading font-medium px-8 py-4 rounded-none hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 group w-52 cursor-pointer">
                                    {siteConfig.cta.secondary}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href={siteConfig.cta.tertiaryHref}>
                                <button className="bg-transparent text-foreground font-heading font-medium px-8 py-4 rounded-none border border-black/10 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center w-52 cursor-pointer">
                                    {siteConfig.cta.tertiary}
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4 lg:col-start-8 flex flex-col gap-8">
                        <div
                            className="grid grid-cols-3 gap-4 md:gap-6"
                        >
                            {siteConfig.stats.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <span className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</span>
                                    <span className="font-heading text-xs md:text-sm font-medium text-foreground">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex flex-col gap-3"
                >
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center animate-bounce">
                        <ArrowDown className="w-5 h-5 text-primary" />
                    </div>

                </div>
            </div>
        </section>
    )
}
