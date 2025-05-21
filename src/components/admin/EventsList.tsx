
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { sikhHistory } from '@/data/sikhHistory';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Edit, Plus, Search, Trash2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface EventsListProps {
  onSelectEvent: (eventId: string) => void;
  onCreateNew: () => void;
}

const EventsList: React.FC<EventsListProps> = ({ onSelectEvent, onCreateNew }) => {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState(sikhHistory);
  
  // In a real app, we'd persist this to a database
  const handleDeleteEvent = (eventId: string) => {
    if (confirm(t('confirmDelete'))) {
      // For demo purposes, we'll just filter the events in memory
      setEvents(events.filter(event => event.id !== eventId));
      toast({
        title: t('eventDeleted'),
        description: t('eventDeletedDescription'),
      });
    }
  };
  
  const filteredEvents = events.filter(event => {
    const title = currentLanguage === 'en' ? event.title_en : event.title_pa;
    const year = event.year.toString();
    
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      year.includes(searchTerm)
    );
  });
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-sikh-blue">{t('manageEvents')}</h1>
        <Button 
          onClick={onCreateNew}
          className="bg-sikh-amber hover:bg-sikh-gold text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          {t('createNewEvent')}
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            className="pl-10"
            placeholder={t('searchEvents')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">{t('year')}</TableHead>
              <TableHead>{t('title')}</TableHead>
              <TableHead className="w-28">{t('category')}</TableHead>
              <TableHead className="w-28 text-right">{t('actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.year}</TableCell>
                  <TableCell>
                    {currentLanguage === 'en' ? event.title_en : event.title_pa}
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sikh-amber/20 text-sikh-blue">
                      {event.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onSelectEvent(event.id)}
                      className="h-8 w-8 p-0 mr-2"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteEvent(event.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                  {t('noEventsFound')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EventsList;
