import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section
      id="contacto"
      className="py-32 bg-gradient-to-b from-[#09090B] to-[#050505]"
    >
      <Container>
        <Reveal>
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl">

            <span className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
              HABLEMOS
            </span>

            <h2 className="mt-6 text-5xl font-black">
              ¿Listo para llevar tu empresa al siguiente nivel?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
              Desarrollamos software, inteligencia artificial y automatización
              para empresas que quieren crecer.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="https://wa.me/573209418700">
                WhatsApp
              </Button>

              <Button
                href="mailto:alejandro@nexora.com"
                variant="secondary"
              >
                Correo
              </Button>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
}