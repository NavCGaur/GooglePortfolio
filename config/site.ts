export const siteConfig = {
    name: "Naveen Gaur",
    title: "Full-stack developer",
    description: "Helping you build, fix, and scale web products without the technical headaches.",
    avatar: "/images/profile.jpg",
    availability: {
        status: true,
        message: "Available for Work"
    },
    stats: [
        "5+ years experience",
        "40+ projects delivered",
        "100% client satisfaction"
    ],
    cta: {
        primary: "Book Free Consultation",
        primaryHref: "/contact"
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
    }
}

export const navigation = {
    main: [
        { name: "About", href: "/about" }
    ],
    projects: {
        featured: [
            {
                id: "real-estate-saas",
                name: "Real Estate SAAS",
                tech: "NEXT.JS",
                slug: "/projects/real-estate-saas"
            },
            {
                id: "political-blog",
                name: "Political Blog",
                tech: "Ghost CMS",
                slug: "/projects/political-blog"
            },
            {
                id: "aesthetic-site",
                name: "Aesthetic Site",
                tech: "Wordpress",
                slug: "/projects/aesthetic-site"
            },
            {
                id: "accountancy-app",
                name: "Accountancy App",
                tech: "React",
                slug: "/projects/accountancy-app"
            }
        ],
        viewAllText: "View All Projects",
        viewAllHref: "/projects"
    }
}