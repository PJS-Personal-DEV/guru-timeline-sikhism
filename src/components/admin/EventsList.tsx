
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEventManagement } from '@/hooks/useEventManagement';
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
import { Edit, Plus, Search, Trash2, Tag, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface EventsListProps {
  onSelectEvent: (eventId: string) => void;
  onCreateNew: () => void;
}

const EventsList: React.FC<EventsListProps> = ({ onSelectEvent, onCreateNew }) => {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const { events, deleteEvent, isLoading } = useEventManagement();
  
  const handleDeleteEvent = (eventId: string) => {
    if (confirm(t('confirmDelete'))) {
      deleteEvent(eventId);
      toast({
        title: t('eventDeleted'),
        description: t('eventDeletedDescription'),
      });
    }
  };
  
  const filteredEvents = events.filter(event => {
    const title = currentLanguage === 'en' ? event.title_en : event.title_pa;
    const year = event.year.toString();
    const tags = event.tags?.join(' ') || '';
    
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      year.includes(searchTerm) ||
      tags.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-sikh-blue" />
        <span className="ml-2 text-sikh-blue">Loading events...</span>
      </div>
    );
  }
  
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
              <TableHead className="w-32">Tags</TableHead>
              <TableHead className="w-28 text-right">{t('actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.year}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {currentLanguage === 'en' ? event.title_en : event.title_pa}
                      {event.important && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-sikh-amber/20 text-sikh-blue">
                          Important
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sikh-amber/20 text-sikh-blue">
                      {event.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {event.tags?.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                          <Tag className="w-2 h-2 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {event.tags && event.tags.length > 2 && (
                        <span className="text-xs text-gray-500">+{event.tags.length - 2}</span>
                      )}
                    </div>
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
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
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
