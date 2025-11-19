
'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`fixed bottom-4 right-2  sm:bottom-6 sm:right-6 z-40 w-12 h-12 group bg-linear-to-br from-mest-amber-6 to-mest-amber-7 hover:from-mest-amber-7 hover:to-mest-amber-8 text-white shadow-lg hover:shadow-xl hover:shadow-mest-amber-6/30 transition-all duration-300 rounded-full ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
      
      {/* Glow Effect */}
      <span className="absolute inset-0 rounded-full bg-mest-amber-6 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
    </Button>
  );
}