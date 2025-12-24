"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            title: "Membresía",
            subtitle: "Planes",
            image: "/woman-practicing-yoga-outdoors-in-nature.jpg",
        },
        {
            title: "Planes de clases",
            subtitle: "Planes",
            image: "/pregnant-woman-meditating-peacefully.jpg",
        },
    ]

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/serene-woman-in-profile-with-flowing-hair-natural-.jpg"
                    alt="Mujer en conexión con su cuerpo"
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center px-4 py-12 sm:py-16 md:py-20 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                        {/* Left side - Text content */}
                        <div className="flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 max-w-xl">
                            <h1 className="text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-heading">
                                Bienvenida a<br />PelvisMujer
                            </h1>

                            <div className="space-y-3 text-white/90 sm:space-y-4 max-w-lg">
                                <p className="text-base leading-relaxed sm:text-lg md:text-xl font-light">
                                    Un espacio para volver a tu cuerpo, a tu centro y a tu poder.
                                </p>
                                <p className="text-sm leading-relaxed sm:text-base md:text-lg font-light">
                                    Acompañamos a mujeres en todas sus etapas ciclicidad, gestación, parto y posparto desde la Kinesiología de piso pélvico, el yoga, la terapia Gestalt y la neurociencia.
                                </p>
                                <p className="text-sm leading-relaxed sm:text-base md:text-lg font-light italic">
                                    Aquí comienzas un viaje de autoconocimiento, sensibilidad y presencia. Tu cuerpo es tu casa.
                                </p>
                            </div>

                            <div className="pt-2 sm:pt-4">
                                <Link
                                    href="/conocenos"
                                    className="inline-block rounded-md border-2 border-[#ED4137] bg-[#ED4137] px-6 py-2.5 text-xs font-normal uppercase tracking-wider text-white transition-all hover:bg-[#E22727] hover:border-[#E22727] sm:px-8 sm:py-3 sm:text-sm backdrop-blur-sm"
                                >
                                    Conoce más
                                </Link>
                            </div>
                        </div>

                        {/* Right side - Cards carousel */}
                        <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-700 ${
                                            index === currentSlide 
                                                ? "opacity-100 scale-100" 
                                                : "opacity-40 scale-95"
                                        }`}
                                    >
                                        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl shadow-xl sm:h-[240px] lg:h-[260px]">
                                            <img
                                                src={slide.image || "/placeholder.svg"}
                                                alt={slide.title}
                                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-5 text-white sm:p-6">
                                                <p className="mb-2 text-xs uppercase tracking-wider opacity-90 font-light">
                                                    {slide.subtitle}
                                                </p>
                                                <h3 className="text-xl font-medium sm:text-2xl leading-tight">
                                                    {slide.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation controls */}
                            <div className="flex items-center gap-4 sm:gap-6">
                                <div className="flex gap-3">
                                    <button
                                        onClick={prevSlide}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EDD0B2] text-white transition-all hover:border-[#ED4137] hover:bg-[#ED4137]/20 active:scale-95 sm:h-12 sm:w-12 backdrop-blur-sm"
                                        aria-label="Anterior"
                                    >
                                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EDD0B2] text-white transition-all hover:border-[#ED4137] hover:bg-[#ED4137]/20 active:scale-95 sm:h-12 sm:w-12 backdrop-blur-sm"
                                        aria-label="Siguiente"
                                    >
                                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </button>
                                </div>
                                
                                <div className="h-[1px] flex-1 bg-[#EDD0B2]/40 max-w-[200px]" />
                                
                                <div className="text-5xl font-light text-[#EDD0B2]/60 sm:text-6xl tabular-nums">
                                    0{currentSlide + 1}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
