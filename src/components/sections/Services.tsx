import { Code2, Bot, Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    icon: <Code2 size={36} />,
    title: "Desarrollo de Software",
    description:
      "Creamos aplicaciones web, plataformas y sistemas personalizados adaptados a las necesidades de tu empresa.",
  },
  {
    icon: <Bot size={36} />,
    title: "Inteligencia Artificial",
    description:
      "Implementamos IA y automatización para optimizar procesos, reducir costos y aumentar la productividad.",
  },
  {
    icon: <Briefcase size={36} />,
    title: "Soluciones Empresariales",
    description:
      "Diseñamos herramientas tecnológicas para impulsar el crecimiento y la transformación digital.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#09090B] py-32 text-white"
    >
      <Container>
        <Reveal>
          <div className="text-center">
            <span className="text-blue-400 font-semibold uppercase tracking-[0.3em]">
              Servicios
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Soluciones tecnológicas para empresas
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Ayudamos a empresas a crecer mediante software,
              inteligencia artificial y automatización.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10">
                <div className="mb-6 inline-flex rounded-2xl bg-blue-600/10 p-4 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}