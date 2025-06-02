import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hestia - Automatiza tu hotel, mejora la experiencia de tus huéspedes",
  description:
    "Plataforma de automatización para hoteles que mejora la comunicación huésped-hotel usando inteligencia artificial.",
  keywords: "hotel chatbot, automatización para hoteles, asistente IA para huéspedes, comunicación hotelera",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
