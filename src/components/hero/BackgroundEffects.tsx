export default function BackgroundEffects() {
  return (
    <>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-[#0A0A0A]" />
      
      {/* Grid overlay */}
      <div className="
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
        bg-[size:50px_50px]
        [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]
      " />

      {/* Geometric lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] border-t-2 border-r-2 border-white/10 rounded-tr-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] border-b-2 border-l-2 border-white/10 rounded-bl-[60px]" />
      </div>
    </>
  );
}