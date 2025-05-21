
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pa';

interface Translations {
  [key: string]: { [key in Language]: string };
}

const translations: Translations = {
  sikhHistoryTimeline: {
    en: 'Sikh History Timeline',
    pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਕਾਲਕ੍ਰਮ',
  },
  heroTitle: {
    en: 'Journey Through Sikh History',
    pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਦੀ ਯਾਤਰਾ',
  },
  heroSubtitle: {
    en: 'Explore the rich history and heritage of Sikhism from the birth of Guru Nanak Dev Ji to modern times',
    pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਜਨਮ ਤੋਂ ਲੈ ਕੇ ਆਧੁਨਿਕ ਸਮੇਂ ਤੱਕ ਸਿੱਖੀ ਦੇ ਅਮੀਰ ਇਤਿਹਾਸ ਅਤੇ ਵਿਰਾਸਤ ਦੀ ਪੜਚੋਲ ਕਰੋ',
  },
  exploreTimeline: {
    en: 'Explore Timeline',
    pa: 'ਕਾਲਕ੍ਰਮ ਦੀ ਪੜਚੋਲ ਕਰੋ',
  },
  timelineTitle: {
    en: 'Sikh History Timeline',
    pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਕਾਲਕ੍ਰਮ',
  },
  aboutSikhHistory: {
    en: 'About Sikh History',
    pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਬਾਰੇ',
  },
  sikhismIntro1: {
    en: 'Sikhism emerged in the Punjab region of South Asia in the 15th century under the spiritual leadership of Guru Nanak Dev Ji. The religion developed through the teachings of ten Gurus, with the eleventh and eternal Guru being the Guru Granth Sahib, the holy scripture.',
    pa: 'ਸਿੱਖ ਧਰਮ 15ਵੀਂ ਸਦੀ ਵਿੱਚ ਦੱਖਣੀ ਏਸ਼ੀਆ ਦੇ ਪੰਜਾਬ ਖੇਤਰ ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਅਧਿਆਤਮਕ ਅਗਵਾਈ ਹੇਠ ਉਭਰਿਆ। ਇਹ ਧਰਮ ਦਸ ਗੁਰੂਆਂ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਦੁਆਰਾ ਵਿਕਸਿਤ ਹੋਇਆ, ਜਿਸ ਵਿੱਚ ਗਿਆਰ੍ਹਵੇਂ ਅਤੇ ਸਦੀਵੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਪਵਿੱਤਰ ਧਰਮ ਗ੍ਰੰਥ ਹਨ।',
  },
  sikhismIntro2: {
    en: 'The timeline below chronicles key moments in Sikh history, from the birth of Guru Nanak Dev Ji in 1469 to significant events in modern times. The journey includes the establishment of key institutions, battles for religious freedom, and the formation of the Khalsa by Guru Gobind Singh Ji.',
    pa: 'ਹੇਠਾਂ ਦਿੱਤਾ ਕਾਲਕ੍ਰਮ 1469 ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਜਨਮ ਤੋਂ ਲੈ ਕੇ ਆਧੁਨਿਕ ਸਮੇਂ ਦੀਆਂ ਮਹੱਤਵਪੂਰਨ ਘਟਨਾਵਾਂ ਤੱਕ, ਸਿੱਖ ਇਤਿਹਾਸ ਦੇ ਮੁੱਖ ਪਲਾਂ ਦਾ ਵਰਨਣ ਕਰਦਾ ਹੈ। ਇਸ ਯਾਤਰਾ ਵਿੱਚ ਮੁੱਖ ਸੰਸਥਾਵਾਂ ਦੀ ਸਥਾਪਨਾ, ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਲਈ ਲੜਾਈਆਂ, ਅਤੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਖਾਲਸਾ ਦੀ ਸਥਾਪਨਾ ਸ਼ਾਮਲ ਹੈ।',
  },
  sikhismIntro3: {
    en: 'Sikhism emphasizes the pursuit of justice, equality, and service to humanity, principles that have guided the community through centuries of challenges and achievements.',
    pa: 'ਸਿੱਖ ਧਰਮ ਨਿਆਂ, ਬਰਾਬਰੀ, ਅਤੇ ਮਨੁੱਖਤਾ ਦੀ ਸੇਵਾ ਦੀ ਪ੍ਰਾਪਤੀ \'ਤੇ ਜ਼ੋਰ ਦਿੰਦਾ ਹੈ, ਅਜਿਹੇ ਸਿਧਾਂਤ ਜਿਨ੍ਹਾਂ ਨੇ ਸਦੀਆਂ ਦੀਆਂ ਚੁਣੌਤੀਆਂ ਅਤੇ ਪ੍ਰਾਪਤੀਆਂ ਦੌਰਾਨ ਭਾਈਚਾਰੇ ਦੀ ਅਗਵਾਈ ਕੀਤੀ ਹੈ।',
  },
  tenGurus: {
    en: 'The Ten Gurus',
    pa: 'ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ',
  },
  readMore: {
    en: 'Read More',
    pa: 'ਹੋਰ ਪੜ੍ਹੋ',
  },
  filters: {
    en: 'Filters',
    pa: 'ਫਿਲਟਰਜ਼',
  },
  all: {
    en: 'All',
    pa: 'ਸਾਰੇ',
  },
  guru: {
    en: 'Guru',
    pa: 'ਗੁਰੂ',
  },
  battle: {
    en: 'Battle',
    pa: 'ਯੁੱਧ',
  },
  martyrdom: {
    en: 'Martyrdom',
    pa: 'ਸ਼ਹਾਦਤ',
  },
  historical: {
    en: 'Historical',
    pa: 'ਇਤਿਹਾਸਿਕ',
  },
  general: {
    en: 'General',
    pa: 'ਸਧਾਰਨ',
  },
  timelineEvents: {
    en: 'Timeline Events',
    pa: 'ਕਾਲਕ੍ਰਮ ਘਟਨਾਵਾਂ',
  },
  timelineDescription: {
    en: 'Explore key moments that shaped the Sikh faith and community',
    pa: 'ਉਨ੍ਹਾਂ ਮੁੱਖ ਪਲਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ ਜਿਨ੍ਹਾਂ ਨੇ ਸਿੱਖ ਧਰਮ ਅਤੇ ਭਾਈਚਾਰੇ ਨੂੰ ਆਕਾਰ ਦਿੱਤਾ',
  },
  footerContact: {
    en: 'Contact Us',
    pa: 'ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
  },
  footerText: {
    en: 'Learn more about Sikh history through this interactive timeline. Discover the rich heritage, sacrifices, and triumphs that have shaped the Sikh faith.',
    pa: 'ਇਸ ਇੰਟਰਐਕਟਿਵ ਟਾਈਮਲਾਈਨ ਰਾਹੀਂ ਸਿੱਖ ਇਤਿਹਾਸ ਬਾਰੇ ਹੋਰ ਜਾਣੋ। ਉਸ ਅਮੀਰ ਵਿਰਾਸਤ, ਕੁਰਬਾਨੀਆਂ ਅਤੇ ਜਿੱਤਾਂ ਦੀ ਖੋਜ ਕਰੋ ਜਿਨ੍ਹਾਂ ਨੇ ਸਿੱਖ ਧਰਮ ਨੂੰ ਆਕਾਰ ਦਿੱਤਾ ਹੈ।',
  },
  footerRights: {
    en: 'All rights reserved',
    pa: 'ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ',
  },
  // Admin interface translations
  adminLogin: {
    en: 'Admin Login',
    pa: 'ਐਡਮਿਨ ਲੌਗਿਨ',
  },
  adminPanel: {
    en: 'Admin Panel',
    pa: 'ਐਡਮਿਨ ਪੈਨਲ',
  },
  adminLoginDescription: {
    en: 'Enter your credentials to access the admin panel',
    pa: 'ਐਡਮਿਨ ਪੈਨਲ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਲਈ ਆਪਣੇ ਲੌਗਿਨ ਵੇਰਵੇ ਦਰਜ ਕਰੋ',
  },
  username: {
    en: 'Username',
    pa: 'ਯੂਜ਼ਰਨੇਮ',
  },
  password: {
    en: 'Password',
    pa: 'ਪਾਸਵਰਡ',
  },
  login: {
    en: 'Login',
    pa: 'ਲੌਗਿਨ',
  },
  loggingIn: {
    en: 'Logging in...',
    pa: 'ਲੌਗਿਨ ਹੋ ਰਿਹਾ ਹੈ...',
  },
  logout: {
    en: 'Logout',
    pa: 'ਲੌਗਆਉਟ',
  },
  demoCredentials: {
    en: 'For demo, use username: admin, password: admin',
    pa: 'ਡੈਮੋ ਲਈ, ਯੂਜ਼ਰਨੇਮ: admin, ਪਾਸਵਰਡ: admin ਵਰਤੋ',
  },
  manageSikhHistory: {
    en: 'Manage Sikh History',
    pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਦਾ ਪ੍ਰਬੰਧਨ',
  },
  allEvents: {
    en: 'All Events',
    pa: 'ਸਾਰੀਆਂ ਘਟਨਾਵਾਂ',
  },
  createNewEvent: {
    en: 'Create New Event',
    pa: 'ਨਵੀਂ ਘਟਨਾ ਬਣਾਓ',
  },
  manageEvents: {
    en: 'Manage Timeline Events',
    pa: 'ਕਾਲਕ੍ਰਮ ਘਟਨਾਵਾਂ ਦਾ ਪ੍ਰਬੰਧਨ',
  },
  searchEvents: {
    en: 'Search events by title or year...',
    pa: 'ਸਿਰਲੇਖ ਜਾਂ ਸਾਲ ਦੁਆਰਾ ਘਟਨਾਵਾਂ ਖੋਜੋ...',
  },
  year: {
    en: 'Year',
    pa: 'ਸਾਲ',
  },
  title: {
    en: 'Title',
    pa: 'ਸਿਰਲੇਖ',
  },
  category: {
    en: 'Category',
    pa: 'ਸ਼੍ਰੇਣੀ',
  },
  actions: {
    en: 'Actions',
    pa: 'ਕਾਰਵਾਈਆਂ',
  },
  noEventsFound: {
    en: 'No events found',
    pa: 'ਕੋਈ ਘਟਨਾਵਾਂ ਨਹੀਂ ਮਿਲੀਆਂ',
  },
  confirmDelete: {
    en: 'Are you sure you want to delete this event?',
    pa: 'ਕੀ ਤੁਸੀਂ ਨਿਸ਼ਚਿਤ ਰੂਪ ਤੋਂ ਇਸ ਘਟਨਾ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?',
  },
  eventDeleted: {
    en: 'Event Deleted',
    pa: 'ਘਟਨਾ ਮਿਟਾਈ ਗਈ',
  },
  eventDeletedDescription: {
    en: 'The event has been deleted successfully',
    pa: 'ਘਟਨਾ ਨੂੰ ਸਫਲਤਾਪੂਰਵਕ ਮਿਟਾ ਦਿੱਤਾ ਗਿਆ ਹੈ',
  },
  editEvent: {
    en: 'Edit Event',
    pa: 'ਘਟਨਾ ਸੋਧੋ',
  },
  eventEditorDescription: {
    en: 'Fill in the event details in both English and Punjabi',
    pa: 'ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਪੰਜਾਬੀ ਦੋਵਾਂ ਵਿੱਚ ਘਟਨਾ ਦੇ ਵੇਰਵੇ ਭਰੋ',
  },
  importance: {
    en: 'Importance',
    pa: 'ਮਹੱਤਤਾ',
  },
  selectCategory: {
    en: 'Select a category',
    pa: 'ਸ਼੍ਰੇਣੀ ਚੁਣੋ',
  },
  selectImportance: {
    en: 'Select importance level',
    pa: 'ਮਹੱਤਤਾ ਪੱਧਰ ਚੁਣੋ',
  },
  low: {
    en: 'Low',
    pa: 'ਨੀਵਾਂ',
  },
  medium: {
    en: 'Medium',
    pa: 'ਮੱਧਮ',
  },
  high: {
    en: 'High',
    pa: 'ਉੱਚ',
  },
  titleEnglish: {
    en: 'Title (English)',
    pa: 'ਸਿਰਲੇਖ (ਅੰਗਰੇਜ਼ੀ)',
  },
  descriptionEnglish: {
    en: 'Description (English)',
    pa: 'ਵੇਰਵਾ (ਅੰਗਰੇਜ਼ੀ)',
  },
  titlePunjabi: {
    en: 'Title (Punjabi)',
    pa: 'ਸਿਰਲੇਖ (ਪੰਜਾਬੀ)',
  },
  descriptionPunjabi: {
    en: 'Description (Punjabi)',
    pa: 'ਵੇਰਵਾ (ਪੰਜਾਬੀ)',
  },
  cancel: {
    en: 'Cancel',
    pa: 'ਰੱਦ ਕਰੋ',
  },
  saveChanges: {
    en: 'Save Changes',
    pa: 'ਤਬਦੀਲੀਆਂ ਸੰਭਾਲੋ',
  },
  createEvent: {
    en: 'Create Event',
    pa: 'ਘਟਨਾ ਬਣਾਓ',
  },
  validationError: {
    en: 'Validation Error',
    pa: 'ਪ੍ਰਮਾਣੀਕਰਨ ਤਰੁੱਟੀ',
  },
  titleRequired: {
    en: 'Title is required in both languages',
    pa: 'ਦੋਵੇਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸਿਰਲੇਖ ਲੋੜੀਂਦਾ ਹੈ',
  },
  yearRequired: {
    en: 'Year is required',
    pa: 'ਸਾਲ ਲੋੜੀਂਦਾ ਹੈ',
  },
  eventCreated: {
    en: 'Event Created',
    pa: 'ਘਟਨਾ ਬਣਾਈ ਗਈ',
  },
  eventCreatedDescription: {
    en: 'The new event has been created successfully',
    pa: 'ਨਵੀਂ ਘਟਨਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਈ ਗਈ ਹੈ',
  },
  eventUpdated: {
    en: 'Event Updated',
    pa: 'ਘਟਨਾ ਅਪਡੇਟ ਕੀਤੀ ਗਈ',
  },
  eventUpdatedDescription: {
    en: 'The event has been updated successfully',
    pa: 'ਘਟਨਾ ਨੂੰ ਸਫਲਤਾਪੂਰਵਕ ਅਪਡੇਟ ਕੀਤਾ ਗਿਆ ਹੈ',
  },
  back: {
    en: 'Back',
    pa: 'ਵਾਪਸ',
  },
};

interface LanguageContextType {
  currentLanguage: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>((localStorage.getItem('language') as Language) || 'en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pa' : 'en';
    setCurrentLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][currentLanguage];
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
