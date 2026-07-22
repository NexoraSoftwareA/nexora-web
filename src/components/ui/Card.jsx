export default function Card({ children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 transition-all duration-300 hover:border-blue-500 hover:-translate-y-2">
      {children}
    </div>
  );
}