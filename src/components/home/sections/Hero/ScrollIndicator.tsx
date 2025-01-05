export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 md:bottom-10 left-6 md:left-[5vw] z-30 flex flex-col items-start gap-2">
      <span className="font-montserrat text-sm uppercase tracking-[2px] text-white">
        Scroll
      </span>
      <div className="relative w-px h-[50px] bg-white/30 overflow-hidden">
        <div className="absolute inset-0 bg-white animate-scrollDown" />
      </div>
    </div>
  );
}