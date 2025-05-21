
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-sikh-blue text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-sikh-amber flex items-center justify-center mr-3">
              <span className="text-sikh-blue text-xl font-bold">ੴ</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-header">Sikh History Timeline</h1>
              <p className="text-sm md:text-base text-sikh-amber">1469 - 2010: A Journey Through Time</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" className="hover:bg-sikh-amber hover:text-sikh-blue">About</Button>
            <Button variant="outline" className="border-sikh-amber text-sikh-amber hover:bg-sikh-amber hover:text-sikh-blue">Explore</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
