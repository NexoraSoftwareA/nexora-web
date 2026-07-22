"use client";

import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-2xl shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-[100px]" />

      {/* Encabezado */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            Dashboard Empresarial
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            NEXORA Analytics
          </h2>
        </div>

        <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
          ● Online
        </div>
      </div>

      {/* Métricas */}
      <div className="relative mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-gray-400">
            Clientes
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            20+
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-gray-400">
            Proyectos
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            50+
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-gray-400">
            Automatizaciones
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            120+
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-gray-400">
            Disponibilidad
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-400">
            99.9%
          </h3>
        </div>
      </div>

      {/* Gráfica */}
      <div className="relative mt-10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">
              Rendimiento IA
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              +28%
            </h3>
          </div>

          <TrendingUp
            size={30}
            className="text-green-400"
          />
        </div>

        <svg
          viewBox="0 0 320 120"
          className="h-36 w-full"
          fill="none"
        >
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#2563EB"
              />
              <stop
                offset="100%"
                stopColor="#38BDF8"
              />
            </linearGradient>
          </defs>

          <path
            d="M0 95
               C40 80,
               70 70,
               100 72
               S170 30,
               220 40
               S280 15,
               320 20"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <circle
            cx="320"
            cy="20"
            r="5"
            fill="#38BDF8"
          />
        </svg>
      </div>

      {/* Actividad */}
      <div className="relative mt-10 rounded-2xl border border-white/10 bg-black/20 p-5">
        <p className="text-sm text-gray-400">
          Última actividad
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-white">
            IA procesando solicitudes
          </span>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
            Activo
          </span>
        </div>
      </div>
    </motion.div>
  );
}