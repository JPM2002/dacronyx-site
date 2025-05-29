"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of AI solutions does Dacronyx provide?",
    answer:
      "We specialize in advanced algorithms, embedded systems, digital infrastructure, and AI integration services. Our solutions span from machine learning models to edge computing implementations.",
  },
  {
    question: "How long does a typical AI implementation project take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple integrations may take 4-8 weeks, while comprehensive AI transformations can take 6-12 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you work with companies of all sizes?",
    answer:
      "Yes, we work with startups, mid-size companies, and Fortune 500 enterprises. Our solutions are scalable and can be tailored to meet the specific needs and budgets of organizations of any size.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including healthcare, finance, manufacturing, retail, automotive, and technology. Our AI solutions are adaptable to various sector-specific requirements.",
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer:
      "Absolutely. We offer comprehensive support packages including monitoring, maintenance, updates, and optimization services to ensure your AI solutions continue to perform at their best.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement enterprise-grade security measures including encryption, access controls, and compliance with regulations like GDPR and HIPAA. Data security is a top priority in all our solutions.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            Find answers to common questions about our AI solutions and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-dacronyx-dark/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-dacronyx-accent/5 transition-colors"
                >
                  <h3 className="font-space text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-dacronyx-accent2 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-dacronyx-accent2 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-dacronyx-light/70">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
