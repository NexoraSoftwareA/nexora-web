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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-lg font-black text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            N
          </div>

          <div>
            <h1 className="text-xl font-black tracking-widest text-white">
              NEXORA
            </h1>

            <p className="text-xs text-gray-400">
              Software • IA • Automatización
            </p>
          </div>
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 transition duration-300 hover:text-white"
            >
              <span className="after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Botón escritorio */}
        <div className="hidden md:block">
          <Button href="#contacto">
            Solicitar cotización
          </Button>
        </div>

        {/* Menú móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </Container>

      {/* Menú móvil */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-2xl md:hidden">
          <Container>
            <nav className="flex flex-col gap-6 py-8">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-300 transition hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2">
                <Button href="#contacto">
                  Solicitar cotización
                </Button>
              </div>

            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}