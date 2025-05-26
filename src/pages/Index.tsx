
import React from 'react';
import Header from '@/components/Header';
import EraTimeline from '@/components/EraTimeline';
import Footer from '@/components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Star, FileText } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-sikh-light">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sikh-blue via-sikh-blue to-sikh-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <img 
              src="/lovable-uploads/3a530b36-c817-4d1a-bcfd-af9f81043956.png" 
              alt="Sikh History Logo" 
              className="w-16 h-16 rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-header">{t("heroTitle")}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-sikh-amber">
            {t("heroSubtitle")}
          </p>
          <a href="#timeline" className="mt-8 inline-block bg-sikh-amber text-sikh-blue px-6 py-3 rounded-md font-semibold hover:bg-sikh-gold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
            {t("exploreTimeline")}
          </a>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 border border-sikh-amber/20 bg-gradient-to-br from-white to-sikh-light/50">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-0 md:pr-8">
              <h2 className="text-3xl font-bold text-sikh-blue mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-sikh-amber" />
                {t("aboutSikhHistory")}
              </h2>
              <p className="mb-4">
                {t("sikhismIntro1")}
              </p>
              <p className="mb-4">
                {t("sikhismIntro2")}
              </p>
              <p>
                {t("sikhismIntro3")}
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-gradient-to-br from-sikh-amber/20 to-sikh-light p-6 rounded-lg border border-sikh-amber/30 shadow-md">
                <h3 className="text-xl font-bold text-sikh-blue mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-sikh-amber" />
                  {t("tenGurus")}
                </h3>
                <ul className="list-none pl-0 space-y-2">
                  {[
                    "Guru Nanak Dev Ji (1469-1539)",
                    "Guru Angad Dev Ji (1539-1552)",
                    "Guru Amar Das Ji (1552-1574)",
                    "Guru Ram Das Ji (1574-1581)",
                    "Guru Arjan Dev Ji (1581-1606)",
                    "Guru Hargobind Ji (1606-1644)",
                    "Guru Har Rai Ji (1644-1661)",
                    "Guru Har Krishan Ji (1661-1664)",
                    "Guru Tegh Bahadur Ji (1664-1675)",
                    "Guru Gobind Singh Ji (1675-1708)"
                  ].map((guru, index) => (
                    <li key={index} className="flex items-center border-b border-sikh-amber/20 pb-1">
                      <span className="w-6 h-6 bg-sikh-amber/20 rounded-full flex items-center justify-center mr-2 text-sikh-blue font-bold">
                        {index + 1}
                      </span>
                      {guru}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div id="timeline" className="pb-12">
        <EraTimeline />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
