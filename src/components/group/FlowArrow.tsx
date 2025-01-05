interface FlowArrowProps {
  from: string;
  to: string;
  isVisible: boolean;
}

export default function FlowArrow({ isVisible }: FlowArrowProps) {
  return (
    <div className={`
      flow-arrow absolute top-0 left-1/2
      w-[2px] h-[100px] -translate-x-1/2 -translate-y-full
      transition-all duration-1000
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}>
      {/* Arrow Line */}
      <div className="
        absolute inset-0
        bg-gradient-to-b from-white/50 to-white/30
      ">
        {/* Glow Effect */}
        <div className="
          absolute inset-0
          bg-white/20
          animate-[glowPulse_4s_ease-in-out_infinite]
        " />
      </div>

      {/* Arrow Head */}
      <div className="
        absolute -bottom-2 left-1/2 -translate-x-1/2
        w-4 h-4 border-r-2 border-b-2 border-white
        rotate-45 transform origin-center
        shadow-[0_0_10px_rgba(255,255,255,0.7)]
        animate-[arrowPulse_2s_ease-in-out_infinite]
      " />
    </div>
  );
}