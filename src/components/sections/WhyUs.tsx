import {
  ShieldCheck,
  Rocket,
  Clock3,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: Rocket,
    title: "Desarrollo rápido",
    description:
      "Construimos soluciones modernas con metodologías ágiles para reducir tiempos de entrega.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description:
      "Código limpio, escalable y preparado para el crecimiento de tu empresa.",
  },
  {
    icon: Clock3,
    title: "Soporte continuo",
    description:
      "Te acompañamos después del lanzamiento para asegurar el mejor rendimiento.",
  },
  {
    icon: Sparkles,
    title: "Innovación con IA",
    description:
      "Integramos inteligencia artificial para automatizar procesos y generar ventajas competitivas.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-32 bg-[#09090B]">
      <Container>

        <Reveal>
          <div className="text-center">

            <span className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
              ¿POR QUÉ NEXORA?
            </span>

            <h2 className="mt-5 text-5xl font-black">
              Tecnología diseñada para hacer crecer tu empresa
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
              No solo desarrollamos software. Creamos herramientas que ayudan
              a vender más, automatizar procesos y mejorar la productividad.
            </p>

          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-blue-500 hover:-translate-y-2">

                  <div className="mb-6 inline-flex rounded-2xl bg-blue-600/10 p-4">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {item.description}
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