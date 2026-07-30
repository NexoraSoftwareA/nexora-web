import Image from "next/image";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, CheckCircle2, Target } from "lucide-react";

const projects = [
  {
    title: "NEXORA ERP",
    category: "Software Empresarial",
    challenge: "Ventas, inventario y facturación repartidos en varias herramientas.",
    solution:
      "Una plataforma centralizada para operar, consultar información y tomar decisiones con más claridad.",
    outcome: "Operación conectada en un solo lugar",
    image: "/projects/nexora-erp.png",
    tech: ["Next.js", "React", "PostgreSQL"],
  },
  {
    title: "CRM Inteligente",
    category: "Automatización con IA",
    challenge: "Seguimientos comerciales manuales y oportunidades que se pierden en el proceso.",
    solution:
      "Un CRM que organiza clientes, automatiza tareas repetitivas y prioriza cada oportunidad.",
    outcome: "Equipos comerciales más enfocados",
    image: "/projects/crm-inteligente.png",
    tech: ["AI", "Node.js", "OpenAI"],
  },
  {
    title: "Dashboard Analytics",
    category: "Business Intelligence",
    challenge: "Datos relevantes dispersos, difíciles de convertir en decisiones a tiempo.",
    solution:
      "Un panel ejecutivo que reúne indicadores clave y hace visible lo que necesita atención.",
    outcome: "Decisiones respaldadas por datos",
    image: "/projects/dashboard-analytics.png",
    tech: ["Power BI", "React", "API"],
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="
        relative
        py-40
      "
    >
      <Container>
        <Reveal>
          <div className="text-center">
            <span
              className="
                uppercase
                tracking-[0.35em]
                text-cyan-400
                font-semibold
              "
            >
              Proyectos
            </span>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                text-white
                sm:text-5xl
              "
            >
              Casos destacados
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-9
                text-gray-400
              "
            >
              Ejemplos de cómo convertimos procesos complejos en herramientas
              claras, útiles y preparadas para crecer.
            </p>
          </div>
        </Reveal>

        <div
          className="
            mt-32
            grid
            gap-12
            lg:grid-cols-3
          "
        >
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                  hover:bg-white/10
                  hover:shadow-[0_0_60px_rgba(34,211,238,.18)]
                "
              >
                <div
                  className="
                    relative
                    h-72
                    overflow-hidden
                  "
                >
                  <Image
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/10
                      to-black/10
                      transition
                      duration-500
                      group-hover:from-black/35
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      rounded-full
                      bg-white/10
                      px-5
                      py-2
                      text-sm
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {project.category}
                  </div>
                </div>

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-10
                  "
                >
                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-white
                    "
                  >
                    {project.title}
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div className="flex gap-3">
                      <Target
                        size={18}
                        className="mt-1 shrink-0 text-cyan-400"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                          El reto
                        </p>
                        <p className="mt-1 leading-7 text-gray-400">
                          {project.challenge}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-cyan-400"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                          La solución
                        </p>
                        <p className="mt-1 leading-7 text-gray-400">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                      Impacto
                    </p>
                    <p className="mt-1 font-medium text-white">{project.outcome}</p>
                  </div>

                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                    "
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-cyan-500/20
                          bg-cyan-500/10
                          px-4
                          py-2
                          text-sm
                          text-cyan-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contacto"
                    aria-label={`Solicitar una solución similar a ${project.title}`}
                    className="
                      mt-10
                      flex
                      items-center
                      gap-2
                      font-semibold
                      text-cyan-400
                      transition-all
                      duration-300
                      group-hover:gap-4
                    "
                  >
                    Quiero una solución similar
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
