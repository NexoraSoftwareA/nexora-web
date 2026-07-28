import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/* Los logos son SVG pequeños; se cargan directamente y no requieren optimización. */
/* eslint-disable @next/next/no-img-element */

const technologies = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  {
    name: "OpenAI",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    iconClassName: "brightness-0 invert",
  },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
];

export default function TechStack() {
  return (
    <section
      id="tecnologias"
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
                text-blue-400
                font-semibold
              "
            >
              Tecnologías
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
              Construimos con tecnología de vanguardia
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
              Utilizamos herramientas modernas para desarrollar soluciones
              rápidas, escalables y preparadas para el futuro.
            </p>
          </div>
        </Reveal>

        <div
          className="
            mx-auto
            mt-32
            flex
            max-w-6xl
            flex-wrap
            justify-center
            gap-8
          "
        >
          {technologies.map((tech) => (
            <Reveal key={tech.name}>
              <div
                className="
                  group
                  flex
                  min-w-40
                  flex-col
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-7
                  text-lg
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-105
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_35px_rgba(34,211,238,.18)]
                "
              >
                <img
                  src={tech.icon}
                  alt={`Logo de ${tech.name}`}
                  width={48}
                  height={48}
                  loading="lazy"
                  className={`h-12 w-12 object-contain ${tech.iconClassName ?? ""}`}
                />

                <span>{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
