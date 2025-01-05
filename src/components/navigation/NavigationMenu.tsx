import { type ComponentProps } from 'react';
import { menuItems } from './constants';

interface NavigationMenuProps extends ComponentProps<'div'> {}

export default function NavigationMenu({ className = '', ...props }: NavigationMenuProps) {
  return (
    <div className={`items-center space-x-8 ${className}`} {...props}>
      {menuItems.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="
            relative text-base text-white/90 hover:text-white 
            transition-all duration-300 group overflow-hidden
            px-4 py-2 rounded-lg hover:bg-white/5
          "
        >
          {label}
          <span className="
            absolute bottom-0 left-0 w-full h-0.5
            bg-gradient-to-r from-blue-400 to-purple-400
            transform scale-x-0 group-hover:scale-x-100
            transition-transform duration-300 origin-left
          " />
        </a>
      ))}
    </div>
  );
}