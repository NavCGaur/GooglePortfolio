import Image from "next/image"
import { siteConfig } from "@/config/site"

export function TrustSection() {
    return (
        <div className="w-full  px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <p className="text-sm text-[#d4d4d4] font-bold mb-6">Trusted By</p>

                <div className="flex items-center justify-evenly flex-wrap gap-8">
                    {siteConfig.trustedBy.map((company) => (
                        <div
                            key={company.name}
                            className="relative h-16 w-40 transition-transform duration-300 hover:scale-110"
                        >
                            <Image
                                src={company.logo}
                                alt={company.name}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
