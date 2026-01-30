import React from 'react'

interface PhilosophyItemProps {
    title: string
    children: React.ReactNode
}

export function PhilosophyItem({ title, children }: PhilosophyItemProps) {
    return (
        <div className="border-l-4 border-primary pl-6 py-2 mb-8">
            <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
            <div className="text-muted-foreground leading-relaxed">
                {children}
            </div>
        </div>
    )
}
