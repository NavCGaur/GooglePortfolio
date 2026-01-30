import React from 'react'
import { MDXImage } from '@/components/mdx-image'
import { cn } from '@/lib/utils'

interface ProfileHeroProps {
    title: string
    subtitle: string
    image: string
}

export function ProfileHero({ title, subtitle, image }: ProfileHeroProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
                <div className="prose prose-neutral dark:prose-invert">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <MDXImage
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}
