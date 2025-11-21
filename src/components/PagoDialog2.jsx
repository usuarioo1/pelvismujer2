'use client'

import React from 'react'

const PagoDialog2 = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handlePaymentClick = () => {
        // Aquí puedes agregar el link de pago específico para Raíz Cíclica
        window.open('https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=tu_plan_id_raiz_ciclica', '_blank');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-auto">
                <div className="p-6">
                    <div className="text-center mb-6">
                        <div className="text-4xl mb-4">🌿</div>
                        <h2 className="text-2xl font-bold text-[#4E2226] mb-2">
                            ¡Gracias por tu registro!
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Tu formulario ha sido enviado exitosamente. Para completar tu inscripción a 
                            <span className="font-semibold text-[#4E2226]"> Raíz Cíclica</span>, 
                            procede con el pago de tu membresía.
                        </p>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4 mb-6 border border-red-100">
                        <h3 className="font-semibold text-[#4E2226] mb-2">Membresía Mensual - Raíz Cíclica</h3>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p>• Acompañamiento personalizado según tu etapa</p>
                            <p>• Prácticas para honrar tu cuerpo y ritmo</p>
                            <p>• Espacio seguro y respetuoso</p>
                            <p>• Adaptado a tus necesidades físicas y emocionales</p>
                            <p>• Comunidad de apoyo</p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-red-200">
                            <p className="text-lg font-bold text-[#4E2226]">Precio: $35.000/mes</p>
                            <p className="text-xs text-gray-600">Renovación automática (cancelable en cualquier momento)</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={handlePaymentClick}
                            className="w-full bg-[#4E2226] text-white py-3 px-4 rounded-lg hover:bg-[#3A1B1E] transition-colors font-semibold"
                        >
                            Proceder al Pago
                        </button>
                        
                        <button
                            onClick={onClose}
                            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="text-xs text-gray-500">
                            Bienvenida a un lugar donde tu ritmo es sagrado y tus procesos tienen espacio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagoDialog2;