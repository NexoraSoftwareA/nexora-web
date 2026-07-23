"use client";

import CountUp from "react-countup";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Proyectos desarrollados",
  },
  {
    value: 20,
    suffix: "+",
    label: "Empresas impulsadas",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Disponibilidad",
  },
  {
    value: 120,
    suffix: "+",
    label: "Automatizaciones",
  },
];

export default function Stats() {
  return (
    <section
      id="resultados"
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
              Resultados
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
              Tecnología que genera impacto
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-gray-400
              "
            >
              Cada proyecto está enfocado en aumentar la productividad,
              optimizar procesos y generar crecimiento para nuestros clientes.
            </p>
          </div>
        </Reveal>

        <div
          className="
            mt-28
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-10
                  text-center
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_50px_rgba(34,211,238,.15)]
                "
              >
                <h3
                  className="
                    text-5xl
                    font-black
                    text-cyan-400
                  "
                >
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                  {stat.suffix}
                </h3>

                <p
                  className="
                    mt-6
                    text-lg
                    text-gray-300
                  "
                >
                  {stat.label}
                </p>

                <div
                  className="
                    mt-10
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-white/10
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-cyan-400
                    "
                    style={{
                      width: stat.value === 99.9 ? "99%" : "92%",
                    }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}