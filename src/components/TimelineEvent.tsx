
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TimelineEvent as TimelineEventType } from '../data/sikhHistory';
import { cn } from '@/lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, FileText, Map, Star } from 'lucide-react';

interface TimelineEventProps {
  event: TimelineEventType;
  index: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, index }) => {
  const { language } = useLanguage();
  
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
      default:
        return 'border-l-4 border-gray-400 bg-gradient-to-br from-white to-gray-50';
    }
  };

  const getCategoryIcon = () => {
    switch (event.category) {
      case 'guru':
        return <Star className="w-4 h-4 text-sikh-amber" />;
      case 'battle':
        return <Map className="w-4 h-4 text-red-600" />;
      case 'temple':
        return <Map className="w-4 h-4 text-sikh-gold" />;
      case 'scripture':
        return <FileText className="w-4 h-4 text-blue-500" />;
      case 'political':
        return <Map className="w-4 h-4 text-green-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  const isEven = index % 2 === 0;
  
  // Use the appropriate language version of the event data
  const title = language === 'en' ? event.title : (event.titlePa || event.title);
  const description = language === 'en' ? event.description : (event.descriptionPa || event.description);
  const category = language === 'en' ? event.category : 
    (event.category === 'guru' ? 'ਗੁਰੂ' : 
     event.category === 'battle' ? 'ਯੁੱਧ' : 
     event.category === 'temple' ? 'ਮੰਦਰ' : 
     event.category === 'scripture' ? 'ਧਾਰਮਿਕ ਗ੍ਰੰਥ' : 
     event.category === 'political' ? 'ਰਾਜਨੀਤਿਕ' : 'ਹੋਰ');

  return (
    <div 
      className={cn(
        "timeline-event w-full md:w-[45%] mb-8 animate-fade-in",
        isEven ? "md:ml-auto md:pl-6 md:pr-0" : "md:mr-auto md:pr-6 md:pl-0"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={cn(
        "absolute w-5 h-5 bg-sikh-blue rounded-full z-10 hidden md:block",
        isEven ? "md:left-[calc(50%+3px)]" : "md:left-[calc(50%-8px)]"
      )}>
        <div className="w-3 h-3 bg-sikh-amber rounded-full absolute top-1 left-1 animate-pulse"></div>
      </div>
      
      <Card className={cn(
        "hover:shadow-lg transition-all duration-300 overflow-hidden",
        getCategoryStyle(),
        event.important ? "ring-2 ring-sikh-amber" : ""
      )}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg md:text-xl font-bold flex items-center gap-2">
              {getCategoryIcon()}
              {title}
            </CardTitle>
            <span className="text-sm font-semibold bg-sikh-blue text-white px-3 py-1 rounded-full shadow-sm flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {event.year}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base">{description}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs uppercase tracking-wide px-2 py-1 bg-gray-100 rounded-full shadow-sm flex items-center gap-1">
              {getCategoryIcon()}
              {category}
            </span>
            {event.important && (
              <span className="text-xs uppercase tracking-wide px-2 py-1 bg-sikh-amber text-sikh-blue rounded-full shadow-sm flex items-center gap-1">
                <Star className="w-3 h-3" />
                {language === 'en' ? 'Important' : 'ਮਹੱਤਵਪੂਰਨ'}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineEvent;
