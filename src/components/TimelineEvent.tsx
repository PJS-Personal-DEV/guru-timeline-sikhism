
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TimelineEvent as TimelineEventType } from '../data/sikhHistory';
import { cn } from '@/lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, FileText, Map, Star, Tag } from 'lucide-react';

interface TimelineEventProps {
  event: TimelineEventType;
  isLeft: boolean;
  icon: React.ReactElement;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, isLeft, icon }) => {
  const { currentLanguage } = useLanguage();
  
  // Determine category-based styling
  const getCategoryStyle = () => {
    switch (event.category) {
      case 'guru':
        return 'border-l-4 border-sikh-amber bg-gradient-to-br from-white to-sikh-amber/10';
      case 'battle':
        return 'border-l-4 border-red-600 bg-gradient-to-br from-white to-red-50';
      case 'temple':
        return 'border-l-4 border-sikh-gold bg-gradient-to-br from-white to-sikh-gold/10';
      case 'scripture':
        return 'border-l-4 border-blue-500 bg-gradient-to-br from-white to-blue-50';
      case 'political':
        return 'border-l-4 border-green-600 bg-gradient-to-br from-white to-green-50';
      case 'martyrdom':
        return 'border-l-4 border-purple-600 bg-gradient-to-br from-white to-purple-50';
      case 'historical':
        return 'border-l-4 border-orange-600 bg-gradient-to-br from-white to-orange-50';
      case 'establishment':
        return 'border-l-4 border-teal-600 bg-gradient-to-br from-white to-teal-50';
      case 'general':
        return 'border-l-4 border-indigo-500 bg-gradient-to-br from-white to-indigo-50';
      default:
        return 'border-l-4 border-gray-400 bg-gradient-to-br from-white to-gray-50';
    }
  };

  // Use the appropriate language version of the event data
  const title = currentLanguage === 'en' ? event.title_en : event.title_pa;
  const description = currentLanguage === 'en' ? event.description_en : event.description_pa;
  const category = currentLanguage === 'en' ? event.category : 
    (event.category === 'guru' ? 'ਗੁਰੂ' : 
     event.category === 'battle' ? 'ਯੁੱਧ' : 
     event.category === 'temple' ? 'ਮੰਦਰ' : 
     event.category === 'scripture' ? 'ਧਾਰਮਿਕ ਗ੍ਰੰਥ' : 
     event.category === 'political' ? 'ਰਾਜਨੀਤਿਕ' : 
     event.category === 'martyrdom' ? 'ਸ਼ਹੀਦੀ' :
     event.category === 'historical' ? 'ਇਤਿਹਾਸਿਕ' :
     event.category === 'establishment' ? 'ਸਥਾਪਨਾ' : 
     event.category === 'general' ? 'ਆਮ' : 'ਹੋਰ');

  return (
    <div 
      className={cn(
        "timeline-event w-full animate-fade-in",
        // Desktop positioning
        "md:w-[45%]",
        isLeft 
          ? "md:mr-auto md:pr-8 md:text-left" 
          : "md:ml-auto md:pl-8 md:text-right",
        // Mobile positioning (always left aligned)
        "pl-16 pr-4"
      )}
    >
      <Card className={cn(
        "hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1",
        getCategoryStyle(),
        event.important ? "ring-2 ring-sikh-amber shadow-lg" : "shadow-md"
      )}>
        <CardHeader className="pb-2">
          <div className={cn(
            "flex items-center gap-2",
            isLeft ? "md:flex-row" : "md:flex-row-reverse"
          )}>
            <CardTitle className="text-lg md:text-xl font-bold flex items-center gap-2 flex-1">
              {icon}
              <span className={cn(isLeft ? "md:text-left" : "md:text-right", "text-left")}>{title}</span>
            </CardTitle>
            <span className="text-sm font-semibold bg-sikh-blue text-white px-3 py-1 rounded-full shadow-sm flex items-center shrink-0">
              <Calendar className="w-3 h-3 mr-1" />
              {event.year}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className={cn(
            "text-sm md:text-base mb-3",
            isLeft ? "md:text-left" : "md:text-right",
            "text-left"
          )}>
            {description}
          </p>
          
          <div className={cn(
            "flex flex-wrap gap-2 mb-3",
            isLeft ? "md:justify-start" : "md:justify-end",
            "justify-start"
          )}>
            <span className="text-xs uppercase tracking-wide px-2 py-1 bg-gray-100 rounded-full shadow-sm flex items-center gap-1">
              {icon}
              {category}
            </span>
            {event.important && (
              <span className="text-xs uppercase tracking-wide px-2 py-1 bg-sikh-amber text-sikh-blue rounded-full shadow-sm flex items-center gap-1">
                <Star className="w-3 h-3" />
                {currentLanguage === 'en' ? 'Important' : 'ਮਹੱਤਵਪੂਰਨ'}
              </span>
            )}
          </div>
          
          {event.tags && event.tags.length > 0 && (
            <div className={cn(
              "flex flex-wrap gap-1",
              isLeft ? "md:justify-start" : "md:justify-end",
              "justify-start"
            )}>
              {event.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-200 flex items-center gap-1"
                >
                  <Tag className="w-2 h-2" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineEvent;
