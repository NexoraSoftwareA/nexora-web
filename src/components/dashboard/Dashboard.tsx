"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import {
  TrendingUp,
  Bot,
  Cpu,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function Dashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-[580px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-gradient-to-br
        from-white/10
        to-white/5
        p-5
        sm:p-7
        backdrop-blur-2xl
        shadow-2xl
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-blue-500/20
          blur-[130px]
        "
      />

      {/* Header */}
      <div className="relative flex items-center justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.15em] uppercase text-gray-400">
            Dashboard empresarial
          </p>

          <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
            NEXORA Analytics
          </h2>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-green-500/20
            bg-green-500/10
            px-3
            py-2
            text-xs
            font-semibold
            text-green-400
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
          Online
        </div>
      </div>

      {/* Cards */}
      <div className="relative mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        <Card
          icon={<Bot size={26} />}
          title="IA Activas"
          value="32"
        />

        <Card
          icon={<Cpu size={26} />}
          title="Procesos"
          value="120+"
        />

        <Card
          icon={<ShieldCheck size={26} />}
          title="Seguridad"
          value="99.9%"
        />

        <Card
          icon={<Activity size={26} />}
          title="Clientes"
          value="50+"
        />
      </div>

      {/* Chart */}
      <div
        className="
          mt-6
          rounded-2xl
          border
          border-white/10
          bg-black/20
          p-5
        "
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm tracking-wide text-gray-400">
              Rendimiento IA
            </p>

            <h3 className="mt-1 text-3xl font-black text-white">
              +28%
            </h3>
          </div>

          <TrendingUp
            className="text-green-400"
            size={30}
          />
        </div>

        <svg
          viewBox="0 0 320 120"
          className="h-28 w-full sm:h-32"
          fill="none"
        >
          <path
            d="M0 95 C40 82 70 70 100 75 S170 35 220 42 S280 20 320 18"
            stroke="#22D3EE"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <circle
            cx="320"
            cy="18"
            r="5"
            fill="#22D3EE"
          />
        </svg>
      </div>

      {/* Activity */}
      <div
        className="
          mt-5
          rounded-2xl
          border
          border-white/10
          bg-black/20
          p-5
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm tracking-wide text-gray-400">
              Última actividad
            </p>

            <h3 className="mt-2 text-sm font-semibold text-white sm:text-base">
              IA procesando solicitudes empresariales
            </h3>
          </div>

          <span
            className="
              whitespace-nowrap
              rounded-full
              bg-green-500/20
              px-3
              py-2
              text-xs
              font-semibold
              text-green-400
            "
          >
            Activo
          </span>
        </div>
      </div>
    </motion.div>
  );
}

type CardProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

function Card({
  icon,
  title,
  value,
}: CardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        sm:p-5
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-white/10
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-cyan-500/10
          text-cyan-400
        "
      >
        {icon}
      </div>

      <p className="mt-4 text-xs tracking-wide text-gray-400 sm:text-sm">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
        {value}
      </h3>
    </div>
  );
}
