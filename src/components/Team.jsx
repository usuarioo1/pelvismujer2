'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const teamMembers = [
        {
            id: 1,
            name: 'Daniela Flores Rojas',
            specialty: 'Kinesióloga especializada en embarazo y piso pélvico',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NNlmSPLmuE3ajDR8EOhB1fRb6W14q64kkw&s'
        },
        {
            id: 2,
            name: 'Lupita',
            specialty: 'Especialista en post parto y recuperación pélvica',
            image: 'https://media.vogue.es/photos/62fb58e33534b8cb97e5b7b4/2:3/w_2560%2Cc_limit/EN%2520VOGUE%2520COMPRAS5.jpg'
        },
        
    ];

    // Auto-play del carrusel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Cambia cada 4 segundos

        return () => clearInterval(interval);
    }, [isAutoPlaying, teamMembers.length]);

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => 
            prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EDD0B2]/20">
            <div className="max-w-7xl mx-auto">
                {/* Título principal */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#4E2226] mb-4 font-heading">
                        Nuestro Equipo
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#ED4137] mb-6">
                        Conoce a nuestras profesionales
                    </h3>
                    <p className="text-[#2D2D2D] max-w-4xl mx-auto text-lg leading-relaxed">
                        En PelvisMujer trabajamos unidas para acompañarte desde una mirada integral y consciente. 
                        Somos profesionales de la Kinesiología especializada en embarazo, post parto y piso pélvico, 
                        el yoga y la terapia Gestalt, dedicadas a guiarte en cada etapa de tu vida con respeto, 
                        presencia y calidez. Creemos en el cuerpo como territorio de transformación y en la importancia 
                        de un acompañamiento humano, científico y amoroso. Aquí encontrarás un equipo que escucha, 
                        contiene y camina contigo hacia tu bienestar.
                    </p>
                </div>

                {/* Carrusel de profesionales */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Contenedor del carrusel */}
                    <div className="relative overflow-hidden rounded-3xl">
                        <div 
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {teamMembers.map((member) => (
                                <div 
                                    key={member.id} 
                                    className="min-w-full flex flex-col md:flex-row items-center justify-center gap-8 p-8"
                                >
                                    {/* Imagen principal */}
                                    <div className="relative w-64 h-80 md:w-72 md:h-96 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#EDD0B2] to-[#ED4137] rounded-[40px] transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                                        <div className="relative w-full h-full bg-gray-300 rounded-[40px] overflow-hidden shadow-2xl">
                                            <img 
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/400x600?text=' + member.name;
                                                }}
                                            />
                                        </div>
                                    </div>

                                
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botones de navegación */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2D2D2D] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2D2D2D] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Información del miembro actual */}
                    <div className="mt-8 text-center">
                        <h4 className="text-2xl md:text-3xl font-bold text-[#4E2226] mb-2 font-heading">
                            {teamMembers[currentIndex].name}
                        </h4>
                        <p className="text-[#ED4137] font-medium text-lg">
                            {teamMembers[currentIndex].specialty}
                        </p>
                    </div>

                    {/* Indicadores de puntos */}
                    <div className="flex justify-center gap-2 mt-6">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex 
                                        ? 'bg-[#ED4137] w-8 h-3' 
                                        : 'bg-[#EDD0B2] w-3 h-3 hover:bg-[#EDD0B2]/60'
                                }`}
                                aria-label={`Ir a profesional ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
