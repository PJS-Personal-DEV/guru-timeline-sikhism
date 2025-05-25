
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { t, currentLanguage, toggleLanguage } = useLanguage();
  
  return (
    <header className="bg-sikh-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold font-header text-sikh-amber hover:text-sikh-gold transition-colors">
            {t('sikhHistoryTimeline')}
          </Link>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-md bg-sikh-amber/20 text-sikh-amber hover:bg-sikh-amber/30 transition-colors"
            >
              {currentLanguage === 'en' ? 'ਪੰਜਾਬੀ' : 'English'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
