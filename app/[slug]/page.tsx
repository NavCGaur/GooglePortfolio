import { notFound } from 'next/navigation'
import { pages } from '@/.velite'
import { MDXContent } from '@/components/mdx-content'
import { Navbar } from '@/components/navbar'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return pages.map((page) => ({
        slug: page.slug,
    }))
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params
    const page = pages.find((p) => p.slug === slug)

    if (!page) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 pt-24 pb-16">
                <MDXContent code={page.content} />
            </main>
        </div>
    )
}
