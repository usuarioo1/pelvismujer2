'use client'
import { useState } from 'react';

const programOptions = [
  {
    category: 'Espacio Online',
    programs: [
      { value: 'autoconocimiento-online', label: 'AutoConocimiento Femenino' },
      { value: 'programa-gestantes-online', label: 'Programa para Gestantes' },
    ]
  },
  {
    category: 'Raíz Cíclica',
    programs: [
      { value: 'autoconocimiento-raiz', label: 'Autoconocimiento Femenino' },
      { value: 'gestacion-consciente', label: 'Gestación Consciente' },
    ]
  },
  {
    category: 'Sesiones Uno a Uno',
    programs: [
      { value: 'dolor-pelvico', label: 'Dolor Pélvico' },
      { value: 'parto-consciente', label: 'Parto Consciente' },
      { value: 'puerperio', label: 'Puerperio' },
    ]
  },
  {
    category: 'Talleres y Cursos',
    programs: [
      { value: 'preparacion-parto', label: 'Taller de Preparación al Parto' },
      { value: 'taller-instinto', label: 'Taller Instinto' },
      { value: 'taller-rcp', label: 'Taller RCP' },
    ]
  }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    programa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    // Resetear el formulario después del envío
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      programa: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-[#4E2226] mb-6">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ED4137] focus:border-transparent"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ED4137] focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ED4137] focus:border-transparent"
            placeholder="+34 XXX XXX XXX"
          />
        </div>

        <div>
          <label htmlFor="programa" className="block text-sm font-medium text-[#2D2D2D] mb-1">
            Programa de interés
          </label>
          <select
            id="programa"
            name="programa"
            value={formData.programa}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-[#ED4137] focus:border-transparent"
          >
            <option value="">Selecciona un programa</option>
            {programOptions.map((category) => (
              <optgroup key={category.category} label={category.category}>
                {category.programs.map((program) => (
                  <option key={program.value} value={program.value}>
                    {program.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ED4137] text-white py-3 px-6 rounded-md hover:bg-[#E22727] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ED4137] focus:ring-offset-2"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}