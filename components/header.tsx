'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from './providers/language-provider';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { language, t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="ml-4 cursor-pointer">
          <Button
            onClick={toggleLanguage}
            className="bg-green-600 text-xl hover:bg-primary/90 text-primary-foreground mr-4 cursor-pointer"
          >
            {language === 'fr' ? 'NL' : 'FR'}
          </Button>

          <a href="#">
            <span className="text-xl font-bold text-foreground">Find ATM</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.home}
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.security}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center space-x-1">
          <ThemeToggle />

          {/* Hamburger Menu Button for Mobile */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          <Button className="bg-green-600 hover:bg-primary/90 text-primary-foreground mr-4 hidden md:inline-flex">
            {t.cta.download}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                {t.nav.home}
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                {t.nav.security}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={toggleMenu}
              >
                {t.nav.contact}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
