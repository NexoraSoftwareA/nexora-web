export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
  <span className="text-2xl font-extrabold tracking-widest text-white">
    NEXORA
  </span>

  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
</div>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#inicio" className="hover:text-blue-500 transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-blue-500 transition">
            Servicios
          </a>

          <a href="#proyectos" className="hover:text-blue-500 transition">
            Proyectos
          </a>

          <a href="#contacto" className="hover:text-blue-500 transition">
            Contacto
          </a>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl font-semibold">
          Cotizar
        </button>

      </div>
    </nav>
  );
}