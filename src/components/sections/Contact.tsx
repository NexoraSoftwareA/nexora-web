"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/constants/site";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";


export default function Contact() {


  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });



  const handleSubmit = (e: FormEvent) => {

    e.preventDefault();


    const subject = encodeURIComponent(
      `Nueva solicitud de ${form.name}`
    );


    const body = encodeURIComponent(`
Nombre: ${form.name}

Correo: ${form.email}

Empresa: ${form.company}

Mensaje:
${form.message}
    `);



    window.location.href =
      `mailto:${SITE.email}?subject=${subject}&body=${body}`;

  };



  return (

    <section
      id="contacto"
      className="
        relative
        py-24
      "
    >


      <Container>


        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:items-center
          "
        >



          {/* Información */}


          <Reveal>


            <div>


              <span
                className="
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                  font-semibold
                "
              >
                Contacto
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
                Hablemos de tu proyecto
              </h2>





              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-gray-400
                "
              >
                Estamos listos para crear software, inteligencia artificial
                y automatizaciones que ayuden a tu empresa a crecer.
              </p>





              <div
                className="
                  mt-10
                  space-y-6
                "
              >


                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400" />
                  <span>
                    {SITE.email}
                  </span>
                </div>



                <div className="flex items-center gap-4">
                  <Phone className="text-blue-400" />
                  <span>
                    {SITE.phone}
                  </span>
                </div>



                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-400" />
                  <span>
                    {SITE.location}
                  </span>
                </div>


              </div>


            </div>


          </Reveal>







          {/* Formulario */}



          <Reveal>


            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-white/10
                to-white/5
                p-8
                backdrop-blur-xl
              "
            >



              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >



                <input
                  required
                  aria-label="Nombre"
                  autoComplete="name"
                  placeholder="Nombre"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    text-white
                    outline-none
                    focus:border-blue-500
                  "
                />




                <input
                  required
                  type="email"
                  aria-label="Correo"
                  autoComplete="email"
                  placeholder="Correo"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    text-white
                    outline-none
                    focus:border-blue-500
                  "
                />





                <input
                  placeholder="Empresa"
                  aria-label="Empresa"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      company: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    text-white
                    outline-none
                    focus:border-blue-500
                  "
                />





                <textarea
                  required
                  rows={6}
                  placeholder="Cuéntanos tu proyecto..."
                  aria-label="Cuéntanos tu proyecto"
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    text-white
                    outline-none
                    focus:border-blue-500
                  "
                />





                <button
                  type="submit"
                  className="
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:scale-[1.02]
                  "
                >
                  Enviar solicitud
                </button>



              </form>



            </div>


          </Reveal>



        </div>


      </Container>


    </section>

  );

}
