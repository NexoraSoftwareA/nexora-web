import { Search, PenTool, Code2, Rocket } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";


const steps = [
  {
    icon: <Search size={32} />,
    title: "Descubrimiento",
    description:
      "Analizamos tu empresa, entendemos tus objetivos y detectamos oportunidades de mejora.",
  },

  {
    icon: <PenTool size={32} />,
    title: "Diseño",
    description:
      "Diseñamos la arquitectura y la experiencia del sistema antes de escribir una sola línea de código.",
  },

  {
    icon: <Code2 size={32} />,
    title: "Desarrollo",
    description:
      "Construimos una solución moderna, rápida y escalable utilizando tecnologías de última generación.",
  },

  {
    icon: <Rocket size={32} />,
    title: "Implementación",
    description:
      "Ponemos el proyecto en producción y acompañamos a tu empresa durante el crecimiento.",
  },
];


export default function Process() {

  return (

    <section
      id="proceso"
      className="
        relative
        py-24
      "
    >

      <Container>


        <Reveal>

          <div className="text-center">


            <span
              className="
                uppercase
                tracking-[0.3em]
                font-semibold
                text-blue-400
              "
            >
              Nuestro proceso
            </span>



            <h2
              className="
                mt-4
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
                mt-6
                max-w-2xl
                text-lg
                text-gray-400
                leading-8
              "
            >
              Seguimos una metodología clara para entregar soluciones
              tecnológicas de alta calidad.
            </p>


          </div>


        </Reveal>





        <div className="relative mt-24">


          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-blue-500/60
              to-transparent
              lg:block
            "
          />




          <div
            className="
              grid
              gap-10
              lg:grid-cols-4
            "
          >


            {steps.map((step) => (

              <Reveal
                key={step.title}
              >


                <div
                  className="
                    relative
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-blue-500
                  "
                >



                  <div
                    className="
                      mx-auto
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-600
                      text-white
                      shadow-lg
                      shadow-blue-500/30
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
                      mt-5
                      text-center
                      leading-8
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