import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Dashboard from "@/components/dashboard/Dashboard";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export default function Hero() {
  return (
    <><section
          id="inicio"
          className="relative overflow-hidden bg-[#09090B] text-white"
      >
          {/* Glow superior */}
          <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

          {/* Glow lateral */}
          <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

          {/* Grid tecnológico */}
          <div
              className="absolute inset-0 opacity-10"
              style={{
                  backgroundImage: `
            linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)
          `,
                  backgroundSize: "60px 60px",
              }} />

          <Container className="relative z-10 min-h-screen flex items-center">
              <div className="grid w-full items-center gap-24 lg:grid-cols-2">

                  {/* Lado izquierdo */}
                  <div>
                      <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
                          Desarrollo • IA • Automatización
                      </span>

                      <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
                          Construimos el software que impulsa empresas.
                      </h1>

                      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
                          Creamos soluciones tecnológicas modernas para empresas que desean
                          crecer mediante software a medida, inteligencia artificial y
                          automatización de procesos.
                      </p>

                      <div className="mt-10 space-y-4 text-gray-300">

                          <div className="flex items-center gap-3">
                              <span className="text-blue-400 text-xl">✓</span>
                              <span>Software desarrollado a medida</span>
                          </div>

                          <div className="flex items-center gap-3">
                              <span className="text-blue-400 text-xl">✓</span>
                              <span>Automatización inteligente de procesos</span>
                          </div>

                          <div className="flex items-center gap-3">
                              <span className="text-blue-400 text-xl">✓</span>
                              <span>Implementación de Inteligencia Artificial</span>
                          </div>

                      </div>

                      <div className="mt-12 flex flex-wrap gap-5">

                          <Button href="#contacto">
                              Solicitar cotización
                          </Button>

                          <Button
                              href="#proyectos"
                              variant="secondary"
                          >
                              Ver proyectos
                          </Button>

                      </div>
                  </div>

                  {/* Lado derecho */}
                  <div className="relative flex justify-center lg:justify-end">

                      {/* Glow detrás del dashboard */}
                      <div className="absolute h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[180px]" />

                      <div className="relative w-full max-w-2xl">
                          <Dashboard />
                      </div>

                  </div>

              </div>
          </Container>
      </section><BackgroundGlow /></>
  );
}