'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import fr from '@/translation/fr.json';
import nl from '@/translation/nl.json';

type Lang = 'fr' | 'nl';
type Translations = typeof fr;

type LanguageContextValue = {
  language: Lang;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang');
      if (saved === 'fr' || saved === 'nl') return saved;
    }
    return 'fr';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const t = language === 'fr' ? fr : nl;
  const toggleLanguage = () => setLanguage((l) => (l === 'fr' ? 'nl' : 'fr'));

  return (
    <LanguageContext.Provider
      value={{ language, t, toggleLanguage, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
