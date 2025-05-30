
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import EventsList from '@/components/admin/EventsList';
import EventEditor from '@/components/admin/EventEditor';
import AdminLogin from '@/components/admin/AdminLogin';
import PasswordChange from '@/components/admin/PasswordChange';

const Admin = () => {
  const { t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'list' | 'editor' | 'create' | 'password'>('list');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_token', 'dummy_token');
    }
  };

  const handleSelectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    setActiveView('editor');
  };

  const handleCreateNew = () => {
    setSelectedEventId(null);
    setActiveView('create');
  };

  const handlePasswordChange = () => {
    setActiveView('password');
  };

  const handleBackToList = () => {
    setActiveView('list');
    setSelectedEventId(null);
  };

  const handleEventSave = (eventData: any) => {
    console.log('Event saved:', eventData);
    // The data is automatically persisted by the useEventManagement hook
    // The Timeline component will automatically reflect the changes
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader onLogout={handleLogout} />
      <div className="flex">
        <AdminSidebar 
          onCreateNew={handleCreateNew}
          onViewList={() => setActiveView('list')}
          onPasswordChange={handlePasswordChange}
          activeView={activeView}
        />
        <div className="flex-1 p-6">
          {activeView === 'list' && (
            <EventsList 
              onSelectEvent={handleSelectEvent} 
              onCreateNew={handleCreateNew}
            />
          )}
          {(activeView === 'editor' || activeView === 'create') && (
            <EventEditor 
              eventId={selectedEventId}
              isNew={activeView === 'create'}
              onBack={handleBackToList}
              onSave={handleEventSave}
            />
          )}
          {activeView === 'password' && (
            <PasswordChange />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
