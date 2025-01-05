export default function SplineLoader() {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full" />
        
        {/* Spinning ring */}
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
      </div>
    </div>
  );
}