export default function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-4 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white shadow-lg shadow-blue-600/20",

    secondary:
      "border border-gray-700 hover:border-blue-500 hover:bg-white/5",
  };

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}