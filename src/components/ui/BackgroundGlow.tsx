export default function BackgroundGlow() {
  return (
    <>
      {/* Luz superior izquierda */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-600/10
          blur-[160px]
        "
      />


      {/* Luz derecha */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[180px]
          -z-10
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />


      {/* Luz inferior */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-1/2
          -z-10
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />
    </>
  );
}