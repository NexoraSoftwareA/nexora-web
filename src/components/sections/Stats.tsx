import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    value: "+50",
    label: "Proyectos desarrollados",
  },
  {
    value: "+20",
    label: "Empresas impulsadas",
  },
  {
    value: "99.9%",
    label: "Disponibilidad",
  },
  {
    value: "+120",
    label: "Automatizaciones",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#09090B] py-28">
      <Container>
        <Reveal>
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.3em] text-blue-400">
              Resultados
            </span>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Tecnología que genera impacto
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Nuestro objetivo es crear soluciones que aporten resultados
              medibles a cada empresa.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10">

                <h3 className="text-5xl font-black text-blue-400">
                  {stat.value}
                </h3>

                <p className="mt-4 text-gray-300">
                  {stat.label}
                </p>

              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}