import { createContext, useContext, ReactNode, useState } from 'react';

type languages = 'en' | 'de' | 'ar' | 'fa';
type LanguageContextType = [
  string,
  (language: languages) => void
]
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {

  const [lang, setLang] = useState('en');

  const toggleLanguage = (language: string) => {
      setLang(language);
  };

  return (
    <LanguageContext.Provider value={[ lang, toggleLanguage ]}>
      {children}
    </LanguageContext.Provider>
  );

};