'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from './providers/language-provider';

export function Header() {
  const { language, t, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="ml-4 cursor-pointer">
          <Button
            onClick={toggleLanguage}
            className="bg-green-600 text-xl hover:bg-primary/90 text-primary-foreground mr-4 curor-pointer"
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
          <Button className="bg-green-600 hover:bg-primary/90 text-primary-foreground mr-4">
            {t.cta.download}
          </Button>
        </div>
      </div>
    </header>
  );
}
