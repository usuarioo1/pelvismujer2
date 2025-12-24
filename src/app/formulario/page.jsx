import ContactForm from '@/components/ContactForm';

export default function Formulario() {
  return (
    <div className="min-h-screen bg-[#EDD0B2]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#4E2226] mb-4 font-heading">Contacto</h1>
          <p className="text-[#2D2D2D] max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros programas? Déjanos tus datos y nos pondremos en contacto contigo.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
