import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";


const projects = [

  {
    title: "NEXORA ERP",
    category: "Software Empresarial",
    description:
      "Sistema integral para gestionar ventas, inventario, compras, facturación y reportes empresariales en tiempo real.",
    image:
      "linear-gradient(135deg,#2563eb,#06b6d4)",
    tech: ["Next.js", "React", "PostgreSQL"],
  },


  {
    title: "CRM Inteligente",
    category: "Automatización con IA",
    description:
      "Plataforma comercial con inteligencia artificial para gestionar clientes, ventas y automatizar procesos.",
    image:
      "linear-gradient(135deg,#7c3aed,#2563eb)",
    tech: ["AI", "Node.js", "OpenAI"],
  },


  {
    title: "Dashboard Analytics",
    category: "Business Intelligence",
    description:
      "Panel ejecutivo con indicadores en tiempo real para analizar datos y mejorar decisiones empresariales.",
    image:
      "linear-gradient(135deg,#0891b2,#1d4ed8)",
    tech: ["Power BI", "React", "API"],
  },

];




export default function Projects() {

  return (

    <section
      id="proyectos"
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
                text-cyan-400
                font-semibold
              "
            >
              Proyectos
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
              Casos destacados
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
              Soluciones tecnológicas creadas para impulsar empresas mediante
              software, inteligencia artificial y automatización.
            </p>


          </div>


        </Reveal>





        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-3
          "
        >



          {projects.map((project) => (


            <Reveal
              key={project.title}
            >


              <article
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_60px_rgba(34,211,238,.18)]
                "
              >



                {/* Imagen */}

                <div
                  className="
                    relative
                    h-60
                    overflow-hidden
                  "
                  style={{
                    background: project.image,
                  }}
                >


                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/20
                      transition
                      duration-500
                      group-hover:bg-black/5
                    "
                  />



                  <div
                    className="
                      absolute
                      bottom-6
                      left-6
                      rounded-full
                      bg-white/10
                      px-4
                      py-2
                      text-sm
                      backdrop-blur-md
                      text-white
                    "
                  >

                    {project.category}

                  </div>


                </div>





                {/* Contenido */}

                <div
                  className="
                    p-8
                  "
                >



                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-white
                    "
                  >

                    {project.title}

                  </h3>





                  <p
                    className="
                      mt-5
                      leading-8
                      text-gray-400
                    "
                  >

                    {project.description}

                  </p>





                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                    "
                  >


                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-cyan-500/20
                          bg-cyan-500/10
                          px-3
                          py-1
                          text-sm
                          text-cyan-300
                        "
                      >

                        {tech}

                      </span>

                    ))}


                  </div>





                  <button
                    aria-label={`Explorar ${project.title}`}
                    className="
                      mt-8
                      flex
                      items-center
                      gap-2
                      font-semibold
                      text-cyan-400
                      transition-all
                      duration-300
                      group-hover:gap-4
                    "
                  >

                    Explorar solución

                    <ArrowUpRight size={18}/>

                  </button>



                </div>



              </article>


            </Reveal>


          ))}



        </div>


      </Container>


    </section>

  );

}