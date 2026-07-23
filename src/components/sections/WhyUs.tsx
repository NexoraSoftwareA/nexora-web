import {
  ShieldCheck,
  Rocket,
  Clock3,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";


const features: {
  icon: React.ElementType;
  title: string;
  description: string;
}[] = [

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

    <section
      id="porque"
      className="
        relative
        py-24
      "
    >

      <Container>


        <Reveal>

          <div
            className="
              text-center
            "
          >

            <span
              className="
                uppercase
                tracking-[0.35em]
                text-blue-400
                font-semibold
              "
            >
              ¿POR QUÉ NEXORA?
            </span>




            <h2
              className="
                mt-5
                text-4xl
                font-black
                text-white
                sm:text-5xl
              "
            >
              Tecnología diseñada para hacer crecer tu empresa
            </h2>




            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                leading-8
                text-gray-400
              "
            >
              No solo desarrollamos software. Creamos herramientas que ayudan
              a vender más, automatizar procesos y mejorar la productividad.
            </p>


          </div>


        </Reveal>





        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
          "
        >



          {features.map((item) => {

            const Icon = item.icon;


            return (

              <Reveal
                key={item.title}
              >


                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-blue-500/50
                    hover:bg-white/10
                    hover:shadow-[0_0_40px_rgba(37,99,235,.15)]
                  "
                >



                  <div
                    className="
                      mb-6
                      inline-flex
                      rounded-2xl
                      bg-blue-600/10
                      p-4
                    "
                  >

                    <Icon
                      className="
                        h-8
                        w-8
                        text-blue-400
                      "
                    />

                  </div>





                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>





                  <p
                    className="
                      mt-4
                      leading-8
                      text-gray-400
                    "
                  >
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