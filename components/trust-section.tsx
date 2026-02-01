import Image from "next/image"
import { siteConfig } from "@/config/site"

export function TrustSection() {
    return (
        <div className="w-full px-6 md:px-12">
            <div className="max-w-7xl mx-auto border-y border-black/10 py-10">
                <p className="text-2xl text-secondary font-bold mb-6">Trusted By</p>

                <div className="flex items-center justify-evenly flex-wrap gap-8">
                    {siteConfig.trustedBy.map((company) => (
                        <div
                            key={company.name}
                            className="relative h-20 w-48 transition-transform duration-300 hover:scale-110 cursor-pointer"
                        >
                            <Image
                                src={company.logo}
                                alt={company.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100px, 160px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
