"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { NavbarNew } from "@/components/navbar-new"
import { HeroSection } from "@/components/hero-section"
import { HeroSectionNew } from "@/components/hero-section-new"
import { ServicesSection } from "@/components/services-section"
import { TrustSection } from "@/components/trust-section"
import { ProjectsGallery } from "@/components/projects-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { ProjectModal } from "@/components/project-modal"
import { ProjectModalProvider, useProjectModal, Project } from "@/hooks/use-project-modal"
import { projects, testimonials } from "@/.velite"

function HomeContent() {
  const { isOpen, selectedProject, openModal, closeModal } = useProjectModal()

  // Handle deep linking on page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const projectSlug = params.get('project')

    if (projectSlug) {
      // Find project by slug
      const project = projects.find(p => p.slug.includes(projectSlug))
      if (project) {
        openModal(project as unknown as Project)
      }
    }
  }, [openModal])

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <NavbarNew />
      {/* <HeroSection /> */}
      <HeroSectionNew />
      <ServicesSection />
      <TrustSection />
      <ProjectsGallery />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  )
}

export default function Home() {
  return (
    <ProjectModalProvider>
      <HomeContent />
    </ProjectModalProvider>
  )
}