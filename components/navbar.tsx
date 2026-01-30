import Link from "next/link"
import Image from "next/image"
import { siteConfig, navigation } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { AnimatedButton } from "@/components/ui/animated-button"

export function Navbar() {
    return (
        <nav className="w-full py-6 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left side - Avatar, Name, Badge */}
                <div className="flex items-center">
                    <div className="relative w-14 h-14 overflow-hidden transition-transform duration-200 hover:scale-120">
                        <Image
                            src={siteConfig.avatar}
                            alt={siteConfig.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {siteConfig.availability.status && (
                        <Badge variant="inline">
                            {siteConfig.availability.message}
                        </Badge>
                    )}
                </div>

                {/* Right side - Nav Links */}
                <div className="flex items-center gap-6">
                    {navigation.main.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm transition-colors ${item.name === 'About'
                                ? 'text-[#9a9a9a] hover:text-foreground/80'
                                : 'text-foreground hover:text-foreground/80'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <AnimatedButton href={siteConfig.cta.primaryHref} variant="primary">
                        Contact
                    </AnimatedButton>
                </div>
            </div>
        </nav>
    )
}
