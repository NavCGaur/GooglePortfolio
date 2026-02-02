export const siteConfig = {
    name: "Naveen Gaur",
    title: "Full-stack developer",
    description: "Helping you build, fix, and scale web products without the technical headaches.",
    avatar: "/images/profile.jpg",
    availability: {
        status: true,
        message: "Available for Work"
    },
    hero: {
        headline: {
            prefix: "Web",
            highlight1: "Solutions",
            middle: "That Actually",
            highlight2: "Grow",
            suffix: "Your Business"
        },
        description: "Full-Stack Developer helping founders and small businesses build, fix and grow their websites."
    },
    stats: [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Projects Shipped" },
        { value: "30+", label: "Clients Served" }
    ],
    cta: {
        primary: "Book Free Consultation",
        primaryHref: "/#contact",
        secondary: "See Our Work",
        secondaryHref: "/#projects",
        tertiary: "Let's Talk",
        tertiaryHref: "/#contact"
    },
    socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:hello@example.com"
    },
    trustedBy: [
        { name: "theSinic", logo: "/images/logos/thesinic.png" },
        { name: "B.Coyle", logo: "/images/logos/bcoyle.png" },
        { name: "Moda Wellness", logo: "/images/logos/moda.png" },
        { name: "MDAssociates", logo: "/images/logos/mdassociates.png" }
    ],
    contact: {
        email: "naveencg070@gmail.com",
        availability: "Currently accepting new projects for Q2 2026",
        responseTime: "Typically within 24-48 hours",
        whatToExpect: [
            "Initial consultation to discuss your project",
            "Detailed proposal with timeline and pricing",
            "Collaborative design and development process",
            "Ongoing support and maintenance options"
        ]
    },
    services: [
        {
            id: 's1',
            number: '01',
            title: 'WEB DESIGN',
            description: 'Creating intuitive and aesthetically refined interfaces that prioritize user experience and brand identity. I focus on clean lines, clear hierarchy, and purposeful interaction.',
        },
        {
            id: 's2',
            number: '02',
            title: 'DEVELOPMENT',
            description: 'Building responsive, performant websites using modern technologies and best practices. From React to Tailwind, the code is as clean as the design.',
        },
        {
            id: 's3',
            number: '03',
            title: 'CONSULTING',
            description: 'Providing strategic guidance on digital products, user experience, and technical architecture. Helping brands navigate the digital landscape with clarity.',
        }
    ]
}

export const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/#projects" },
        { name: "Testimonials", href: "/#testimonials" }
    ],
    projects: {
        featured: [
            {
                id: "ghost-cms-management",
                name: "Ghost CMS Management",
                tech: "Ghost CMS",
                slug: "/projects/ghost-cms-management"
            },
            {
                id: "real-estate-crm",
                name: "Real Estate CRM SaaS",
                tech: "Next.js & Supabase",
                slug: "/projects/real-estate-crm"
            },
            {
                id: "moda-wellness",
                name: "Moda Wellness",
                tech: "Wordpress & SEO",
                slug: "/projects/moda-wellness"
            },
            {
                id: "neurolingva",
                name: "Neurolingva",
                tech: "AI & Next.js",
                slug: "/projects/neurolingva"
            }
        ],
        viewAllText: "View All Projects",
        viewAllHref: "/projects"
    }
}