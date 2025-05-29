"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw animated circuit lines
    function drawCircuitLines() {
      ctx.strokeStyle = "rgba(0, 98, 255, 0.3)"
      ctx.lineWidth = 2

      const time = Date.now() * 0.001

      // Animated horizontal lines
      for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 6) * (i + 1)
        const offset = Math.sin(time + i) * 20

        ctx.beginPath()
        ctx.moveTo(0, y + offset)
        ctx.lineTo(canvas.width, y + offset)
        ctx.stroke()
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawCircuitLines()
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative min-h-[70vh] flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-space text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-dacronyx-light/80 mb-8 animate-fade-up">
            Comprehensive AI solutions designed to transform your business operations and drive innovation across all
            sectors.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
