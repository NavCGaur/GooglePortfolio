"use client"

import { navigation } from "@/config/site"

export function FeaturedProjects() {
    const handleProjectClick = (slug: string) => {
        // Placeholder for modal functionality - to be implemented later
        console.log("Opening project:", slug)
    }

    return (
        <div className="space-y-6">
            <h2 className="text-xs text-muted-foreground">Featured Projects</h2>

            <div className="space-y-4">
                {navigation.projects.featured.map((project) => (
                    <button
                        key={project.id}
                        onClick={() => handleProjectClick(project.slug)}
                        className="block w-full text-left group"
                    >
                        <span className="relative inline-block py-1 text-sm text-[#4c4c4c] transition-colors duration-200 border-b border-gray-300 after:absolute after:bottom-[-1px] after:left-0 after:h-[3px] after:w-0 after:bg-gray-600 after:transition-all after:duration-300 after:ease-out group-hover:after:w-full">
                            {project.name} - {project.tech}
                        </span>
                    </button>
                ))}
            </div>

            <a
                href={navigation.projects.viewAllHref}
                className="inline-flex items-center gap-2 text-base text-foreground hover:text-foreground/80 transition-colors group"
            >
                <span>{navigation.projects.viewAllText}</span>
                <span className="inline-block transition-all duration-250 ease-out group-hover:translate-x-1.5 group-hover:scale-110">
                    →
                </span>
            </a>
        </div>
    )
}
