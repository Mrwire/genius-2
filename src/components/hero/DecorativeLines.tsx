export default function DecorativeLines() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Top right curve */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] border-t-2 border-r-2 border-white/10 rounded-tr-[100px]" />
      
      {/* Bottom left curve */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] border-b-2 border-l-2 border-white/10 rounded-bl-[60px]" />
      
      {/* Additional decorative lines */}
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[1px] bg-white/10 transform -rotate-45" />
      <div className="absolute bottom-[30%] left-[5%] w-[15%] h-[1px] bg-white/10 transform rotate-45" />
    </div>
  );
}