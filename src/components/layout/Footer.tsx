import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12">
      <Container>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div>

            <h2 className="text-3xl font-black text-white">
              NEXORA
            </h2>

            <p className="mt-3 text-gray-500">
              Tecnología que impulsa tu negocio.
            </p>

          </div>

          <div className="flex gap-8 text-gray-400">

            <a href="#inicio" className="hover:text-blue-400">
              Inicio
            </a>

            <a href="#servicios" className="hover:text-blue-400">
              Servicios
            </a>

            <a href="#proyectos" className="hover:text-blue-400">
              Proyectos
            </a>

            <a href="#contacto" className="hover:text-blue-400">
              Contacto
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © 2026 NEXORA. Todos los derechos reservados.
        </div>

      </Container>
    </footer>
  );
}