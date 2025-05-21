
import React, { useState } from 'react';
import TimelineEvent from './TimelineEvent';
import { sikhTimelineEvents, TimelineEvent as TimelineEventType } from '../data/sikhHistory';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '../contexts/LanguageContext';

const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const [startYear, setStartYear] = useState(1469);
  const [endYear, setEndYear] = useState(2010);
  const [filteredEvents, setFilteredEvents] = useState<TimelineEventType[]>(sikhTimelineEvents);
  const [activeTab, setActiveTab] = useState('all');
  
  // Define time periods
  const periods = [
    { id: 'all', name: t("allEvents"), startYear: 1469, endYear: 2010 },
    { id: 'gurus', name: t("guruPeriod"), startYear: 1469, endYear: 1708 },
    { id: 'misl', name: t("mislPeriod"), startYear: 1709, endYear: 1798 },
    { id: 'empire', name: t("sikhEmpire"), startYear: 1799, endYear: 1849 },
    { id: 'british', name: t("britishRule"), startYear: 1849, endYear: 1947 },
    { id: 'modern', name: t("modernEra"), startYear: 1947, endYear: 2010 }
  ];
  
  const categories = [
    { id: 'all', name: t("allCategories") },
    { id: 'guru', name: t("gurus") },
    { id: 'battle', name: t("battles") },
    { id: 'temple', name: t("temples") },
    { id: 'scripture', name: t("scriptures") },
    { id: 'political', name: t("political") },
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
    let filtered = sikhTimelineEvents.filter(event => event.year >= start && event.year <= end);
    
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
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-sikh-blue mb-4">{t("exploreTheTimeline")}</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{t("selectTimePeriod")}</h3>
          <div className="flex flex-wrap gap-2">
            {periods.map((period) => (
              <Button
                key={period.id}
                variant={period.startYear === startYear && period.endYear === endYear ? "default" : "outline"}
                onClick={() => handlePeriodChange(period.id)}
                className="bg-sikh-blue text-white hover:bg-sikh-navy"
              >
                {period.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{t("filterByCategory")}</h3>
          <Tabs defaultValue="all" value={activeTab} onValueChange={handleCategoryChange} className="w-full">
            <TabsList className="w-full grid grid-cols-3 md:grid-cols-7 gap-1 h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="py-2 px-3">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{t("customYearRange")}: {startYear} - {endYear}</h3>
          <Slider
            defaultValue={[startYear, endYear]}
            min={1469}
            max={2010}
            step={1}
            value={[startYear, endYear]}
            onValueChange={handleYearSliderChange}
            className="mt-6"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>1469</span>
            <span>2010</span>
          </div>
        </div>
        
        <div className="text-right">
          <span className="text-sm text-gray-600 mr-2">{t("eventsShown")}: {filteredEvents.length}</span>
          <Button 
            variant="outline" 
            onClick={() => handleCategoryChange('important')}
            className={activeTab === 'important' ? "bg-sikh-amber text-sikh-blue" : ""}
          >
            {t("showImportantEventsOnly")}
          </Button>
        </div>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <TimelineEvent key={event.id} event={event} index={index} />
            ))
          ) : (
            <div className="w-full text-center p-10">
              <p className="text-lg font-semibold text-gray-500">{t("noEventsFound")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
