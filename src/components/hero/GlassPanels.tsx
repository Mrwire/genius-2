export default function GlassPanels() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[40vw] h-[40vh] rounded-3xl bg-white/5 backdrop-blur-md"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
            transform: `rotate(${i * 15}deg)`,
            animation: `float ${6 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        </div>
      ))}
    </div>
  );
}