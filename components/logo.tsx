import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="20" cy="20" r="20" fill="#0a1929" />
          <path
            d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30"
            stroke="#0062ff"
            strokeWidth="2"
            className="circuit-line"
          />
          <path
            d="M20 30C17.2386 30 15 27.7614 15 25C15 22.2386 17.2386 20 20 20"
            stroke="#00d2ff"
            strokeWidth="2"
            className="circuit-line"
          />
          <circle cx="20" cy="20" r="2" fill="white" />
          <circle cx="20" cy="30" r="2" fill="#00d2ff" />
          <circle cx="10" cy="20" r="2" fill="#0062ff" />
        </svg>
      </div>
      <span className="font-space font-bold text-xl tracking-tight">DACRONYX</span>
    </Link>
  )
}
