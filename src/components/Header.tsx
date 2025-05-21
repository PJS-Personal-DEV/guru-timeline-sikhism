
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pa' : 'en');
  };

  return (
    <header className="bg-sikh-blue text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-sikh-amber flex items-center justify-center mr-3">
              <span className="text-sikh-blue text-xl font-bold">ੴ</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-header">{t("siteTitle")}</h1>
              <p className="text-sm md:text-base text-sikh-amber">{t("siteSubtitle")}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-sikh-amber text-sikh-amber hover:bg-sikh-amber hover:text-sikh-blue flex items-center gap-2"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? t("punjabi") : t("english")}
            </Button>
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost" className="hover:bg-sikh-amber hover:text-sikh-blue">{t("about")}</Button>
              <Button variant="outline" className="border-sikh-amber text-sikh-amber hover:bg-sikh-amber hover:text-sikh-blue">{t("explore")}</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
