import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sistema ERP",
    subtitle: "Administración Empresarial",
    description:
      "Gestión de clientes, ventas, inventario y reportes en tiempo real.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "NEXORA CRM",
    subtitle: "Relación con Clientes",
    description:
      "Seguimiento comercial, automatización de ventas y métricas.",
    color: "from-violet-600 to-blue-500",
  },
  {
    title: "IA Automation",
    subtitle: "Inteligencia Artificial",
    description:
      "Automatización de procesos mediante IA y asistentes inteligentes.",
    color: "from-cyan-500 to-blue-700",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-[#050505] py-32 text-white"
    >
      <Container>

        <Reveal>
          <div className="text-center">

            <span className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
              Portafolio
            </span>

            <h2 className="mt-5 text-5xl font-black">
              Proyectos destacados
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
              Soluciones diseñadas para empresas modernas.
            </p>

          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {projects.map((project) => (

            <Reveal key={project.title}>

              <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500">

                {/* Mockup */}

                <div className={`h-56 bg-gradient-to-br ${project.color} p-6`}>

                  <div className="h-full rounded-2xl bg-[#070707]/80 p-5">

                    <div className="flex gap-2">

                      <div className="h-3 w-3 rounded-full bg-red-400" />

                      <div className="h-3 w-3 rounded-full bg-yellow-400" />

                      <div className="h-3 w-3 rounded-full bg-green-400" />

                    </div>

                    <div className="mt-6 space-y-4">

                      <div className="h-4 w-32 rounded bg-blue-500/60" />

                      <div className="h-3 w-full rounded bg-white/10" />

                      <div className="h-3 w-4/5 rounded bg-white/10" />

                      <div className="mt-8 grid grid-cols-3 gap-3">

                        <div className="h-16 rounded bg-blue-500/20" />

                        <div className="h-16 rounded bg-white/10" />

                        <div className="h-16 rounded bg-white/10" />

                      </div>

                    </div>

                  </div>

                </div>

                {/* Información */}

                <div className="p-8">

                  <p className="text-sm uppercase tracking-widest text-blue-400">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {project.description}
                  </p>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-blue-400 transition group-hover:gap-4">
                    Ver proyecto
                    <ArrowUpRight size={18} />
                  </button>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}