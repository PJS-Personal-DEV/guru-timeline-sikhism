import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import TimelineEvent from './TimelineEvent';
import EraTimelineSelector, { eras } from './EraTimelineSelector';
import HistoricalTimeline from './HistoricalTimeline';
import { useEventManagement } from '@/hooks/useEventManagement';
import { TimelineEvent as TimelineEventType } from '@/data/sikhHistory';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Calendar, Users, Sword, Crown, BookOpen, Building, Scroll, MapPin, Star, Loader2, Clock } from 'lucide-react';

const EraTimeline = () => {
  const { t, currentLanguage } = useLanguage();
  const { events, isLoading } = useEventManagement();
  const [filteredEvents, setFilteredEvents] = useState<TimelineEventType[]>([]);
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImportance, setSelectedImportance] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEventType | null>(null);

  const categoryIcons = {
    guru: Users,
    battle: Sword,
    temple: Building,
    scripture: BookOpen,
    political: Crown,
    martyrdom: Star,
    historical: Calendar,
    establishment: MapPin,
    general: Calendar,
    other: Calendar
  };

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

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(event => {
        const title = currentLanguage === 'en' ? event.title_en : event.title_pa;
        const description = currentLanguage === 'en' ? event.description_en : event.description_pa;
        const tags = event.tags?.join(' ') || '';
        
        return (
          title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.year.toString().includes(searchTerm)
        );
      });
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Filter by importance
    if (selectedImportance !== 'all') {
      filtered = filtered.filter(event => 
        selectedImportance === 'important' ? event.important : !event.important
      );
    }

    // Sort by year
    filtered.sort((a, b) => {
      return sortOrder === 'asc' ? a.year - b.year : b.year - a.year;
    });

    setFilteredEvents(filtered);
  }, [events, selectedEra, searchTerm, selectedCategory, selectedImportance, sortOrder, currentLanguage]);

  const handleEventSelect = (event: TimelineEventType) => {
    setSelectedEvent(event);
    // Scroll to the event in the detailed timeline
    const eventElement = document.getElementById(`event-${event.id}`);
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-sikh-blue" />
          <span className="ml-2 text-sikh-blue">Loading timeline...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-sikh-blue mb-4 flex items-center justify-center">
          <Calendar className="w-8 h-8 mr-3 text-sikh-amber" />
          Sikh History Timeline
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the rich history of Sikhism through major eras and events
        </p>
      </div>

      {/* Era Timeline Selector */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-sikh-amber/20">
        <h3 className="text-xl font-bold text-sikh-blue mb-6 flex items-center justify-center">
          <Clock className="w-5 h-5 mr-2 text-sikh-amber" />
          Historical Eras
        </h3>
        <EraTimelineSelector 
          selectedEra={selectedEra} 
          onEraSelect={setSelectedEra} 
        />
      </div>

      {/* Enhanced Historical Timeline */}
      <div className="mb-8">
        <HistoricalTimeline 
          selectedEra={selectedEra}
          onEventSelect={handleEventSelect}
        />
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-sikh-amber/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="guru">Guru</SelectItem>
              <SelectItem value="battle">Battle</SelectItem>
              <SelectItem value="temple">Temple</SelectItem>
              <SelectItem value="scripture">Scripture</SelectItem>
              <SelectItem value="political">Political</SelectItem>
              <SelectItem value="martyrdom">Martyrdom</SelectItem>
              <SelectItem value="historical">Historical</SelectItem>
              <SelectItem value="establishment">Establishment</SelectItem>
              <SelectItem value="general">General</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedImportance} onValueChange={setSelectedImportance}>
            <SelectTrigger>
              <Star className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Select Importance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="important">Important Events</SelectItem>
              <SelectItem value="regular">Regular Events</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortOrder} onValueChange={(value: 'asc' | 'desc') => setSortOrder(value)}>
            <SelectTrigger>
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Oldest First</SelectItem>
              <SelectItem value="desc">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedEra === 'all' && selectedCategory === 'all' && selectedImportance === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => {
              setSelectedEra('all');
              setSelectedCategory('all');
              setSelectedImportance('all');
              setSearchTerm('');
            }}
          >
            Clear Filters
          </Button>
          {selectedEra !== 'all' && (
            <div className="flex items-center bg-sikh-amber/10 text-sikh-blue px-3 py-1 rounded-full text-sm">
              <Clock className="w-3 h-3 mr-1" />
              {eras.find(e => e.id === selectedEra)?.name}
            </div>
          )}
          {selectedCategory !== 'all' && (
            <div className="flex items-center bg-sikh-amber/10 text-sikh-blue px-3 py-1 rounded-full text-sm">
              <Filter className="w-3 h-3 mr-1" />
              {selectedCategory}
            </div>
          )}
        </div>
      </div>

      {/* Detailed Timeline Events */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sikh-amber via-sikh-gold to-sikh-amber shadow-lg hidden md:block"></div>
        
        {/* Mobile timeline line */}
        <div className="absolute left-8 h-full w-1 bg-gradient-to-b from-sikh-amber via-sikh-gold to-sikh-amber shadow-lg md:hidden"></div>
        
        <div className="space-y-12">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => {
              const IconComponent = categoryIcons[event.category] || Calendar;
              return (
                <div key={event.id} id={`event-${event.id}`} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-sikh-blue rounded-full border-4 border-white shadow-lg z-10 hidden md:flex items-center justify-center ${
                    selectedEvent?.id === event.id ? 'ring-4 ring-sikh-amber/50 scale-125' : ''
                  }`}>
                    <div className="w-2 h-2 bg-sikh-amber rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Mobile timeline dot */}
                  <div className={`absolute left-6 w-6 h-6 bg-sikh-blue rounded-full border-4 border-white shadow-lg z-10 md:hidden flex items-center justify-center ${
                    selectedEvent?.id === event.id ? 'ring-4 ring-sikh-amber/50 scale-125' : ''
                  }`}>
                    <div className="w-2 h-2 bg-sikh-amber rounded-full animate-pulse"></div>
                  </div>
                  
                  <TimelineEvent
                    event={event}
                    isLeft={index % 2 === 0}
                    icon={<IconComponent className="w-5 h-5" />}
                  />
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or selecting a different era</p>
            </div>
          )}
        </div>
      </div>

      {filteredEvents.length > 0 && (
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-sikh-amber/10 to-sikh-light rounded-xl border border-sikh-amber/20">
          <h3 className="text-xl font-bold text-sikh-blue mb-2">
            Total Events: {filteredEvents.length}
          </h3>
          <p className="text-gray-600">
            Timeline span: {Math.min(...filteredEvents.map(e => e.year))} - {Math.max(...filteredEvents.map(e => e.year))}
          </p>
          {selectedEra !== 'all' && (
            <p className="text-gray-500 mt-1">
              Showing events from: {eras.find(e => e.id === selectedEra)?.name}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default EraTimeline;
