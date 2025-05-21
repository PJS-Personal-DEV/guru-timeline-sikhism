
import React from 'react';
import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-sikh-light">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-sikh-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t("heroTitle")}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-sikh-amber">
            {t("heroSubtitle")}
          </p>
          <a href="#timeline" className="mt-8 inline-block bg-sikh-amber text-sikh-blue px-6 py-3 rounded-md font-semibold hover:bg-sikh-gold transition-colors">
            {t("exploreTimeline")}
          </a>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-0 md:pr-8">
              <h2 className="text-3xl font-bold text-sikh-blue mb-4">{t("aboutSikhHistory")}</h2>
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
              <div className="bg-sikh-amber/10 p-6 rounded-lg border border-sikh-amber">
                <h3 className="text-xl font-bold text-sikh-blue mb-3">{t("tenGurus")}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Guru Nanak Dev Ji (1469-1539)</li>
                  <li>Guru Angad Dev Ji (1539-1552)</li>
                  <li>Guru Amar Das Ji (1552-1574)</li>
                  <li>Guru Ram Das Ji (1574-1581)</li>
                  <li>Guru Arjan Dev Ji (1581-1606)</li>
                  <li>Guru Hargobind Ji (1606-1644)</li>
                  <li>Guru Har Rai Ji (1644-1661)</li>
                  <li>Guru Har Krishan Ji (1661-1664)</li>
                  <li>Guru Tegh Bahadur Ji (1664-1675)</li>
                  <li>Guru Gobind Singh Ji (1675-1708)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div id="timeline" className="pb-12">
        <Timeline />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
