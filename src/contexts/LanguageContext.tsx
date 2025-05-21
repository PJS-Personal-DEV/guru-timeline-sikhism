
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pa';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object with English and Punjabi translations
const translations: Record<string, Record<Language, string>> = {
  // Header
  "siteTitle": {
    "en": "Sikh History Timeline",
    "pa": "ਸਿੱਖ ਇਤਿਹਾਸ ਸਮਾਂ ਰੇਖਾ"
  },
  "siteSubtitle": {
    "en": "1469 - 2010: A Journey Through Time",
    "pa": "1469 - 2010: ਸਮੇਂ ਦੇ ਸਫ਼ਰ"
  },
  "about": {
    "en": "About",
    "pa": "ਬਾਰੇ"
  },
  "explore": {
    "en": "Explore",
    "pa": "ਖੋਜ"
  },
  
  // Hero Section
  "heroTitle": {
    "en": "The Journey of Sikhism",
    "pa": "ਸਿੱਖੀ ਦੀ ਯਾਤਰਾ"
  },
  "heroSubtitle": {
    "en": "Explore the rich history of Sikhism from 1469 to 2010 through this interactive timeline.",
    "pa": "ਇਸ ਇੰਟਰਐਕਟਿਵ ਸਮਾਂ ਰੇਖਾ ਰਾਹੀਂ 1469 ਤੋਂ 2010 ਤੱਕ ਸਿੱਖੀ ਦੇ ਅਮੀਰ ਇਤਿਹਾਸ ਦੀ ਖੋਜ ਕਰੋ।"
  },
  "exploreTimeline": {
    "en": "Explore Timeline",
    "pa": "ਸਮਾਂ ਰੇਖਾ ਦੀ ਖੋਜ ਕਰੋ"
  },
  
  // Introduction Section
  "aboutSikhHistory": {
    "en": "About Sikh History",
    "pa": "ਸਿੱਖ ਇਤਿਹਾਸ ਬਾਰੇ"
  },
  "sikhismIntro1": {
    "en": "Sikhism is a monotheistic religion founded in the Punjab region of South Asia by Guru Nanak in the late 15th century. The faith evolved and was shaped by ten successive Sikh Gurus, with the final guru being the sacred text, the Guru Granth Sahib.",
    "pa": "ਸਿੱਖੀ ਇੱਕ ਏਕੇਸ਼ਵਰਵਾਦੀ ਧਰਮ ਹੈ ਜੋ 15ਵੀਂ ਸਦੀ ਦੇ ਅੰਤ ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੁਆਰਾ ਦੱਖਣੀ ਏਸ਼ੀਆ ਦੇ ਪੰਜਾਬ ਖੇਤਰ ਵਿੱਚ ਸਥਾਪਿਤ ਕੀਤਾ ਗਿਆ ਸੀ। ਇਹ ਧਰਮ ਵਿਕਸਿਤ ਹੋਇਆ ਅਤੇ ਦਸ ਲਗਾਤਾਰ ਸਿੱਖ ਗੁਰੂਆਂ ਦੁਆਰਾ ਆਕਾਰ ਦਿੱਤਾ ਗਿਆ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਅੰਤਿਮ ਗੁਰੂ ਪਵਿੱਤਰ ਗ੍ਰੰਥ, ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਹੈ।"
  },
  "sikhismIntro2": {
    "en": "This timeline presents key events from the birth of Guru Nanak Dev Ji in 1469 through the creation of the Khalsa in 1699, the rise and fall of the Sikh Empire, the partition of India, and significant modern events up to 2010.",
    "pa": "ਇਹ ਸਮਾਂ-ਰੇਖਾ 1469 ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਜਨਮ ਤੋਂ ਲੈ ਕੇ 1699 ਵਿੱਚ ਖਾਲਸੇ ਦੀ ਸਥਾਪਨਾ, ਸਿੱਖ ਸਾਮਰਾਜ ਦੇ ਉਥਾਨ ਅਤੇ ਪਤਨ, ਭਾਰਤ ਦੀ ਵੰਡ, ਅਤੇ 2010 ਤੱਕ ਦੀਆਂ ਮਹੱਤਵਪੂਰਨ ਆਧੁਨਿਕ ਘਟਨਾਵਾਂ ਦੇ ਮੁੱਖ ਸਮਾਗਮਾਂ ਨੂੰ ਪੇਸ਼ ਕਰਦੀ ਹੈ।"
  },
  "sikhismIntro3": {
    "en": "The history of Sikhism is marked by remarkable spiritual developments, social reforms, political changes, and at times, significant struggles and sacrifices. This timeline aims to provide a comprehensive overview of these historical milestones.",
    "pa": "ਸਿੱਖੀ ਦਾ ਇਤਿਹਾਸ ਉੱਲੇਖਯੋਗ ਆਤਮਿਕ ਵਿਕਾਸ, ਸਮਾਜਿਕ ਸੁਧਾਰਾਂ, ਰਾਜਨੀਤਿਕ ਤਬਦੀਲੀਆਂ ਅਤੇ ਕਈ ਵਾਰ ਮਹੱਤਵਪੂਰਨ ਸੰਘਰਸ਼ਾਂ ਅਤੇ ਕੁਰਬਾਨੀਆਂ ਨਾਲ ਅੰਕਿਤ ਹੈ। ਇਹ ਸਮਾਂ-ਰੇਖਾ ਇਨ੍ਹਾਂ ਇਤਿਹਾਸਕ ਮੀਲ ਪੱਥਰਾਂ ਦੀ ਵਿਆਪਕ ਝਲਕ ਪ੍ਰਦਾਨ ਕਰਨ ਦਾ ਉਦੇਸ਼ ਰੱਖਦੀ ਹੈ।"
  },
  "tenGurus": {
    "en": "The Ten Gurus",
    "pa": "ਦਸ ਗੁਰੂ"
  },
  
  // Timeline Section
  "exploreTheTimeline": {
    "en": "Explore the Timeline",
    "pa": "ਸਮਾਂ ਰੇਖਾ ਦੀ ਖੋਜ ਕਰੋ"
  },
  "selectTimePeriod": {
    "en": "Select a Time Period",
    "pa": "ਇੱਕ ਸਮਾਂ ਮਿਆਦ ਚੁਣੋ"
  },
  "filterByCategory": {
    "en": "Filter by Category",
    "pa": "ਸ਼੍ਰੇਣੀ ਦੁਆਰਾ ਫਿਲਟਰ ਕਰੋ"
  },
  "customYearRange": {
    "en": "Custom Year Range",
    "pa": "ਕਸਟਮ ਸਾਲ ਰੇਂਜ"
  },
  "eventsShown": {
    "en": "Events shown",
    "pa": "ਘਟਨਾਵਾਂ ਦਿਖਾਈਆਂ"
  },
  "showImportantEventsOnly": {
    "en": "Show Important Events Only",
    "pa": "ਸਿਰਫ ਮਹੱਤਵਪੂਰਨ ਘਟਨਾਵਾਂ ਦਿਖਾਓ"
  },
  "noEventsFound": {
    "en": "No events found for this selection.",
    "pa": "ਇਸ ਚੋਣ ਲਈ ਕੋਈ ਘਟਨਾਵਾਂ ਨਹੀਂ ਮਿਲੀਆਂ।"
  },
  
  // Categories
  "allEvents": {
    "en": "All Events",
    "pa": "ਸਾਰੀਆਂ ਘਟਨਾਵਾਂ"
  },
  "allCategories": {
    "en": "All Categories",
    "pa": "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ"
  },
  "gurus": {
    "en": "Gurus",
    "pa": "ਗੁਰੂ"
  },
  "battles": {
    "en": "Battles",
    "pa": "ਯੁੱਧਾਂ"
  },
  "temples": {
    "en": "Temples",
    "pa": "ਮੰਦਰ"
  },
  "scriptures": {
    "en": "Scriptures",
    "pa": "ਧਾਰਮਿਕ ਗ੍ਰੰਥ"
  },
  "political": {
    "en": "Political",
    "pa": "ਰਾਜਨੀਤਿਕ"
  },
  "other": {
    "en": "Other",
    "pa": "ਹੋਰ"
  },
  
  // Time periods
  "guruPeriod": {
    "en": "Guru Period",
    "pa": "ਗੁਰੂ ਕਾਲ"
  },
  "mislPeriod": {
    "en": "Misl Period",
    "pa": "ਮਿਸਲ ਕਾਲ"
  },
  "sikhEmpire": {
    "en": "Sikh Empire",
    "pa": "ਸਿੱਖ ਸਾਮਰਾਜ"
  },
  "britishRule": {
    "en": "British Rule",
    "pa": "ਅੰਗਰੇਜ਼ੀ ਰਾਜ"
  },
  "modernEra": {
    "en": "Modern Era",
    "pa": "ਆਧੁਨਿਕ ਕਾਲ"
  },
  
  // Footer
  "quickLinks": {
    "en": "Quick Links",
    "pa": "ਤੇਜ਼ ਲਿੰਕ"
  },
  "resources": {
    "en": "Resources",
    "pa": "ਸਰੋਤ"
  },
  "home": {
    "en": "Home",
    "pa": "ਹੋਮ"
  },
  "aboutSikhism": {
    "en": "About Sikhism",
    "pa": "ਸਿੱਖੀ ਬਾਰੇ"
  },
  "tenGurusLink": {
    "en": "The Ten Gurus",
    "pa": "ਦਸ ਗੁਰੂ"
  },
  "importantEvents": {
    "en": "Important Events",
    "pa": "ਮਹੱਤਵਪੂਰਨ ਘਟਨਾਵਾਂ"
  },
  "copyright": {
    "en": "All rights reserved.",
    "pa": "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।"
  },
  "createdWith": {
    "en": "Created with respect for Sikh history and traditions.",
    "pa": "ਸਿੱਖ ਇਤਿਹਾਸ ਅਤੇ ਪਰੰਪਰਾਵਾਂ ਲਈ ਸਤਿਕਾਰ ਨਾਲ ਬਣਾਇਆ ਗਿਆ।"
  },
  
  // Language toggle
  "english": {
    "en": "English",
    "pa": "ਅੰਗਰੇਜ਼ੀ"
  },
  "punjabi": {
    "en": "ਪੰਜਾਬੀ",
    "pa": "ਪੰਜਾਬੀ"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
