import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface AnimatedLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
}

const AnimatedLink = React.forwardRef<HTMLAnchorElement, AnimatedLinkProps>(
    ({ className, href, children, ...props }, ref) => {
        return (
            <Link
                ref={ref}
                href={href}
                className={cn(
                    "relative inline-block py-1 text-foreground transition-colors duration-200",
                    "border-b border-gray-300",
                    "after:absolute after:bottom-[-1px] after:left-0 after:h-[3px] after:w-0 after:bg-gray-600",
                    "after:transition-all after:duration-300 after:ease-out",
                    "hover:after:w-full",
                    className
                )}
                {...props}
            >
                {children}
            </Link>
        )
    }
)
AnimatedLink.displayName = "AnimatedLink"

export { AnimatedLink }
