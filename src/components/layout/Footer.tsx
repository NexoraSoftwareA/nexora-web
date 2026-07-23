import Container from "@/components/ui/Container";


export default function Footer() {

  return (

    <footer
      className="
        relative
        border-t
        border-white/10
        py-12
      "
    >


      <Container>


        <div
          className="
            grid
            gap-10
            md:grid-cols-3
          "
        >



          {/* Marca */}


          <div>


            <h2
              className="
                text-3xl
                font-black
                tracking-widest
                text-white
              "
            >
              NEXORA
            </h2>




            <p
              className="
                mt-4
                max-w-xs
                leading-7
                text-gray-500
              "
            >
              Tecnología que impulsa empresas mediante software,
              inteligencia artificial y automatización.
            </p>


          </div>







          {/* Navegación */}



          <div>


            <h3
              className="
                mb-5
                font-bold
                text-white
              "
            >
              Navegación
            </h3>



            <div
              className="
                flex
                flex-col
                gap-3
                text-gray-400
              "
            >


              <a
                href="#inicio"
                className="transition hover:text-blue-400"
              >
                Inicio
              </a>



              <a
                href="#servicios"
                className="transition hover:text-blue-400"
              >
                Servicios
              </a>



              <a
                href="#proyectos"
                className="transition hover:text-blue-400"
              >
                Proyectos
              </a>



              <a
                href="#contacto"
                className="transition hover:text-blue-400"
              >
                Contacto
              </a>


            </div>


          </div>








          {/* Servicios */}




          <div>


            <h3
              className="
                mb-5
                font-bold
                text-white
              "
            >
              Servicios
            </h3>




            <div
              className="
                flex
                flex-col
                gap-3
                text-gray-400
              "
            >


              <span>
                Desarrollo de software
              </span>


              <span>
                Inteligencia Artificial
              </span>


              <span>
                Automatización empresarial
              </span>


              <span>
                Soluciones Cloud
              </span>


            </div>


          </div>



        </div>







        {/* Copyright */}



        <div
          className="
            mt-12
            border-t
            border-white/10
            pt-8
            text-center
            text-sm
            text-gray-500
          "
        >

          © 2026 NEXORA. Todos los derechos reservados.

        </div>



      </Container>


    </footer>

  );

}