
import { useState, useEffect } from 'react';
import { sikhHistory, TimelineEvent } from '@/data/sikhHistory';

const STORAGE_KEY = 'sikh_history_events';

export const useEventManagement = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load events from localStorage or use default data
  useEffect(() => {
    const savedEvents = localStorage.getItem(STORAGE_KEY);
    if (savedEvents) {
      try {
        const parsedEvents = JSON.parse(savedEvents);
        setEvents(parsedEvents);
      } catch (error) {
        console.error('Error parsing saved events:', error);
        setEvents(sikhHistory);
      }
    } else {
      setEvents(sikhHistory);
    }
    setIsLoading(false);
  }, []);

  // Save events to localStorage whenever events change
  const saveEvents = (newEvents: TimelineEvent[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newEvents));
    setEvents(newEvents);
  };

  const addEvent = (event: TimelineEvent) => {
    const newEvents = [...events, event];
    saveEvents(newEvents);
    return event;
  };

  const updateEvent = (eventId: string, updatedEvent: TimelineEvent) => {
    const newEvents = events.map(event => 
      event.id === eventId ? updatedEvent : event
    );
    saveEvents(newEvents);
    return updatedEvent;
  };

  const deleteEvent = (eventId: string) => {
    const newEvents = events.filter(event => event.id !== eventId);
    saveEvents(newEvents);
  };

  const getEvent = (eventId: string) => {
    return events.find(event => event.id === eventId);
  };

  return {
    events,
    isLoading,
    addEvent,
    updateEvent,
    deleteEvent,
    getEvent,
    refreshEvents: () => setEvents([...events])
  };
};
