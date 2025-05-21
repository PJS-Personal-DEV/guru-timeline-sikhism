
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { sikhHistory } from '@/data/sikhHistory';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft, Save } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface EventEditorProps {
  eventId: string | null;
  isNew: boolean;
  onBack: () => void;
}

const EventEditor: React.FC<EventEditorProps> = ({ eventId, isNew, onBack }) => {
  const { t, currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'english' | 'punjabi'>('english');
  
  // Find the event if we're editing
  const existingEvent = eventId 
    ? sikhHistory.find(event => event.id === eventId) 
    : null;
  
  // Define the event form state
  const [formData, setFormData] = useState({
    id: existingEvent?.id || `event_${Date.now()}`,
    year: existingEvent?.year || new Date().getFullYear(),
    title_en: existingEvent?.title_en || '',
    title_pa: existingEvent?.title_pa || '',
    description_en: existingEvent?.description_en || '',
    description_pa: existingEvent?.description_pa || '',
    category: existingEvent?.category || 'general',
    importance: existingEvent?.importance || 'medium',
  });
  
  useEffect(() => {
    // Set initial tab based on current language
    setActiveTab(currentLanguage === 'en' ? 'english' : 'punjabi');
  }, [currentLanguage]);
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'year' ? Number(value) : value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.title_en || !formData.title_pa) {
      toast({
        title: t('validationError'),
        description: t('titleRequired'),
        variant: 'destructive'
      });
      return;
    }
    
    if (!formData.year) {
      toast({
        title: t('validationError'),
        description: t('yearRequired'),
        variant: 'destructive'
      });
      return;
    }
    
    // In a real app, we would save to a database here
    // For now, just show a success toast
    toast({
      title: isNew ? t('eventCreated') : t('eventUpdated'),
      description: isNew 
        ? t('eventCreatedDescription') 
        : t('eventUpdatedDescription'),
    });
    
    // Go back to the events list
    onBack();
  };
  
  return (
    <div>
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('back')}
        </Button>
        <h1 className="text-2xl font-bold text-sikh-blue">
          {isNew ? t('createNewEvent') : t('editEvent')}
        </h1>
      </div>
      
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>{isNew ? t('createNewEvent') : t('editEvent')}</CardTitle>
            <CardDescription>
              {t('eventEditorDescription')}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="year">{t('year')}</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  min="1400"
                  max="2100"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="category">{t('category')}</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleSelectChange('category', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectCategory')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">{t('general')}</SelectItem>
                    <SelectItem value="guru">{t('guru')}</SelectItem>
                    <SelectItem value="battle">{t('battle')}</SelectItem>
                    <SelectItem value="martyrdom">{t('martyrdom')}</SelectItem>
                    <SelectItem value="historical">{t('historical')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="importance">{t('importance')}</Label>
                <Select
                  value={formData.importance}
                  onValueChange={(value) => handleSelectChange('importance', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectImportance')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">{t('low')}</SelectItem>
                    <SelectItem value="medium">{t('medium')}</SelectItem>
                    <SelectItem value="high">{t('high')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'english' | 'punjabi')}>
              <TabsList className="mb-4">
                <TabsTrigger value="english">English</TabsTrigger>
                <TabsTrigger value="punjabi">ਪੰਜਾਬੀ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="english" className="space-y-4">
                <div>
                  <Label htmlFor="title_en">{t('titleEnglish')}</Label>
                  <Input
                    id="title_en"
                    name="title_en"
                    value={formData.title_en}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description_en">{t('descriptionEnglish')}</Label>
                  <Textarea
                    id="description_en"
                    name="description_en"
                    value={formData.description_en}
                    onChange={handleInputChange}
                    rows={6}
                    required
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="punjabi" className="space-y-4">
                <div>
                  <Label htmlFor="title_pa">{t('titlePunjabi')}</Label>
                  <Input
                    id="title_pa"
                    name="title_pa"
                    value={formData.title_pa}
                    onChange={handleInputChange}
                    required
                    className="font-punjabi"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description_pa">{t('descriptionPunjabi')}</Label>
                  <Textarea
                    id="description_pa"
                    name="description_pa"
                    value={formData.description_pa}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="font-punjabi"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack}
            >
              {t('cancel')}
            </Button>
            <Button 
              type="submit"
              className="bg-sikh-amber hover:bg-sikh-gold"
            >
              <Save className="h-4 w-4 mr-2" />
              {isNew ? t('createEvent') : t('saveChanges')}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default EventEditor;
