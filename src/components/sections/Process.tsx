import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: <Search size={30} />,
    title: "Descubrimiento",
    description:
      "Analizamos tu empresa, entendemos tus objetivos y detectamos oportunidades de mejora.",
  },

  {
    icon: <PenTool size={30} />,
    title: "Diseño",
    description:
      "Diseñamos la arquitectura y la experiencia del sistema antes de escribir una sola línea de código.",
  },

  {
    icon: <Code2 size={30} />,
    title: "Desarrollo",
    description:
      "Construimos una solución moderna, rápida y escalable utilizando tecnologías de última generación.",
  },

  {
    icon: <Rocket size={30} />,
    title: "Implementación",
    description:
      "Ponemos el proyecto en producción y acompañamos a tu empresa durante el crecimiento.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative py-40"
    >
      <Container>

        <Reveal>
          <div className="text-center">

            <span
              className="
                uppercase
                tracking-[0.35em]
                font-semibold
                text-blue-400
              "
            >
              Nuestro proceso
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
              Así desarrollamos cada proyecto
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
              Seguimos una metodología clara para entregar soluciones
              tecnológicas de alta calidad, garantizando eficiencia,
              escalabilidad y resultados medibles.
            </p>

          </div>
        </Reveal>

        <div className="relative mt-32">

          <div
            className="
              absolute
              left-1/2
              top-8
              hidden
              h-[75%]
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-blue-500/50
              via-cyan-400/30
              to-transparent
              lg:block
            "
          />

          <div
            className="
              grid
              gap-12
              lg:grid-cols-4
            "
          >
            {steps.map((step) => (
              <Reveal key={step.title}>
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
                    hover:-translate-y-3
                    hover:border-blue-500/50
                    hover:bg-white/10
                    hover:shadow-[0_0_50px_rgba(37,99,235,.18)]
                  "
                >

                  <div
                    className="
                      mx-auto
                      mb-8
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-blue-600/15
                      text-blue-400
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-blue-600/25
                    "
                  >
                    {step.icon}
                  </div>

                  <h3
                    className="
                      text-center
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      flex-1
                      text-center
                      leading-9
                      text-gray-400
                    "
                  >
                    {step.description}
                  </p>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}