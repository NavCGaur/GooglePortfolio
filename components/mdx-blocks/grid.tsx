import React from 'react'

interface GridProps {
    cols?: 1 | 2 | 3 | 4
    children: React.ReactNode
}

const gridVariants = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

export function Grid({ cols = 2, children }: GridProps) {
    return (
        <div className={`grid gap-8 ${gridVariants[cols]}`}>
            {children}
        </div>
    )
}
