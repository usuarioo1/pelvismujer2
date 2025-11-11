
import React from 'react'
import Link from 'next/link'


const FormularioMembresia = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-2xl mx-auto py-8 px-4">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3 text-center">Raíz Cíclica – Gestantes</h1>
                    <p className="text-gray-700 mb-4 text-center">Acompaña tu embarazo desde la serenidad, el movimiento consciente y la conexión con tu cuerpo y tu bebé.</p>
                    <p className="text-gray-700 mb-4 text-center">En este espacio trabajamos el fortalecimiento, la flexibilidad y la conciencia del piso pélvico, integrando el Yoga prenatal, la respiración y el descanso profundo como recursos esenciales para esta etapa.</p>
                    <div className="mb-4">
                        <span className="text-2xl mr-2" role="img" aria-label="flor">🌼</span>
                        <span className="font-semibold text-purple-700">Incluye:</span>
                        <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                            <li>2 clases semanales sincrónicas de gimnasia prenatal</li>
                            <li>3 clases grabadas mensuales de yoga prenatal, para practicar a tu ritmo</li>
                            <li>1 Clase sincrónica mensual de vocalización y canto prenatal. <span className="italic">Último Miércoles de cada mes a las 12:00</span></li>
                            <li>Acceso a comunidad en WhatsApp exclusiva</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold text-purple-700">🔁 Membresía con renovación mensual automática</span> (puedes cancelar cuando quieras).
                    </div>
                    <div className="mb-2 text-gray-700 text-sm">
                        Es requisito contar con autorización médica para la práctica física. Este programa no sustituye atención kinésica ni médica, sino que complementa tu bienestar integral durante el embarazo.
                    </div>
                </div>
                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-purple-800 mb-6">Formulario de Membresía</h2>
                    <form className="space-y-6">
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
                            <label htmlFor="motivoConsulta" className="block text-sm font-medium text-gray-700 mb-1">¿Cual es tu principal objetivo al unirte a esta membresia?</label>
                            <textarea id="motivoConsulta" className="block w-full border border-gray-300 rounded-md p-2" rows="4"></textarea>
                        </div>
                        <div>
                            <label htmlFor='checkbox' className="inline-flex items-center">
                                <input type="checkbox" id="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
                                <span className="ml-2 text-gray-700 underline">
                                    <a href="/terminosYCondiciones" target="_blank" rel="noopener noreferrer">
                                        Acepto los términos y condiciones
                                    </a>
                                </span>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioMembresia;