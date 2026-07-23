import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:bg-white/10
        hover:shadow-[0_0_60px_rgba(34,211,238,.12)]
        ${className}
      `}
    >
      {/* Brillo */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md animate-[shine_1.2s_linear]" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}