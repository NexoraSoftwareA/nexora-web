import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Dashboard from "@/components/dashboard/Dashboard";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import AnimatedGrid from "@/components/ui/AnimatedGrid";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        overflow-hidden
      "
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
          py-32
          lg:py-40
          px-6
          xl:px-10
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-20
            xl:gap-24
            lg:grid-cols-[1.05fr_.95fr]
          "
        >
          {/* Texto */}

          <div
            className="
              mx-auto
              w-full
              max-w-[620px]
              pl-2
              sm:pl-6
              lg:pl-10
              xl:pl-14
              animate-[fadeIn_1s_ease]
            "
          >
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-6
                py-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-cyan-300
              "
            >
              Desarrollo • IA • Automatización
            </span>

            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[1.08]
                tracking-[-0.03em]
                text-white
                sm:text-6xl
                xl:text-7xl
              "
            >
              Construimos el software que impulsa empresas.
            </h1>

            <p
              className="
                mt-8
                max-w-[560px]
                text-xl
                leading-10
                text-gray-300
              "
            >
              Desarrollamos software, inteligencia artificial y automatización
              para empresas que buscan crecer más rápido, optimizando procesos y
              acelerando su crecimiento mediante tecnología de última generación.
            </p>

            <div
              className="
                mt-14
                space-y-7
              "
            >
              <Feature text="Software desarrollado a medida" />

              <Feature text="Automatización inteligente de procesos" />

              <Feature text="Implementación de Inteligencia Artificial" />
            </div>

            <div
              className="
                mt-16
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
              lg:pl-8
            "
          >
            <div
              className="
                absolute
                h-[620px]
                w-[620px]
                rounded-full
                bg-cyan-500/20
                blur-[220px]
              "
            />

            <div
              className="
                absolute
                -top-8
                -right-6
                h-40
                w-40
                rounded-full
                border
                border-cyan-400/10
                bg-cyan-400/5
                blur-3xl
              "
            />

            <div
              className="
                relative
                w-full
                max-w-[620px]
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
    <div
      className="
        flex
        items-center
        gap-4
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-cyan-500/10
          text-cyan-400
          font-bold
        "
      >
        ✓
      </span>

      <span
        className="
          text-[18px]
          leading-8
          text-gray-200
        "
      >
        {text}
      </span>
    </div>
  );
}