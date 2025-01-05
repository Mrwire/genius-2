interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative w-10 h-10 focus:outline-none group"
      aria-label="Toggle menu"
    >
      {/* Button Background */}
      <div className="
        absolute inset-0 rounded-full
        transition-colors duration-300
        group-hover:bg-white/5
      " />

      {/* Menu Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className={`
          block w-6 h-0.5 bg-white rounded-full
          transition-all duration-300
          ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}
        `} />
        <span className={`
          block w-6 h-0.5 bg-white rounded-full my-0.5
          transition-all duration-300
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `} />
        <span className={`
          block w-6 h-0.5 bg-white rounded-full
          transition-all duration-300
          ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}
        `} />
      </div>

      {/* Hover Effect */}
      <div className="
        absolute inset-0 rounded-full
        bg-gradient-to-r from-blue-500/20 to-purple-500/20
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        animate-pulse
      " />
    </button>
  );
}