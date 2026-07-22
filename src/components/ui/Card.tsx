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
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/60
        hover:shadow-2xl
        hover:shadow-blue-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}