
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, FileText, Lock } from 'lucide-react';

interface AdminSidebarProps {
  onCreateNew: () => void;
  onViewList: () => void;
  onPasswordChange: () => void;
  activeView: 'list' | 'editor' | 'create' | 'password';
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  onCreateNew, 
  onViewList,
  onPasswordChange,
  activeView
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="w-64 bg-white h-[calc(100vh-4rem)] p-4 shadow-md border-r border-gray-200">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-sikh-blue flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-sikh-amber" />
          {t('manageSikhHistory')}
        </h2>
      </div>
      
      <div className="space-y-2">
        <Button
          variant={activeView === 'list' ? "default" : "ghost"}
          className={`w-full justify-start ${activeView === 'list' ? "bg-sikh-amber text-white hover:bg-sikh-gold" : ""}`}
          onClick={onViewList}
        >
          <FileText className="h-4 w-4 mr-2" />
          {t('allEvents')}
        </Button>
        
        <Button
          variant={activeView === 'create' ? "default" : "outline"}
          className={`w-full justify-start ${activeView === 'create' ? "bg-sikh-amber text-white hover:bg-sikh-gold" : ""}`}
          onClick={onCreateNew}
        >
          <Plus className="h-4 w-4 mr-2" />
          {t('createNewEvent')}
        </Button>

        <Button
          variant={activeView === 'password' ? "default" : "ghost"}
          className={`w-full justify-start ${activeView === 'password' ? "bg-sikh-amber text-white hover:bg-sikh-gold" : ""}`}
          onClick={onPasswordChange}
        >
          <Lock className="h-4 w-4 mr-2" />
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
