'use client';
import { createContext, useContext, useState } from 'react';
import fr from './fr.json';
import nl from './nl.json';

// Create context
const LanguageContext = createContext();

// Custom hook to access the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// LanguageProvider component to wrap around parts of the app that need language access
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');
  const translations = language === 'fr' ? fr : nl;

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'fr' ? 'nl' : 'fr'));
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
