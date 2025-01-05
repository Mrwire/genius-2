import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Navigation from './Navigation';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll > lastScroll && currentScroll > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScroll = currentScroll;

      setIsScrolled(currentScroll > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-500 ease-out
      ${isScrolled ? 'py-2' : 'py-6'}
      ${isHidden ? '-translate-y-full' : 'translate-y-0'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          relative flex items-center justify-between
          ${isScrolled ? 'bg-white/5 backdrop-blur-xl rounded-full px-6 py-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : ''}
          transition-all duration-500
        `}>
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}