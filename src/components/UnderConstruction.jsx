import React from 'react';

const UnderConstruction = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-white">
            <div className="space-y-8 max-w-2xl mx-auto">
                {/* Icono con estilo de marca */}
                <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 bg-rose-100 rounded-full animate-pulse"></div>
                    <div className="relative flex items-center justify-center w-full h-full rounded-full bg-rose-50">
                        <svg
                            className="w-10 h-10 text-rose-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                        </svg>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Sitio en Construcción
                    </h2>

                    <p className="text-lg md:text-xl text-rose-600 font-medium">
                        Prontamente habrán sorpresas increíbles
                    </p>

                    <p className="text-gray-600 font-light leading-relaxed max-w-lg mx-auto">
                        Estamos trabajando con mucho amor para crear un espacio especial para ti.
                        Gracias por tu paciencia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;
