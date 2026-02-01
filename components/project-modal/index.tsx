"use client"

import { useEffect, useState } from "react"
import { Project } from "@/hooks/use-project-modal"
import { ProjectModalLeftPanel } from "./left-panel"
import { ProjectModalRightPanel } from "./right-panel"

interface ProjectModalProps {
    isOpen: boolean
    project: Project | null
    onClose: () => void
}

export function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
    if (!isOpen || !project) return null

    const [isCopied, setIsCopied] = useState(false)

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const handleCopyLink = () => {
        const url = window.location.href
        navigator.clipboard.writeText(url)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={handleBackdropClick}
        >
            {/* Modal Container */}
            <div className="relative w-full h-full max-w-[1400px] max-h-[90vh] m-4 bg-background rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300 flex flex-col">
                {/* Header */}
                <div className="flex-none flex items-center justify-between px-8 py-5 bg-background border-b border-border">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-2xl font-semibold text-foreground truncate">
                            {project.title}
                        </h2>
                    </div>

                    <div className="flex items-center gap-6 ml-4">
                        <button
                            onClick={handleCopyLink}
                            className="flex items-center gap-2 text-sm font-medium text-[#16a34a] hover:text-[#15803d] transition-colors whitespace-nowrap cursor-pointer"
                        >
                            {isCopied ? "Link copied!" : "Copy link"}
                            {isCopied ? (
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={onClose}
                            className="text-[#16a34a] hover:text-[#15803d] transition-colors cursor-pointer"
                            aria-label="Close modal"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Split View Content */}
                <div className="flex-1 flex flex-col lg:flex-row min-h-0">
                    {/* Left Panel - Scrollable */}
                    <ProjectModalLeftPanel project={project} onClose={onClose} />

                    {/* Divider */}
                    <div className="hidden lg:block w-px bg-border" />

                    {/* Right Panel - Scrollable */}
                    <ProjectModalRightPanel project={project} />
                </div>
            </div>
        </div>
    )
}
