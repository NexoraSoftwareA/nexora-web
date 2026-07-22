export default function Hero() {
  return (
    <main
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#0B0B0B] text-white flex items-center justify-center px-6"
    >
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#101827] to-[#0B0B0B]" />

      {/* Luz azul */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl" />

      {/* Cuadrícula */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl text-center">
        <p className="text-blue-500 font-semibold tracking-widest uppercase mb-4">
          Bienvenido a
        </p>

        <h1 className="text-6xl md:text-8xl font-black tracking-wide mb-6">
          NEXORA
        </h1>

        <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-light">
          Tecnología que impulsa tu negocio.
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto leading-8">
          Desarrollamos software, automatización e inteligencia artificial para
          empresas que quieren crecer con tecnología moderna.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#servicios"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            Conoce nuestros servicios
          </a>

          <a
            href="#proyectos"
            className="border border-gray-600 hover:border-blue-500 transition px-8 py-4 rounded-xl"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </main>
  );
}