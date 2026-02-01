"use client"

import { useState } from "react"
import { siteConfig } from "@/config/site"

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: "" })

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "9ec3c395-36b1-447f-aa9a-f6e7fe3cc591",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    from_name: formData.name,
                    to_email: "naveencg070@gmail.com"
                }),
            })

            const result = await response.json()

            if (result.success) {
                setSubmitStatus({
                    type: "success",
                    message: "Thank you! Your message has been sent successfully. I'll get back to you soon."
                })
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                })
            } else {
                setSubmitStatus({
                    type: "error",
                    message: "Oops! Something went wrong. Please try again or email me directly."
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please check your connection and try again."
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="w-full px-4 py-12 md:py-16 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Section - Contact Form */}
                    <div className="w-full">
                        {/* Section Title */}
                        <div className="mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold mb-3">CONTACT</h2>
                            <p className="text-muted-foreground max-w-xl">
                                Have a project in mind? Let's discuss how we can work together to bring your vision to life.
                            </p>
                        </div>

                        {/* Status Messages */}
                        {submitStatus.type && (
                            <div
                                className={`mb-4 p-3 rounded-md ${submitStatus.type === "success"
                                    ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800"
                                    : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
                                    }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-transparent border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder=""
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-transparent border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder=""
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-transparent border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder=""
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 bg-[#4d9c0f] text-white font-medium rounded-md hover:bg-[#3d7c0a] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right Section - What to Expect & Get in Touch */}
                    <div className="w-full flex flex-col gap-4 h-full">
                        {/* What to Expect */}
                        <div className="bg-muted/30 rounded-none p-5 lg:p-8 flex-1 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-4">WHAT TO EXPECT</h3>
                            <ul className="space-y-3 text-muted-foreground text-lg font-medium">
                                {siteConfig.contact.whatToExpect.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-3">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Get in Touch */}
                        <div className="bg-muted/30 rounded-none p-5 lg:p-8 flex-1 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-4">GET IN TOUCH</h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1 tracking-wide">EMAIL</p>
                                    <p className="text-foreground text-xl font-medium">{siteConfig.contact.email}</p>
                                </div>

                                {/* Availability */}
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1 tracking-wide">AVAILABILITY</p>
                                    <p className="text-foreground text-lg font-medium">{siteConfig.contact.availability}</p>
                                </div>

                                {/* Response Time */}
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1 tracking-wide">RESPONSE TIME</p>
                                    <p className="text-foreground text-lg font-medium">{siteConfig.contact.responseTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
