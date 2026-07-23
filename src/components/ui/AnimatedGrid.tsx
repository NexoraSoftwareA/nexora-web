export default function AnimatedGrid() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        -z-10
        opacity-[0.045]
      "
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,.18) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255,255,255,.18) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "60px 60px",
        animation: "gridMove 18s linear infinite",
      }}
    />
  );
}
