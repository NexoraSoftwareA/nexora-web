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

    <section
      id="tecnologias"
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
              Tecnologías
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
              Construimos con tecnología de vanguardia
            </h2>





            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-gray-400
              "
            >
              Utilizamos herramientas modernas para crear soluciones
              rápidas, escalables y preparadas para el futuro.
            </p>



          </div>


        </Reveal>






        <div
          className="
            mt-16
            flex
            flex-wrap
            justify-center
            gap-5
          "
        >




          {technologies.map((tech) => (


            <Reveal
              key={tech}
            >


              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-5
                  text-lg
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
                "
              >

                {tech}

              </div>


            </Reveal>


          ))}




        </div>



      </Container>


    </section>

  );

}