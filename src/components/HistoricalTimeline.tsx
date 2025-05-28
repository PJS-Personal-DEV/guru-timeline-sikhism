
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { eras } from './EraTimelineSelector';
import { useEventManagement } from '@/hooks/useEventManagement';
import { TimelineEvent } from '@/data/sikhHistory';
import { cn } from '@/lib/utils';
import { Clock, Calendar, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HistoricalTimelineProps {
  selectedEra?: string;
  onEventSelect?: (event: TimelineEvent) => void;
}

const HistoricalTimeline: React.FC<HistoricalTimelineProps> = ({ 
  selectedEra = 'all',
  onEventSelect 
}) => {
  const { currentLanguage } = useLanguage();
  const { events } = useEventManagement();
  const [filteredEvents, setFilteredEvents] = useState<TimelineEvent[]>([]);
  const [timelineScale, setTimelineScale] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let filtered = [...events];

    // Filter by era
    if (selectedEra !== 'all') {
      const era = eras.find(e => e.id === selectedEra);
      if (era) {
        filtered = filtered.filter(event => 
          event.year >= era.startYear && event.year <= era.endYear
        );
      }
    }

    // Sort by year
    filtered.sort((a, b) => a.year - b.year);
    setFilteredEvents(filtered);
  }, [events, selectedEra]);

  const minYear = Math.min(...filteredEvents.map(e => e.year)) || 1400;
  const maxYear = Math.max(...filteredEvents.map(e => e.year)) || 2024;
  const timeSpan = maxYear - minYear;

  const getEventPosition = (year: number) => {
    return ((year - minYear) / timeSpan) * 100;
  };

  const getEraForYear = (year: number) => {
    return eras.find(era => year >= era.startYear && year <= era.endYear);
  };

  const handleZoomIn = () => {
    setTimelineScale(prev => Math.min(prev * 1.5, 5));
  };

  const handleZoomOut = () => {
    setTimelineScale(prev => Math.max(prev / 1.5, 0.5));
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = 200;
    setScrollPosition(prev => {
      if (direction === 'left') {
        return Math.max(prev - scrollAmount, 0);
      } else {
        return prev + scrollAmount;
      }
    });
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-sikh-amber/20 overflow-hidden">
      {/* Timeline Controls */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-sikh-blue to-sikh-navy text-white">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Historical Timeline</h3>
          <Badge variant="secondary" className="bg-white/20 text-white">
            {filteredEvents.length} events
          </Badge>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            className="text-white hover:bg-white/20"
          >
            -
          </Button>
          <span className="text-sm px-2">
            {Math.round(timelineScale * 100)}%
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            className="text-white hover:bg-white/20"
          >
            +
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleScroll('left')}
            className="text-white hover:bg-white/20"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleScroll('right')}
            className="text-white hover:bg-white/20"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative h-32 bg-gradient-to-r from-gray-50 to-white overflow-x-auto">
        <div 
          className="relative h-full"
          style={{ 
            width: `${100 * timelineScale}%`,
            transform: `translateX(-${scrollPosition}px)`
          }}
        >
          {/* Era Background Sections */}
          {eras.map((era) => {
            const startPos = getEventPosition(era.startYear);
            const endPos = getEventPosition(era.endYear);
            const width = endPos - startPos;
            
            return (
              <div
                key={era.id}
                className={cn(
                  "absolute top-0 h-full opacity-20 border-r border-gray-300",
                  era.color
                )}
                style={{
                  left: `${startPos}%`,
                  width: `${width}%`
                }}
              >
                <div className="absolute bottom-2 left-2 text-xs font-medium text-gray-700">
                  {currentLanguage === 'en' ? era.name : era.name_pa}
                </div>
              </div>
            );
          })}

          {/* Main Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sikh-amber via-sikh-gold to-sikh-amber transform -translate-y-1/2"></div>

          {/* Year Markers */}
          {Array.from({ length: Math.ceil(timeSpan / 50) + 1 }, (_, i) => {
            const year = minYear + (i * 50);
            if (year <= maxYear) {
              const position = getEventPosition(year);
              return (
                <div
                  key={year}
                  className="absolute top-0 h-full"
                  style={{ left: `${position}%` }}
                >
                  <div className="w-px h-full bg-gray-300"></div>
                  <div className="absolute top-1 left-1 text-xs text-gray-500 font-medium">
                    {year}
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* Event Markers */}
          {filteredEvents.map((event, index) => {
            const position = getEventPosition(event.year);
            const era = getEraForYear(event.year);
            
            return (
              <div
                key={event.id}
                className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer group"
                style={{ left: `${position}%` }}
                onClick={() => onEventSelect?.(event)}
              >
                {/* Event Dot */}
                <div className={cn(
                  "w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 group-hover:scale-125",
                  event.important ? "bg-sikh-gold ring-2 ring-sikh-amber/50" : "bg-sikh-blue",
                  era ? era.color : "bg-gray-500"
                )}>
                  {event.important && (
                    <Star className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>

                {/* Event Tooltip */}
                <Card className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 min-w-48 shadow-xl">
                  <CardContent className="p-3">
                    <div className="text-sm font-semibold text-sikh-blue">
                      {currentLanguage === 'en' ? event.title_en : event.title_pa}
                    </div>
                    <div className="text-xs text-gray-600 mt-1 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.exactDate ? 
                        new Date(event.exactDate).toLocaleDateString() : 
                        event.year
                      }
                    </div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {currentLanguage === 'en' ? event.description_en : event.description_pa}
                    </div>
                    {event.important && (
                      <Badge className="mt-2 text-xs bg-sikh-amber text-sikh-blue">
                        Important
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline Legend */}
      <div className="p-4 bg-gray-50 border-t">
        <div className="flex flex-wrap gap-4 items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-sikh-blue"></div>
              <span>Regular Event</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-sikh-gold"></div>
              <span>Important Event</span>
            </div>
          </div>
          
          <div className="text-gray-600">
            Timeline: {minYear} - {maxYear} ({timeSpan} years)
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricalTimeline;
