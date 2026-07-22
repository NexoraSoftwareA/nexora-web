export default function BackgroundGlow() {
  return (
    <>
      {/* Luz superior izquierda */}
      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Luz derecha */}
      <div className="absolute right-[-120px] top-[180px] h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Luz inferior */}
      <div className="absolute bottom-[-180px] left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Cuadrícula */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}