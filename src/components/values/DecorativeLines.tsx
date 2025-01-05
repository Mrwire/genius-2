export default function DecorativeLines() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Horizontal lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Vertical lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </div>
  );
}