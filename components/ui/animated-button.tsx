import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface AnimatedButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    variant?: "primary" | "secondary"
}

const AnimatedButton = React.forwardRef<HTMLAnchorElement, AnimatedButtonProps>(
    ({ className, href, variant = "primary", children, ...props }, ref) => {
        return (
            <Link
                ref={ref}
                href={href}
                className={cn(
                    "relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold overflow-hidden",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    variant === "primary" && [
                        "bg-[#4d9c0f] text-white",
                        "after:absolute after:inset-0 after:bg-[#3d7c0a] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out",
                        "hover:after:scale-x-100"
                    ],
                    variant === "secondary" && [
                        "bg-transparent border border-foreground text-foreground",
                        "after:absolute after:inset-0 after:bg-foreground after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out",
                        "hover:after:scale-x-100 hover:text-background"
                    ],
                    className
                )}
                {...props}
            >
                <span className="relative z-10">{children}</span>
            </Link>
        )
    }
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
