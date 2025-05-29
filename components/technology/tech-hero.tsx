"use client"

import { useEffect, useRef } from "react"

export function TechHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Create a neural network visualization
    const nodes = [
      { x: 100, y: 100, layer: 0 },
      { x: 100, y: 200, layer: 0 },
      { x: 100, y: 300, layer: 0 },
      { x: 300, y: 150, layer: 1 },
      { x: 300, y: 250, layer: 1 },
      { x: 500, y: 200, layer: 2 },
    ]

    function drawNetwork() {
      // Draw connections
      ctx.strokeStyle = "rgba(0, 210, 255, 0.3)"
      ctx.lineWidth = 1

      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j && Math.abs(node.layer - otherNode.layer) === 1) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      nodes.forEach((node, i) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2)
        ctx.fillStyle = i === nodes.length - 1 ? "#ffffff" : "#0062ff"
        ctx.fill()
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawNetwork()
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
            Cutting-Edge <span className="gradient-text">Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-dacronyx-light/80 mb-8 animate-fade-up">
            Powered by the latest advances in artificial intelligence, machine learning, and systems engineering.
          </p>
        </div>
      </div>
    </div>
  )
}
