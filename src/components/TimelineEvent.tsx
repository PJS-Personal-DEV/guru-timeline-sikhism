
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TimelineEvent as TimelineEventType } from '../data/sikhHistory';
import { cn } from '@/lib/utils';

interface TimelineEventProps {
  event: TimelineEventType;
  index: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, index }) => {
  // Determine category-based styling
  const getCategoryStyle = () => {
    switch (event.category) {
      case 'guru':
        return 'border-l-4 border-sikh-amber';
      case 'battle':
        return 'border-l-4 border-red-600';
      case 'temple':
        return 'border-l-4 border-sikh-gold';
      case 'scripture':
        return 'border-l-4 border-blue-500';
      case 'political':
        return 'border-l-4 border-green-600';
      default:
        return 'border-l-4 border-gray-400';
    }
  };

  const isEven = index % 2 === 0;

  return (
    <div 
      className={cn(
        "timeline-event w-full md:w-[45%] mb-8 animate-fade-in",
        isEven ? "md:ml-auto md:pl-6 md:pr-0" : "md:mr-auto md:pr-6 md:pl-0"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className={cn(
        "hover:shadow-lg transition-all duration-300",
        getCategoryStyle(),
        event.important ? "ring-2 ring-sikh-amber" : ""
      )}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg md:text-xl font-bold">{event.title}</CardTitle>
            <span className="text-sm font-semibold bg-sikh-blue text-white px-2 py-1 rounded">{event.year}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base">{event.description}</p>
          <div className="mt-2 flex items-center">
            <span className="text-xs uppercase tracking-wide px-2 py-1 bg-gray-100 rounded-full">
              {event.category}
            </span>
            {event.important && (
              <span className="ml-2 text-xs uppercase tracking-wide px-2 py-1 bg-sikh-amber text-sikh-blue rounded-full">
                Important
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineEvent;
