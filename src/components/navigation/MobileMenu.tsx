import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

  return createPortal(
    <div className={`
      fixed inset-0 z-40
      transition-all duration-500 ease-out
      ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" />

      {/* Content */}
      <nav className="relative h-full flex flex-col items-center justify-center">
        <div className="space-y-8">
          {['Portfolio', 'Contact'].map((item) => (
            <div key={item} className="text-center">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={onClose}
                className="
                  relative inline-block text-3xl text-white/80
                  transition-all duration-300
                  hover:text-white hover:scale-110
                  after:absolute after:left-0 after:bottom-0
                  after:w-full after:h-px
                  after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
                  after:origin-center after:scale-x-0
                  hover:after:scale-x-100 after:transition-transform after:duration-300
                "
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>,
    document.body
  );
}