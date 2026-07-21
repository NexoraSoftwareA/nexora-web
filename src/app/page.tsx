import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="text-blue-500 font-semibold tracking-widest uppercase mb-4">
          Bienvenido a
        </p>

        <h1 className="text-7xl font-extrabold mb-6">
          NEXORA
        </h1>

        <p className="text-2xl text-gray-300 mb-8">
          Tecnología que impulsa tu negocio.
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto leading-8">
          Desarrollamos software, automatización e inteligencia artificial
          para empresas que quieren crecer con tecnología moderna.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold">
            Conoce nuestros servicios
          </button>

          <button className="border border-gray-600 hover:border-blue-500 transition px-8 py-4 rounded-xl">
            Ver proyectos
          </button>
        </div>
      </div>
    </main>
  );
}

