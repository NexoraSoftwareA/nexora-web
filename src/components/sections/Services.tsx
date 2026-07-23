import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

import {
  BrainCircuit,
  Code2,
  Workflow,
  ShieldCheck,
  Database,
  Cloud,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software a medida",
    description:
      "Desarrollamos plataformas web y aplicaciones adaptadas a los procesos y objetivos de tu empresa.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    description:
      "Aplicamos IA para automatizar tareas, analizar información y mejorar la toma de decisiones.",
  },
  {
    icon: Workflow,
    title: "Automatización empresarial",
    description:
      "Optimizamos procesos repetitivos para aumentar productividad y reducir costos.",
  },
  {
    icon: Database,
    title: "Sistemas empresariales",
    description:
      "Construimos soluciones organizadas para gestionar información, clientes y operaciones.",
  },
  {
    icon: Cloud,
    title: "Infraestructura Cloud",
    description:
      "Implementamos sistemas seguros, escalables y preparados para el crecimiento.",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad",
    description:
      "Protegemos tus datos y aplicaciones con estándares modernos de seguridad.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-36"
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
              Nuestros servicios
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
              Soluciones digitales que hacen crecer tu negocio
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
              Creamos tecnología enfocada en productividad,
              automatización e inteligencia artificial para empresas modernas.
            </p>
          </div>
        </Reveal>

        <div
          className="
            mt-28
            grid
            gap-12
            md:grid-cols-2
            xl:grid-cols-3
            items-stretch
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title}>
                <div
                  className="
                    group
                    flex
                    h-full
                    flex-col
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-10
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/40
                    hover:bg-white/10
                    hover:shadow-[0_0_50px_rgba(34,211,238,.15)]
                  "
                >
                  <div
                    className="
                      mb-8
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-500/10
                      text-cyan-400
                      transition
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      flex-1
                      leading-9
                      text-gray-400
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}