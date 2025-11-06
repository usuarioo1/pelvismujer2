import ContactForm from '@/components/ContactForm';

export default function Formulario() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-purple-800 mb-4">Contacto</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros programas? Déjanos tus datos y nos pondremos en contacto contigo.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
