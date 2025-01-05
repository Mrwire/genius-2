export default function BackgroundG() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
      <div className="relative w-[80vh] h-[80vh] text-white/[0.02] font-black">
        <span className="absolute inset-0 flex items-center justify-center text-[80vh]">
          G
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>
    </div>
  );
}