import { useEffect } from 'react';
import { menuItems } from './constants';
import { X } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`
      lg:hidden fixed inset-0 bg-background/95 backdrop-blur-md
      transition-all duration-300 z-50
      ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors"
        aria-label="Close menu"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Menu Items */}
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        {menuItems.map(({ href, label }, index) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className={`
              text-xl font-medium text-white/80 hover:text-white
              transition-all duration-300 transform
              ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}