import { useState } from 'react';
import { Menu } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
import MobileNavigation from './MobileNavigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300 group"
        aria-label="Toggle menu"
      >
        <Menu className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
      </button>

      {/* Mobile Navigation */}
      <MobileNavigation isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}