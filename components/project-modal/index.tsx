"use client"

import { useEffect } from "react"
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

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const handleCopyLink = () => {
        const url = window.location.href
        navigator.clipboard.writeText(url)
        // You could add a toast notification here
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={handleBackdropClick}
        >
            {/* Modal Container */}
            <div className="relative w-full h-full max-w-[1400px] max-h-[90vh] m-4 bg-background rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300">
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur-sm border-b border-border">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onClose}
                            className="p-2 rounded-md hover:bg-accent transition-colors"
                            aria-label="Close modal"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <button
                        onClick={handleCopyLink}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            />
                        </svg>
                        Copy Link
                    </button>
                </div>

                {/* Split View Content */}
                <div className="flex flex-col lg:flex-row h-full pt-16">
                    {/* Left Panel - Sticky */}
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
