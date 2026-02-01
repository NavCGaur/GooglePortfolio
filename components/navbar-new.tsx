"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig, navigation } from "@/config/site"

export function NavbarNew() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/'
        }
        return pathname?.startsWith(path)
    }

    return (
        <header className="w-full bg-background border-b border-muted-grey">
            <div className="max-w-[100rem] mx-auto px-8 py-2">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="font-heading text-2xl text-foreground font-bold uppercase">
                        {siteConfig.name}
                    </Link>
                    <div className="flex items-center gap-8">
                        <ul className="flex gap-8 items-center hidden md:flex">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`font-paragraph text-base transition-colors ${isActive(item.href) ? 'text-foreground font-medium' : 'text-secondary hover:text-foreground'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden md:block">
                            <Link href="/#contact">
                                <button className="bg-primary text-white font-heading font-medium px-8 py-3 rounded-none hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 group cursor-pointer">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
