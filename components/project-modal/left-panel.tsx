"use client"

import { Project } from "@/hooks/use-project-modal"

interface LeftPanelProps {
    project: Project
    onClose: () => void
}

export function ProjectModalLeftPanel({ project, onClose }: LeftPanelProps) {
    return (
        <div className="w-full lg:w-[400px] lg:sticky lg:top-0 lg:h-screen overflow-y-auto p-8 lg:p-12 space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                    {project.title}
                </h1>

                {project.client && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">Client:</span>
                        <span>{project.client}</span>
                    </div>
                )}

                {project.industry && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">Industry:</span>
                        <span>{project.industry}</span>
                    </div>
                )}
            </div>

            {/* Overview */}
            {project.overview && (
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {project.overview}
                    </p>
                </div>
            )}

            {/* Challenge */}
            {project.challenge && (
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold">Challenge</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                    </p>
                </div>
            )}

            {/* Solution */}
            {project.solution && (
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold">Solution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                    </p>
                </div>
            )}

            {/* Results */}
            {project.results && (
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold">Results</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {project.results}
                    </p>
                </div>
            )}

            {/* Tech Stack */}
            {project.techStack.length > 0 && (
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 text-sm font-medium bg-accent text-accent-foreground rounded-md border border-border"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-[#c2f04c] text-black rounded-md hover:bg-[#a8d63f] transition-colors"
                    >
                        View Live Site
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                )}

                {project.repoUrl && (
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-border bg-card text-foreground rounded-md hover:bg-accent transition-colors"
                    >
                        View Code
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    )
}
