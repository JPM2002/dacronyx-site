"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Features() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw circuit board pattern
    function drawCircuitPattern() {
      ctx.strokeStyle = "rgba(0, 98, 255, 0.2)"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let y = 20; y < canvas.height; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 20; x < canvas.width; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw nodes
      for (let x = 20; x < canvas.width; x += 40) {
        for (let y = 20; y < canvas.height; y += 40) {
          if (Math.random() > 0.7) {
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fillStyle = "rgba(0, 210, 255, 0.5)"
            ctx.fill()
          }
        }
      }
    }

    drawCircuitPattern()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawCircuitPattern()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-6">
              Transforming Industries with <span className="gradient-text">Intelligent Technology</span>
            </h2>
            <p className="text-dacronyx-light/70 mb-6">
              Our cutting-edge AI solutions are designed to solve complex real-world problems across various industries.
              By bridging the gap between high-level machine learning and low-level systems execution, we deliver
              tangible results that drive innovation and efficiency.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Predictive analytics for business intelligence",
                "Real-time decision making systems",
                "Computer vision for quality control",
                "Natural language processing for customer insights",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-dacronyx-accent/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-dacronyx-accent2"></div>
                  </div>
                  <span className="text-dacronyx-light">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/technology">
              <Button className="bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity">
                Discover Our Technology <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-dacronyx-darker rounded-lg p-6 border border-dacronyx-accent/20 shadow-lg shadow-dacronyx-accent/5">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-dacronyx-accent animate-circuit-pulse"></div>
              <div
                className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-dacronyx-accent2 animate-circuit-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="h-full w-full rounded bg-dacronyx-dark/50 flex items-center justify-center p-4">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Brain circuit visualization */}
                  <circle cx="100" cy="100" r="80" stroke="#0062ff" strokeWidth="2" strokeDasharray="5 5" />
                  <circle cx="100" cy="100" r="60" stroke="#00d2ff" strokeWidth="1.5" />

                  {/* Neural network nodes */}
                  <circle cx="100" cy="50" r="8" fill="#0062ff" />
                  <circle cx="60" cy="80" r="8" fill="#0062ff" />
                  <circle cx="140" cy="80" r="8" fill="#0062ff" />
                  <circle cx="80" cy="120" r="8" fill="#00d2ff" />
                  <circle cx="120" cy="120" r="8" fill="#00d2ff" />
                  <circle cx="100" cy="150" r="8" fill="white" />

                  {/* Connections */}
                  <line x1="100" y1="58" x2="60" y2="72" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="100" y1="58" x2="140" y2="72" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="60" y1="88" x2="80" y2="112" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="140" y1="88" x2="120" y2="112" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="80" y1="128" x2="100" y2="142" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="120" y1="128" x2="100" y2="142" stroke="white" strokeWidth="1" strokeOpacity="0.5" />

                  {/* Pulses */}
                  <circle cx="80" cy="100" r="3" fill="white" className="animate-circuit-pulse" />
                  <circle
                    cx="120"
                    cy="100"
                    r="3"
                    fill="white"
                    className="animate-circuit-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="3"
                    fill="white"
                    className="animate-circuit-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
