import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {

  const base =
    "group inline-flex items-center justify-center rounded-2xl px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-cyan-400 hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]}`}
    >
      {children}

      <ArrowRight
        size={18}
        className="
          ml-2
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </Link>
  );
}