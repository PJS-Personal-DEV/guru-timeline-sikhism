
import React, { useState } from 'react';
import TimelineEvent from './TimelineEvent';
import { sikhHistory, TimelineEvent as TimelineEventType } from '../data/sikhHistory';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, FileText, Star } from 'lucide-react';

const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const [startYear, setStartYear] = useState(1469);
  const [endYear, setEndYear] = useState(2019);
  const [filteredEvents, setFilteredEvents] = useState<TimelineEventType[]>(sikhHistory);
  const [activeTab, setActiveTab] = useState('all');
  
  // Define time periods with proper date ranges
  const periods = [
    { id: 'all', name: t("allEvents"), startYear: 1469, endYear: 2019, icon: <FileText className="w-4 h-4 mr-1" /> },
    { id: 'gurus', name: t("guruPeriod"), startYear: 1469, endYear: 1708, icon: <Star className="w-4 h-4 mr-1" /> },
    { id: 'misl', name: t("mislPeriod"), startYear: 1710, endYear: 1798, icon: <Clock className="w-4 h-4 mr-1" /> },
    { id: 'empire', name: t("sikhEmpire"), startYear: 1799, endYear: 1849, icon: <Star className="w-4 h-4 mr-1" /> },
    { id: 'british', name: t("britishRule"), startYear: 1849, endYear: 1947, icon: <Clock className="w-4 h-4 mr-1" /> },
    { id: 'modern', name: t("modernEra"), startYear: 1947, endYear: 2019, icon: <Calendar className="w-4 h-4 mr-1" /> }
  ];
  
  const categories = [
    { id: 'all', name: t("allCategories") },
    { id: 'guru', name: t("gurus") },
    { id: 'battle', name: t("battles") },
    { id: 'temple', name: t("temples") },
    { id: 'scripture', name: t("scriptures") },
    { id: 'political', name: t("political") },
    { id: 'martyrdom', name: t("martyrdom") },
    { id: 'historical', name: t("historical") },
    { id: 'establishment', name: t("establishment") },
    { id: 'other', name: t("other") }
  ];
  
  const handlePeriodChange = (periodId: string) => {
    const period = periods.find(p => p.id === periodId);
    if (period) {
      setStartYear(period.startYear);
      setEndYear(period.endYear);
      filterEvents(period.startYear, period.endYear, activeTab === 'important' ? 'important' : activeTab === 'all' ? 'all' : activeTab);
    }
  };
  
  const handleCategoryChange = (categoryId: string) => {
    setActiveTab(categoryId);
    filterEvents(startYear, endYear, categoryId === 'all' ? 'all' : categoryId === 'important' ? 'important' : categoryId);
  };
  
  const filterEvents = (start: number, end: number, category: string) => {
    let filtered = sikhHistory.filter(event => event.year >= start && event.year <= end);
    
    if (category !== 'all') {
      if (category === 'important') {
        filtered = filtered.filter(event => event.important);
      } else {
        filtered = filtered.filter(event => event.category === category);
      }
    }
    
    setFilteredEvents(filtered);
  };

  const handleYearSliderChange = (values: number[]) => {
    const [start, end] = values;
    setStartYear(start);
    setEndYear(end);
    filterEvents(start, end, activeTab === 'important' ? 'important' : activeTab === 'all' ? 'all' : activeTab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-sikh-amber/20 bg-gradient-to-br from-white to-sikh-light">
        <h2 className="text-2xl font-bold text-sikh-blue mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-sikh-amber" />
          {t("exploreTheTimeline")}
        </h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-sikh-navy flex items-center">
            <Clock className="w-4 h-4 mr-2 text-sikh-amber" />
            {t("selectTimePeriod")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {periods.map((period) => (
              <Button
                key={period.id}
                variant={period.startYear === startYear && period.endYear === endYear ? "default" : "outline"}
                onClick={() => handlePeriodChange(period.id)}
                className={`transition-all duration-300 ${
                  period.startYear === startYear && period.endYear === endYear 
                    ? "bg-sikh-amber text-sikh-navy shadow-md" 
                    : "border-sikh-blue/50 hover:border-sikh-amber hover:text-sikh-navy"
                }`}
              >
                {period.icon}
                {period.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-sikh-navy flex items-center">
            <FileText className="w-4 h-4 mr-2 text-sikh-amber" />
            {t("filterByCategory")}
          </h3>
          <Tabs defaultValue="all" value={activeTab} onValueChange={handleCategoryChange} className="w-full">
            <TabsList className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-1 h-auto bg-sikh-blue/5 p-1 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="py-2 px-3 data-[state=active]:bg-sikh-amber data-[state=active]:text-sikh-navy data-[state=active]:shadow-md transition-all text-xs"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-sikh-navy flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-sikh-amber" />
            {t("customYearRange")}: <span className="text-sikh-amber ml-2">{startYear} - {endYear}</span>
          </h3>
          <div className="px-3 py-6">
            <Slider
              defaultValue={[startYear, endYear]}
              min={1469}
              max={2019}
              step={1}
              value={[startYear, endYear]}
              onValueChange={handleYearSliderChange}
              className="mt-6"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>1469</span>
              <span>2019</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm bg-sikh-blue text-white px-3 py-1 rounded-full shadow-sm">
            {t("eventsShown")}: {filteredEvents.length}
          </span>
          <Button 
            variant="outline" 
            onClick={() => handleCategoryChange('important')}
            className={`transition-all duration-300 ${
              activeTab === 'important' 
                ? "bg-sikh-amber text-sikh-blue border-sikh-amber shadow-md" 
                : "border-sikh-amber text-sikh-blue hover:bg-sikh-amber/20"
            }`}
          >
            <Star className="w-4 h-4 mr-2" />
            {t("showImportantEventsOnly")}
          </Button>
        </div>
      </div>
      
      <div className="timeline-container relative">
        <div className="timeline-line"></div>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <TimelineEvent key={event.id} event={event} index={index} />
            ))
          ) : (
            <div className="w-full text-center p-10 bg-white/80 rounded-xl shadow-md border border-sikh-amber/20">
              <p className="text-lg font-semibold text-gray-500">{t("noEventsFound")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
