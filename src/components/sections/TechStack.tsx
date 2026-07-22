import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "OpenAI",
  "Docker",
  "PostgreSQL",
];

export default function TechStack() {
  return (
    <section className="bg-[#0D0D10] py-28">
      <Container>
        <Reveal>
          <div className="text-center">
            <span className="text-blue-400 font-semibold uppercase tracking-[0.3em]">
              Tecnologías
            </span>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Trabajamos con herramientas modernas
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Utilizamos tecnologías robustas para crear soluciones rápidas,
              escalables y seguras.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap justify-center gap-5">
          {technologies.map((tech) => (
            <Reveal key={tech}>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10">
                {tech}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}