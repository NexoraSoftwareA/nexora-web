"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-3xl shadow-2xl"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <div
          className="
            flex
            h-24
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <a
            href="#inicio"
            className="
              group
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-600
                to-cyan-400
                text-xl
                font-black
                text-white
                shadow-lg
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              N
            </div>

            <div>
              <h1
                className="
                  text-2xl
                  font-black
                  tracking-[0.22em]
                  text-white
                "
              >
                NEXORA
              </h1>

              <p
                className="
                  mt-1
                  text-xs
                  tracking-[0.22em]
                  text-gray-400
                "
              >
                SOFTWARE • IA • AUTOMATIZACIÓN
              </p>
            </div>
          </a>

          {/* Navegación */}
          <nav
            className="
              hidden
              items-center
              gap-12
              lg:flex
            "
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-[15px]
                  font-medium
                  tracking-wide
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:text-white
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón */}
          <div className="hidden lg:block">
            <Button href="#contacto">
              Solicitar cotización
            </Button>
          </div>

          {/* Menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              transition
              hover:bg-white/10
              lg:hidden
            "
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div
          className="
            border-t
            border-white/10
            bg-black/95
            backdrop-blur-3xl
            lg:hidden
          "
        >
          <Container>
            <nav
              className="
                flex
                flex-col
                gap-8
                py-8
              "
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-lg
                    text-gray-300
                    transition
                    hover:text-cyan-400
                  "
                >
                  {link.name}
                </a>
              ))}

              <Button href="#contacto">
                Solicitar cotización
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}