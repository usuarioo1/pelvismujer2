'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PagoDialog2 from '../../components/PagoDialog2'
import logoForm from '../../assets/logoForm.png'

const FormularioRaizCiclica = () => {
    const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        paisOciudad: '',
        etapaActual: '',
        condicionMedica: '',
        intencion: '',
        aceptaTerminos: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación básica
        if (!formData.aceptaTerminos) {
            alert('Por favor acepta los términos y condiciones');
            return;
        }
        setIsPaymentDialogOpen(true);
    };

    const closePaymentDialog = () => {
        setIsPaymentDialogOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
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
                    <h1 className="text-2xl md:text-3xl font-bold text-[#4E2226] mb-4 text-center">Raíz Cíclica - Mujeres habitándose</h1>
                    
                    <p className="text-gray-700 mb-4 text-center">Gracias por estar aquí. Raíz Cíclica es un espacio para volver a ti: a tu cuerpo, a tu ciclo, a tu fuerza y a tu calma.</p>
                    <p className="text-gray-700 mb-4 text-center">Queremos comprender en qué etapa te encuentras, ya sea tu postparto, tu ciclicidad o tu transición, para ofrecerte prácticas que te sostengan de forma real y respetuosa.</p>
                    <p className="text-gray-700 mb-4 text-center">Este formulario nos permite adaptar tu experiencia a tus necesidades físicas, emocionales y energéticas.</p>
                    <p className="text-gray-700 mb-6 text-center">Todo lo que compartas es confidencial y está pensado para cuidarte mejor en este proceso.</p>

                    <div className='max-w-2xl'>
                        <h2 className='text-[#4E2226] text-xl font-semibold mb-2 flex align-center'>🌼Incluye</h2>
                        <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                            <li>1 clase semanal sincrónicas de Yoga (60 min). Lunes 21:00 hrs (Chile)</li>
                            <li>2 clases grabadas mensuales de yoga, para practicar a tu ritmo (30 min)</li>
                            <li>2 clases grabadas mensuales de gimnasia hipopresiva, para practicar a tu ritmo (30 min)</li>
                            <li>1 clases sincrónica mensual de profundización y autoconocimiento de piso pélvico y ciclicidad. (90 min)</li>
                            <li>Acceso a comunidad en WhatsApp exclusiva</li>
                            <li>🔁 Membresía con renovación mensual automática (puedes cancelar cuando quieras).</li>
                        </ul>
                    </div>
                    
                    <div className="mb-6 text-gray-700 text-center mt-2.5">
                        <span className="text-xl mr-2" role="img" aria-label="hoja">🌿</span>
                        <span className="italic">Bienvenida a un lugar donde tu ritmo es sagrado y tus procesos tienen espacio.</span>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-[#4E2226] mb-6">Formulario de Membresía</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        {/* Datos Personales */}
                        <div className='max-w-2xl'>
                            <div><h3 className='text-xl text-[#4E2226] font-medium mb-4'>Datos personales</h3></div>
                        </div>
                        
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                className="block w-full border border-gray-300 rounded-md p-2 text-black" 
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="block w-full border border-gray-300 rounded-md p-2 text-black" 
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                            <input 
                                type="tel" 
                                id="telefono" 
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleInputChange}
                                className="block w-full border border-gray-300 rounded-md p-2 text-black" 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor='paisOciudad' className="block text-sm font-medium text-gray-700 mb-1">País o Ciudad</label>
                            <input 
                                type="text" 
                                id="paisOciudad" 
                                name="paisOciudad"
                                value={formData.paisOciudad}
                                onChange={handleInputChange}
                                className="block w-full border border-gray-300 rounded-md p-2 text-black" 
                            />
                        </div>

                        {/* Tu etapa actual */}
                        <div className='max-w-2xl'>
                            <div><h3 className='text-xl text-[#4E2226] font-medium mb-4'>Tu etapa actual</h3></div>
                        </div>
                        
                        <div>
                            <label htmlFor="etapaActual" className="block text-sm font-medium text-gray-700 mb-1">¿En qué etapa te encuentras?</label>
                            <select 
                                id="etapaActual" 
                                name="etapaActual"
                                value={formData.etapaActual}
                                onChange={handleInputChange}
                                className="block w-full border border-gray-300 rounded-md p-2 text-black" 
                                required
                            >
                                <option value="" className='text-black'>Selecciona tu etapa...</option>
                                <option value="postparto-0-6" className='text-black'>Postparto (0–6 meses)</option>
                                <option value="postparto-6-12" className='text-black'>Postparto (6–12 meses)</option>
                                <option value="postparto-mas-1" className='text-black'>Postparto +1 año</option>
                                <option value="ciclica-regular" className='text-black'>Cíclica con menstruación regular</option>
                                <option value="ciclica-irregular" className='text-black'>Cíclica con menstruación irregular</option>
                                <option value="sin-menstruacion" className='text-black'>Sin menstruación (por lactancia, anticoncepción o motivo médico)</option>
                                <option value="no-decir">Prefiero no decir</option>
                            </select>
                        </div>

                        {/* Tu cuerpo hoy */}
                        <div className='max-w-2xl'>
                            <div><h3 className='text-xl text-[#4E2226] font-medium mb-4'>Tu cuerpo hoy</h3></div>
                        </div>
                        
                        <div>
                            <label htmlFor="condicionMedica" className="block text-sm font-medium text-gray-700 mb-1">¿Estás con alguna molestia o condición que quieras que conozcamos?</label>
                            <textarea 
                                id="condicionMedica" 
                                name="condicionMedica"
                                value={formData.condicionMedica}
                                onChange={handleInputChange}
                                className="block w-full border border-gray-300 rounded-md p-2 text-black" 
                                rows="3"
                                placeholder="Describe brevemente cualquier condición o molestia física que tengas..."
                            ></textarea>
                        </div>

                        {/* Tu intención para este ciclo */}
                        <div className='max-w-2xl'>
                            <div><h3 className='text-xl text-[#4E2226] font-medium mb-4'>Tu intención para este ciclo</h3></div>
                        </div>
                        
                        <div>
                            <label htmlFor="intencion" className="block text-sm font-medium text-gray-700 mb-1">¿Qué te gustaría cultivar o transformar en ti durante este mes?</label>
                            <textarea 
                                id="intencion" 
                                name="intencion"
                                value={formData.intencion}
                                onChange={handleInputChange}
                                className="block w-full border border-gray-300 rounded-md p-2 text-black" 
                                rows="4"
                                placeholder="Comparte tu intención o lo que quisieras trabajar en ti misma..."
                            ></textarea>
                        </div>

                        {/* Términos y condiciones */}
                        <div>
                            <label htmlFor='aceptaTerminos' className="inline-flex items-center">
                                <input 
                                    type="checkbox" 
                                    id="aceptaTerminos" 
                                    name="aceptaTerminos"
                                    checked={formData.aceptaTerminos}
                                    onChange={handleInputChange}
                                    className="form-checkbox h-5 w-5 text-[#4E2226]" 
                                />
                                <span className="ml-2 text-gray-700 underline">
                                    <Link href="/terminosYCondiciones" target="_blank" rel="noopener noreferrer">
                                        Acepto los términos y condiciones
                                    </Link>
                                </span>
                            </label>
                        </div>

                        {/* Botón de envío */}
                        <div>
                            <button 
                                type="submit" 
                                className="w-full bg-[#4E2226] text-white py-3 px-4 rounded-md hover:bg-[#C41E1E] transition-colors font-semibold"
                            >
                                UNIRME A RAÍZ CÍCLICA
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <PagoDialog2 
                isOpen={isPaymentDialogOpen} 
                onClose={closePaymentDialog} 
            />
        </div>
    );
}

export default FormularioRaizCiclica;
