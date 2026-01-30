import * as runtime from "react/jsx-runtime"
import { MDXImage } from "@/components/mdx-image"

import { Grid } from "@/components/mdx-blocks/grid"
import { ProfileHero } from "@/components/mdx-blocks/profile-hero"
import { PhilosophyItem } from "@/components/mdx-blocks/philosophy-item"
import { Section } from "@/components/mdx-blocks/section"
import { Card } from "@/components/mdx-blocks/card"

// Define the components we want to use in MDX
const sharedComponents = {
    img: MDXImage,
    Grid,
    ProfileHero,
    PhilosophyItem,
    Section,
    Card,
}

const useMDXComponent = (code: string) => {
    const fn = new Function(code)
    return fn({ ...runtime }).default
}

interface MDXContentProps {
    code: string
    components?: Record<string, React.ComponentType>
}

export function MDXContent({ code, components }: MDXContentProps) {
    const Component = useMDXComponent(code)
    return <Component components={{ ...sharedComponents, ...components }} />
}