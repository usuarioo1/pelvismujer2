"use client"

import { useEffect, useRef } from "react"

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div", variant }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") return

    document.documentElement.classList.add("js-reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const variantClass = variant ? ` reveal--${variant}` : ""

  return (
    <Tag ref={ref} className={`reveal${variantClass} ${className}`} style={{ "--reveal-delay": `${delay}ms` }}>
      {children}
    </Tag>
  )
}
