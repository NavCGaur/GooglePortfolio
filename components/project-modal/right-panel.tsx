"use client"

import Image from "next/image"
import { Project } from "@/hooks/use-project-modal"

interface RightPanelProps {
    project: Project
}

export function ProjectModalRightPanel({ project }: RightPanelProps) {
    return (
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
            {/* Image Gallery */}
            {project.images.length > 0 && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Project Gallery</h2>

                    <div className="grid grid-cols-1 gap-6">
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-muted"
                            >
                                <Image
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Additional Content Section */}
            {project.images.length === 0 && (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                    <p>No images available for this project.</p>
                </div>
            )}
        </div>
    )
}
