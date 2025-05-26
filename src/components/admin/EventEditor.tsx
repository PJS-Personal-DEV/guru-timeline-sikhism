
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
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Save, Plus, X, Edit } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface EventEditorProps {
  eventId: string | null;
  isNew: boolean;
  onBack: () => void;
  onSave?: (eventData: any) => void;
}

const EventEditor: React.FC<EventEditorProps> = ({ eventId, isNew, onBack, onSave }) => {
  const { t, currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'english' | 'punjabi'>('english');
  const [newTag, setNewTag] = useState('');
  const [editingTagIndex, setEditingTagIndex] = useState<number | null>(null);
  const [editingTagValue, setEditingTagValue] = useState('');
  
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
    important: existingEvent?.important || false,
    tags: existingEvent?.tags || [],
  });
  
  useEffect(() => {
    setActiveTab(currentLanguage === 'en' ? 'english' : 'punjabi');
  }, [currentLanguage]);
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'year' ? Number(value) : value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    if (name === 'important') {
      setFormData(prev => ({ ...prev, [name]: value === 'true' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Tag management functions
  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const startEditingTag = (index: number) => {
    setEditingTagIndex(index);
    setEditingTagValue(formData.tags[index]);
  };

  const saveEditingTag = () => {
    if (editingTagValue.trim() && editingTagIndex !== null) {
      const newTags = [...formData.tags];
      newTags[editingTagIndex] = editingTagValue.trim();
      setFormData(prev => ({ ...prev, tags: newTags }));
      setEditingTagIndex(null);
      setEditingTagValue('');
    }
  };

  const cancelEditingTag = () => {
    setEditingTagIndex(null);
    setEditingTagValue('');
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
    
    // Call the onSave callback if provided (for immediate reflection)
    if (onSave) {
      onSave(formData);
    }
    
    toast({
      title: isNew ? t('eventCreated') : t('eventUpdated'),
      description: isNew 
        ? t('eventCreatedDescription') 
        : t('eventUpdatedDescription'),
    });
    
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
                    <SelectItem value="temple">{t('temple')}</SelectItem>
                    <SelectItem value="scripture">{t('scripture')}</SelectItem>
                    <SelectItem value="political">{t('political')}</SelectItem>
                    <SelectItem value="establishment">{t('establishment')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="important">{t('importance')}</Label>
                <Select
                  value={String(formData.important)}
                  onValueChange={(value) => handleSelectChange('important', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectImportance')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="false">{t('low')}</SelectItem>
                    <SelectItem value="true">{t('high')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tag Management Section */}
            <div>
              <Label>Tags</Label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a new tag..."
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <div key={index} className="flex items-center">
                      {editingTagIndex === index ? (
                        <div className="flex items-center gap-1">
                          <Input
                            value={editingTagValue}
                            onChange={(e) => setEditingTagValue(e.target.value)}
                            className="h-8 w-24"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                saveEditingTag();
                              } else if (e.key === 'Escape') {
                                cancelEditingTag();
                              }
                            }}
                            autoFocus
                          />
                          <Button type="button" size="sm" variant="ghost" onClick={saveEditingTag}>
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button type="button" size="sm" variant="ghost" onClick={cancelEditingTag}>
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ) : (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="h-4 w-4 p-0 hover:bg-transparent"
                            onClick={() => startEditingTag(index)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            className="h-4 w-4 p-0 hover:bg-transparent"
                            onClick={() => removeTag(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
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
