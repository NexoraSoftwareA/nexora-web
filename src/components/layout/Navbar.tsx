"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

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

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="text-2xl font-black tracking-widest text-white"
        >
          <span className="text-blue-500">◈</span> NEXORA
        </a>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón escritorio */}
        <div className="hidden md:block">
          <Button href="#contacto">Cotizar</Button>
        </div>

        {/* Botón móvil */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
          <nav className="flex flex-col p-6 gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            <Button href="#contacto">Cotizar</Button>
          </nav>
        </div>
      )}
    </header>
  );
}