import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (uaText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('pozdni_lang');
    return (saved === 'en' || saved === 'ua') ? saved : 'ua';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('pozdni_lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'ua' ? 'en' : 'ua');
  };

  const t = (uaText: string, enText: string) => {
    return lang === 'ua' ? uaText : enText;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
