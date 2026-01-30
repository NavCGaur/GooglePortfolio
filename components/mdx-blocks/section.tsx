import React from 'react'

interface SectionProps {
    title?: string
    children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
    return (
        <section className="py-16">
            {title && (
                <h2 className="text-3xl font-bold mb-8 tracking-tight">{title}</h2>
            )}
            {children}
        </section>
    )
}
