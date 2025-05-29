"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-dacronyx-darker">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-dacronyx-dark/50 backdrop-blur-sm border-dacronyx-accent/10">
          <CardHeader>
            <CardTitle className="font-space text-2xl text-white">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white placeholder-dacronyx-light/50 focus:border-dacronyx-accent focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white placeholder-dacronyx-light/50 focus:border-dacronyx-accent focus:outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-dacronyx-light mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white placeholder-dacronyx-light/50 focus:border-dacronyx-accent focus:outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-dacronyx-light mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white focus:border-dacronyx-accent focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="advanced-algorithms">Advanced Algorithms</option>
                  <option value="embedded-systems">Embedded Systems</option>
                  <option value="digital-infrastructure">Digital Infrastructure</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dacronyx-light mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white placeholder-dacronyx-light/50 focus:border-dacronyx-accent focus:outline-none resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
