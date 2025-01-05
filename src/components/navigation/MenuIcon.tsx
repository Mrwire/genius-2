interface MenuIconProps {
  isOpen: boolean;
}

export default function MenuIcon({ isOpen }: MenuIconProps) {
  return (
    <div className="w-6 h-5 relative">
      <span className={`
        absolute left-0 w-full h-0.5 bg-white
        transition-all duration-300
        ${isOpen ? 'top-2 rotate-45' : 'top-0'}
      `} />
      <span className={`
        absolute left-0 top-2 w-full h-0.5 bg-white
        transition-opacity duration-300
        ${isOpen ? 'opacity-0' : 'opacity-100'}
      `} />
      <span className={`
        absolute left-0 w-full h-0.5 bg-white
        transition-all duration-300
        ${isOpen ? 'top-2 -rotate-45' : 'top-4'}
      `} />
    </div>
  );
}