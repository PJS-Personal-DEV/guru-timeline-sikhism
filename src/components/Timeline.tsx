
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import TimelineEvent from './TimelineEvent';
import { useEventManagement } from '@/hooks/useEventManagement';
import { TimelineEvent as TimelineEventType } from '@/data/sikhHistory';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Calendar, Users, Sword, Crown, BookOpen, Building, Scroll, MapPin, Star, Loader2 } from 'lucide-react';

const Timeline = () => {
  const { t, currentLanguage } = useLanguage();
  const { events, isLoading } = useEventManagement();
  const [filteredEvents, setFilteredEvents] = useState<TimelineEventType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImportance, setSelectedImportance] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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
  }, [events, searchTerm, selectedCategory, selectedImportance, sortOrder, currentLanguage]);

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
          Explore the rich history of Sikhism through major events and milestones
        </p>
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
            variant={selectedCategory === 'all' && selectedImportance === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedImportance('all');
              setSearchTerm('');
            }}
          >
            Clear Filters
          </Button>
          {selectedCategory !== 'all' && (
            <div className="flex items-center bg-sikh-amber/10 text-sikh-blue px-3 py-1 rounded-full text-sm">
              <Filter className="w-3 h-3 mr-1" />
              {selectedCategory}
            </div>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sikh-amber via-sikh-gold to-sikh-amber"></div>
        
        <div className="space-y-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => {
              const IconComponent = categoryIcons[event.category] || Calendar;
              return (
                <TimelineEvent
                  key={event.id}
                  event={event}
                  isLeft={index % 2 === 0}
                  icon={<IconComponent className="w-5 h-5" />}
                />
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
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
        </div>
      )}
    </div>
  );
};

export default Timeline;
