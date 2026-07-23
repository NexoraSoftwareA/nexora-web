import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";


export default function CTA() {

  return (

    <section
      className="
        relative
        overflow-hidden
        py-24
      "
    >


      {/* Glow de fondo */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-600/20
          blur-[160px]
        "
      />



      <Container
        className="
          relative
          z-10
        "
      >


        <Reveal>


          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-gradient-to-br
              from-white/10
              to-white/5
              p-8
              text-center
              backdrop-blur-2xl
              sm:p-12
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
              ¿Listo para comenzar?
            </span>





            <h2
              className="
                mt-6
                text-4xl
                font-black
                text-white
                sm:text-5xl
              "
            >
              Transformemos tu idea en tecnología.
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
              Diseñamos software, inteligencia artificial y automatizaciones
              que ayudan a empresas a crecer, optimizar procesos y competir
              en un mundo digital.
            </p>





            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
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


        </Reveal>


      </Container>


    </section>

  );

}