import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
    children: React.ReactNode
    className?: string
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn("p-6 rounded-xl border bg-card text-card-foreground shadow-sm", className)}>
            {children}
        </div>
    )
}
