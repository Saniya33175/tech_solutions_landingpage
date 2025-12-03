"use client"

import type React from "react"

import { useState } from "react"
import { Mail, User, Phone, Building2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const requiredFields = ["fullName", "phone", "email", "company", "message"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, boolean> = {}
    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]?.trim()) {
        newErrors[field] = true
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ fullName: "", phone: "", email: "", company: "", message: "" })
    setErrors({})

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">GET IN TOUCH</h2>
          <p className="text-lg text-muted-foreground">Let's build something amazing together.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-100 rounded-lg p-8 sm:p-10 shadow-lg">
          {submitted && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg">
              <p className="text-accent font-semibold">✓ Thank you! We'll be in touch soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full pl-10 pr-4 py-3 bg-white border-2 rounded-lg font-sans focus:outline-none focus:border-accent transition-colors ${
                      errors.fullName ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-sm mt-1">Full name is required</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full pl-10 pr-4 py-3 bg-white border-2 rounded-lg font-sans focus:outline-none focus:border-accent transition-colors ${
                      errors.phone ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number is required</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full pl-10 pr-4 py-3 bg-white border-2 rounded-lg font-sans focus:outline-none focus:border-accent transition-colors ${
                      errors.email ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className={`w-full pl-10 pr-4 py-3 bg-white border-2 rounded-lg font-sans focus:outline-none focus:border-accent transition-colors ${
                      errors.company ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                </div>
                {errors.company && <p className="text-red-500 text-sm mt-1">Company name is required</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project and requirements..."
                rows={5}
                className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-sans focus:outline-none focus:border-accent transition-colors resize-none ${
                  errors.message ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
