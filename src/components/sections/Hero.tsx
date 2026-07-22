import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0B0B0B] text-white"
    >
      <Container className="min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Lado izquierdo */}
          <div>
            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Desarrollo • IA • Automatización
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              Construimos el software que impulsa empresas.
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Creamos soluciones tecnológicas modernas para empresas que quieren
              crecer mediante software, inteligencia artificial y automatización.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contacto">
                Solicitar cotización
              </Button>

              <Button href="#proyectos" variant="secondary">
                Ver proyectos
              </Button>
            </div>
          </div>

          {/* Lado derecho (temporal) */}
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-2xl font-bold">
                Dashboard IA
              </h3>

              <p className="mt-3 text-gray-400">
                En el siguiente paso construiremos aquí un dashboard interactivo
                con gráficas y estadísticas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
