export default function SplineLoader() {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full" />
      </div>
    </div>
  );
}