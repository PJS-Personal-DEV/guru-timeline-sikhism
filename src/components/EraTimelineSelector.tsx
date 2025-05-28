
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Users, Sword, Crown, Building, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Era {
  id: string;
  name: string;
  name_pa: string;
  startYear: number;
  endYear: number;
  description: string;
  description_pa: string;
  color: string;
  icon: React.ElementType;
}

const eras: Era[] = [
  {
    id: 'gurus',
    name: 'Era of the Gurus',
    name_pa: 'ਗੁਰੂਆਂ ਦਾ ਯੁੱਗ',
    startYear: 1469,
    endYear: 1708,
    description: 'The founding period of Sikhism under the ten Gurus',
    description_pa: 'ਦਸ ਗੁਰੂਆਂ ਦੇ ਅਧੀਨ ਸਿੱਖ ਧਰਮ ਦੀ ਸਥਾਪਨਾ ਦਾ ਕਾਲ',
    color: 'bg-sikh-amber',
    icon: Users
  },
  {
    id: 'early_struggles',
    name: 'Early Struggles',
    name_pa: 'ਸ਼ੁਰੂਆਤੀ ਸੰਘਰਸ਼',
    startYear: 1708,
    endYear: 1748,
    description: 'Period of Banda Singh Bahadur and early Sikh resistance',
    description_pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਅਤੇ ਸ਼ੁਰੂਆਤੀ ਸਿੱਖ ਵਿਰੋਧ ਦਾ ਕਾਲ',
    color: 'bg-red-500',
    icon: Sword
  },
  {
    id: 'misl_period',
    name: 'Misl Period',
    name_pa: 'ਮਿਸਲ ਕਾਲ',
    startYear: 1748,
    endYear: 1799,
    description: 'Era of Sikh confederacies and territorial expansion',
    description_pa: 'ਸਿੱਖ ਮਿਸਲਾਂ ਅਤੇ ਇਲਾਕਾਈ ਵਿਸਤਾਰ ਦਾ ਯੁੱਗ',
    color: 'bg-blue-500',
    icon: MapPin
  },
  {
    id: 'sikh_empire',
    name: 'Sikh Empire',
    name_pa: 'ਸਿੱਖ ਸਾਮਰਾਜ',
    startYear: 1799,
    endYear: 1849,
    description: 'Golden period under Maharaja Ranjit Singh',
    description_pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਅਧੀਨ ਸੁਨਹਿਰਾ ਕਾਲ',
    color: 'bg-sikh-gold',
    icon: Crown
  },
  {
    id: 'british_rule',
    name: 'British Colonial Period',
    name_pa: 'ਬ੍ਰਿਟਿਸ਼ ਬਸਤੀਵਾਦੀ ਕਾਲ',
    startYear: 1849,
    endYear: 1947,
    description: 'Period of British rule and Sikh reform movements',
    description_pa: 'ਬ੍ਰਿਟਿਸ਼ ਸ਼ਾਸਨ ਅਤੇ ਸਿੱਖ ਸੁਧਾਰ ਲਹਿਰਾਂ ਦਾ ਕਾਲ',
    color: 'bg-green-600',
    icon: Building
  },
  {
    id: 'modern_era',
    name: 'Modern Era',
    name_pa: 'ਆਧੁਨਿਕ ਯੁੱਗ',
    startYear: 1947,
    endYear: 2024,
    description: 'Independence and contemporary Sikh history',
    description_pa: 'ਆਜ਼ਾਦੀ ਅਤੇ ਸਮਕਾਲੀ ਸਿੱਖ ਇਤਿਹਾਸ',
    color: 'bg-purple-600',
    icon: Clock
  }
];

interface EraTimelineSelectorProps {
  selectedEra: string;
  onEraSelect: (eraId: string) => void;
}

const EraTimelineSelector: React.FC<EraTimelineSelectorProps> = ({ selectedEra, onEraSelect }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="w-full">
      {/* Visual Timeline */}
      <div className="relative mb-8 overflow-x-auto">
        <div className="flex items-center min-w-full px-4">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sikh-amber via-sikh-gold to-sikh-amber transform -translate-y-1/2 z-0"></div>
          
          {/* Era markers */}
          <div className="flex justify-between w-full relative z-10">
            {eras.map((era, index) => {
              const IconComponent = era.icon;
              const isSelected = selectedEra === era.id;
              const isAllSelected = selectedEra === 'all';
              
              return (
                <div
                  key={era.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => onEraSelect(era.id)}
                >
                  {/* Era marker */}
                  <div className={cn(
                    "w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110",
                    isSelected ? era.color : isAllSelected ? era.color : "bg-gray-300",
                    isSelected ? "ring-4 ring-sikh-amber/50 scale-110" : ""
                  )}>
                    <IconComponent className={cn(
                      "w-6 h-6",
                      isSelected || isAllSelected ? "text-white" : "text-gray-600"
                    )} />
                  </div>
                  
                  {/* Era info */}
                  <div className="mt-2 text-center min-w-20">
                    <div className={cn(
                      "text-xs font-semibold",
                      isSelected ? "text-sikh-blue" : "text-gray-600"
                    )}>
                      {era.startYear} - {era.endYear}
                    </div>
                    <div className={cn(
                      "text-xs mt-1 transition-opacity",
                      isSelected ? "opacity-100 text-sikh-blue font-medium" : "opacity-70"
                    )}>
                      {currentLanguage === 'en' ? era.name.split(' ')[0] : era.name_pa.split(' ')[0]}
                    </div>
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 min-w-48">
                    <div className="font-semibold">
                      {currentLanguage === 'en' ? era.name : era.name_pa}
                    </div>
                    <div className="text-gray-300 mt-1">
                      {currentLanguage === 'en' ? era.description : era.description_pa}
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                      <div className="border-4 border-transparent border-b-gray-900"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* All Eras button */}
      <div className="text-center mb-4">
        <button
          onClick={() => onEraSelect('all')}
          className={cn(
            "px-6 py-2 rounded-full border-2 transition-all duration-300",
            selectedEra === 'all' 
              ? "bg-sikh-blue text-white border-sikh-blue" 
              : "bg-white text-sikh-blue border-sikh-blue hover:bg-sikh-blue hover:text-white"
          )}
        >
          <Calendar className="w-4 h-4 inline mr-2" />
          {currentLanguage === 'en' ? 'All Eras' : 'ਸਾਰੇ ਯੁੱਗ'}
        </button>
      </div>
    </div>
  );
};

export { eras };
export default EraTimelineSelector;
