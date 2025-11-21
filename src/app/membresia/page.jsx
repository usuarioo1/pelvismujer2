
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PagoDialog from '../../components/PagoDialog'
import logoForm from '../../assets/logoForm.png'


const FormularioMembresia = () => {
    const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar validación del formulario si es necesario
        setIsPaymentDialogOpen(true);
    };

    const closePaymentDialog = () => {
        setIsPaymentDialogOpen(false);
    };
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-2xl mx-auto py-8 px-4">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
                    <div className="flex justify-center mb-6">
                        <Image 
                            src={logoForm} 
                            alt="Logo Raíz Cíclica" 
                            width={300} 
                            height={300} 
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#4E2226] mb-6 text-center">Raíz Cíclica – Gestantes</h1>
                    <p className="text-gray-700 mb-4 text-center">Bienvenida a este espacio creado para acompañarte en tu embarazo con presencia, calma y autocuidado.</p>
                    <p className="text-gray-700 mb-4 text-center">Este formulario nos ayuda a conocerte un poquito más para que tu experiencia sea segura, respetuosa y adaptada a lo que tú y tu bebé necesitan en este momento.</p>
                    <p className="text-gray-700 mb-4 text-center">Tu proceso es único y queremos ofrecerte prácticas que honren tu cuerpo, tu energía y tu ritmo.</p>
                    <p className="text-gray-700 mb-6 text-center">Completa esta información con confianza: está protegida y solo se utiliza para personalizar tu acompañamiento.</p>
                    <div className="mb-4">
                        <span className="text-2xl mr-2" role="img" aria-label="flor">🌼</span>
                        <span className="font-semibold text-[#4E2226]">Incluye:</span>
                        <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                            <li>2 clases semanales sincrónicas de gimnasia prenatal (60 min). Martes y Jueves 10:30 hrs ó Lunes y Miércoles 20:00 hrs.</li>
                            <li>3 clases grabadas mensuales de yoga prenatal, para practicar a tu ritmo</li>
                            <li>1 Clase sincrónica mensual de vocalización y canto prenatal. <span className="italic">Último Miércoles de cada mes a las 12:00</span></li>
                            <li>Acceso a comunidad en WhatsApp exclusiva</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold text-[#4E2226]">🔁 Membresía con renovación mensual automática</span> (puedes cancelar cuando quieras).
                    </div>
                    <div className="mb-4 text-gray-700 text-center">
                        <span className="text-xl mr-2" role="img" aria-label="estrella">✨</span>
                        <span className="italic">Gracias por permitirnos ser parte de tu camino hacia un embarazo más consciente y amoroso.</span>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#4E2226] mb-6">Formulario de Membresía</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className='max-w-2xl'>
                            <div><h2 className='text-xl text-[#4E2226] font-medium mb-4'>Datos Personales</h2></div>
                        </div>
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                            <input type="text" id="nombre" className="block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor='paisOciudad' className="block text-sm font-medium text-gray-700 mb-1">País o Ciudad</label>
                            <input type="text" id="paisOciudad" className="block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" className="block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                            <input type="tel" id="telefono" className="block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label htmlFor="semanaGestacion" className="block text-sm font-medium text-gray-700 mb-1">Semana de Gestación</label>
                            <input type="number" id="semanaGestacion" className="block w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div>
                            <div>
                                <h2 className='text-xl text-[#4E2226] font-medium mb-4'>Salud y acompañamiento</h2>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="motivoConsulta" className="block text-sm font-medium text-gray-700 mb-1">¿Tienes alguna condición médica, dolor o recomendación profesional que debamos considerar? (Ej: dolor pélvico, ciática, ansiedad, recomendación médica, etc.)</label>
                            <textarea id="motivoConsulta" className="block w-full border border-gray-300 rounded-md p-2" rows="4"></textarea>
                        </div>
                        <div>
                            <label htmlFor="objetivosMembresia" className="block text-sm font-medium text-gray-700 mb-1">¿Qué estás necesitando acompañar en este momento?</label>
                            <textarea id="objetivosMembresia" className="block w-full border border-gray-300 rounded-md p-2" rows="4"></textarea>
                        </div>
                        <div>
                            <label htmlFor='checkbox' className="inline-flex items-center">
                                <input type="checkbox" id="checkbox" className="form-checkbox h-5 w-5 text-[#4E2226]" />
                                <span className="ml-2 text-gray-700 underline">
                                    <a href="/terminosYCondiciones" target="_blank" rel="noopener noreferrer">
                                        Acepto los términos y condiciones
                                    </a>
                                </span>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-[#4E2226] text-white py-3 px-4 rounded-md hover:bg-[#3A1B1E] transition-colors font-semibold">
                                UNIRME A RAÍZ CÍCLICA
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <PagoDialog 
                isOpen={isPaymentDialogOpen} 
                onClose={closePaymentDialog} 
            />
        </div>
    );
}

export default FormularioMembresia;