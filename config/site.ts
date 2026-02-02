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
            title: 'Full‑Stack Development',
            description: 'Building responsive, performant applications using modern technologies such as Next.js, React, Node.js, and MongoDB. I focus on clean architecture, modular code, and automated workflows (GitHub Actions, Docker, Cloud Run) so projects scale smoothly and stay maintainable.',
        },
        {
            id: 's2',
            number: '02',
            title: 'WordPress & CMS Solutions',
            description: 'Designing fast, SEO‑friendly, and secure WordPress sites with custom themes, plugins, and WooCommerce integrations. I specialize in performance optimization (Core Web Vitals, 90+ PageSpeed scores) and CMS setups that make content management effortless.',
        },
        {
            id: 's3',
            number: '03',
            title: 'Technical SEO & Performance Optimization',
            description: 'Combining deep SEO expertise with full‑stack development skills, I don’t just audit — I implement fixes myself. From Core Web Vitals optimization and schema markup to mobile‑first improvements and server tuning, I ensure sites rank higher and load faster.',
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