"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    industry: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Consultation request:", formData)
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
            <CardTitle className="font-space text-2xl text-white flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-dacronyx-accent2" />
              Book Your Consultation
            </CardTitle>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white placeholder-dacronyx-light/50 focus:border-dacronyx-accent focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white placeholder-dacronyx-light/50 focus:border-dacronyx-accent focus:outline-none"
                    placeholder="e.g., CTO, VP Engineering"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white focus:border-dacronyx-accent focus:outline-none"
                  >
                    <option value="">Select industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Financial Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="automotive">Automotive</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white focus:border-dacronyx-accent focus:outline-none"
                  >
                    <option value="">Select project type</option>
                    <option value="advanced-algorithms">Advanced Algorithms</option>
                    <option value="embedded-systems">Embedded Systems</option>
                    <option value="digital-infrastructure">Digital Infrastructure</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white focus:border-dacronyx-accent focus:outline-none"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-3 months)</option>
                    <option value="short-term">Short-term (3-6 months)</option>
                    <option value="medium-term">Medium-term (6-12 months)</option>
                    <option value="long-term">Long-term (12+ months)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white focus:border-dacronyx-accent focus:outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="over-1m">Over $1M</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-dacronyx-light mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white placeholder-dacronyx-light/50 focus:border-dacronyx-accent focus:outline-none resize-none"
                  placeholder="Tell us about your project, challenges, and goals..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white focus:border-dacronyx-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-dacronyx-light mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white focus:border-dacronyx-accent focus:outline-none"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity"
              >
                Schedule Consultation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
