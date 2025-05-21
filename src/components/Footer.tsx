
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sikh-blue text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("siteTitle")}</h3>
            <p className="text-sm">
              {t("sikhismIntro1").split(' ').slice(0, 20).join(' ')}...
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-sikh-amber transition-colors">{t("home")}</a></li>
              <li><a href="#" className="text-sm hover:text-sikh-amber transition-colors">{t("aboutSikhism")}</a></li>
              <li><a href="#" className="text-sm hover:text-sikh-amber transition-colors">{t("tenGurusLink")}</a></li>
              <li><a href="#" className="text-sm hover:text-sikh-amber transition-colors">{t("importantEvents")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t("resources")}</h3>
            <ul className="space-y-2">
              <li><a href="https://www.sikhnet.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sikh-amber transition-colors">SikhNet</a></li>
              <li><a href="https://www.sikh-history.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sikh-amber transition-colors">Sikh History</a></li>
              <li><a href="https://www.sikhs.org/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sikh-amber transition-colors">Sikhs.org</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} {t("siteTitle")}. {t("copyright")}</p>
          <p className="text-sm mt-2 md:mt-0">{t("createdWith")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
