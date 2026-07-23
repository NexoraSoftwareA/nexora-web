import Container from "@/components/ui/Container";
import {
  Globe,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040404] text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-black tracking-widest">
              NEXORA
            </h2>

            <p className="mt-5 max-w-sm leading-8 text-gray-400">
              Tecnología que impulsa tu negocio mediante desarrollo de
              software, inteligencia artificial y automatización.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-5 font-bold">
              Navegación
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#inicio" className="transition hover:text-white">
                Inicio
              </a>

              <a href="#servicios" className="transition hover:text-white">
                Servicios
              </a>

              <a href="#proyectos" className="transition hover:text-white">
                Proyectos
              </a>

              <a href="#contacto" className="transition hover:text-white">
                Contacto
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-5 font-bold">
              Contacto
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-blue-400" />
                <span>www.nexora.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400" />
                <span>contacto@nexora.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400" />
                <span>+57 300 000 0000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NEXORA. Todos los derechos reservados.
          </p>

          <a
            href="#inicio"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:border-blue-500 hover:bg-blue-500/20"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </Container>
    </footer>
  );
}