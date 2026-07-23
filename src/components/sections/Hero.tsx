import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Dashboard from "@/components/dashboard/Dashboard";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import AnimatedGrid from "@/components/ui/AnimatedGrid";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
    >

      {/* Glow de fondo */}
      <BackgroundGlow />

      {/* Grid animado */}
      <AnimatedGrid />


      <Container
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          pt-28
          pb-16
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-16
            lg:grid-cols-2
          "
        >


          {/* Texto */}

          <div
            className="
              max-w-2xl
              animate-[fadeIn_1s_ease]
            "
          >

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-blue-500/30
                bg-blue-500/10
                px-5
                py-2
                text-sm
                font-medium
                text-blue-400
              "
            >
              Desarrollo • IA • Automatización
            </span>


            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[1.05]
                tracking-tight
                sm:text-6xl
                lg:text-7xl
                text-white
              "
            >
              Construimos el software que impulsa empresas.
            </h1>


            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-gray-400
                sm:text-xl
              "
            >
              Desarrollamos software, inteligencia artificial y automatización
              para empresas que buscan crecer más rápido.
            </p>


            <div
              className="
                mt-10
                space-y-4
                text-gray-300
              "
            >

              <Feature text="Software desarrollado a medida" />

              <Feature text="Automatización inteligente de procesos" />

              <Feature text="Implementación de Inteligencia Artificial" />

            </div>



            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-5
              "
            >

              <Button href="#contacto">
                Solicitar cotización
              </Button>


              <Button
                href="#proyectos"
                variant="secondary"
              >
                Ver proyectos
              </Button>

            </div>


          </div>



          {/* Dashboard */}

          <div
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >

            <div
              className="
                absolute
                h-[450px]
                w-[450px]
                rounded-full
                bg-blue-600/20
                blur-[160px]
                sm:h-[550px]
                sm:w-[550px]
              "
            />


            <div
              className="
                relative
                w-full
                max-w-[560px]
              "
            >

              <Dashboard />

            </div>


          </div>


        </div>


      </Container>


    </section>
  );
}



function Feature({
  text,
}: {
  text: string;
}) {

  return (
    <div className="flex items-center gap-3">

      <span className="text-xl text-blue-400">
        ✓
      </span>


      <span>
        {text}
      </span>

    </div>
  );
}