'use client'

import React from 'react'

const PagoDialog = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handlePaymentClick = () => {
        // Aquí puedes agregar el link de pago real
        window.open('https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=bd2d3ff6cfe54407a5aed17463fac4cc', '_blank');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-auto">
                <div className="p-6">
                    <div className="text-center mb-6">
                        <div className="text-4xl mb-4">✨</div>
                        <h2 className="text-2xl font-bold text-purple-800 mb-2">
                            ¡Gracias por tu registro!
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Tu formulario ha sido enviado exitosamente. Para completar tu inscripción a 
                            <span className="font-semibold text-purple-700"> Raíz Cíclica – Gestantes</span>, 
                            procede con el pago de tu membresía.
                        </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold text-purple-800 mb-2">Membresía Mensual</h3>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p>• 2 clases semanales sincrónicas</p>
                            <p>• 3 clases grabadas mensuales</p>
                            <p>• 1 clase de vocalización mensual</p>
                            <p>• Comunidad WhatsApp exclusiva</p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-purple-200">
                            <p className="text-lg font-bold text-purple-800">Precio: $45.000/mes</p>
                            <p className="text-xs text-gray-600">Renovación automática (cancelable en cualquier momento)</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={handlePaymentClick}
                            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
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
                            Si tienes alguna duda, contáctanos antes de proceder con el pago.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagoDialog;