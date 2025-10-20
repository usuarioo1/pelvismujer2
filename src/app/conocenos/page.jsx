export default function AboutPelvisMujer() {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
            Bienvenida a PelvisMujer
          </h1>
          <p className="text-xl text-stone-600 font-light italic">
            Un Viaje de Autoconocimiento Integral para la Mujer
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-20">
          <p className="text-lg text-stone-700 leading-relaxed text-center max-w-3xl mx-auto">
            En PelvisMujer, te invitamos a explorar un camino de autoconocimiento físico, energético y espiritual,
            especialmente diseñado para ti. Nuestro proyecto fusiona la Kinesiología de piso pélvico, el yoga y la
            terapia Gestalt, creando una experiencia única que transforma y empodera.
          </p>
        </div>

        {/* Misión */}
        <div className="mb-16 border-l-2 border-stone-300 pl-8">
          <h2 className="text-2xl font-serif text-stone-800 mb-4">Misión</h2>
          <p className="text-base text-stone-700 leading-relaxed">
            Nuestra misión es acompañar la salud integral de la mujer en cada etapa de su vida: desde la menstruación y
            la gestación, hasta el parto, el puerperio, la madurez y el climaterio. Lo hacemos desde una perspectiva
            consciente, amorosa y profunda.
          </p>
          <p className="text-base text-stone-700 leading-relaxed mt-4">
            A través de nuestra propuesta, combinamos yoga, meditación, Kinesiología y psicoterapia Gestalt, generando
            espacios de movimiento, autoconocimiento y transformación. Aquí, fortalecemos el vínculo entre tu cuerpo,
            tus emociones y tu alma.
          </p>
        </div>

        {/* Visión */}
        <div className="mb-16 border-l-2 border-stone-300 pl-8">
          <h2 className="text-2xl font-serif text-stone-800 mb-4">Visión</h2>
          <p className="text-base text-stone-700 leading-relaxed">
            Aspiramos a ser un referente en bienestar y autoconocimiento femenino. En PelvisMujer, cada mujer encontrará
            un espacio seguro donde se sentirá acompañada para habitar su cuerpo con amor, poder y presencia.
          </p>
        </div>

        {/* Closing */}
        <div className="text-center mt-20">
          <p className="text-lg text-stone-600 font-light italic">
            Únete a nosotros y descubre el viaje hacia tu mejor versión.
          </p>
        </div>
      </div>
    </div>
  )
}
