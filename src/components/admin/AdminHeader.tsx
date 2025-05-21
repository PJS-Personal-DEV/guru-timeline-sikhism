
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdminHeaderProps {
  onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onLogout }) => {
  const { t, currentLanguage, toggleLanguage } = useLanguage();
  
  return (
    <header className="bg-sikh-blue text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-semibold hover:text-sikh-amber transition-colors">
            {t('sikhHistoryTimeline')}
          </Link>
          <span className="px-3 py-1 bg-sikh-amber text-sikh-blue rounded-md font-medium">
            {t('adminPanel')}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-sikh-blue/80"
            onClick={toggleLanguage}
          >
            {currentLanguage === 'en' ? 'ਪੰਜਾਬੀ' : 'English'}
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-sikh-blue/80"
            onClick={onLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {t('logout')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
