
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sikh-blue text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sikh History Timeline</h3>
            <p className="text-sm">
              Exploring the rich history of Sikhism from its founding by Guru Nanak Dev Ji in 1469 
              through significant historical events until modern times.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-sikh-amber transition-colors">Home</a></li>
              <li><a href="#" className="text-sm hover:text-sikh-amber transition-colors">About Sikhism</a></li>
              <li><a href="#" className="text-sm hover:text-sikh-amber transition-colors">The Ten Gurus</a></li>
              <li><a href="#" className="text-sm hover:text-sikh-amber transition-colors">Important Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.sikhnet.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sikh-amber transition-colors">SikhNet</a></li>
              <li><a href="https://www.sikh-history.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sikh-amber transition-colors">Sikh History</a></li>
              <li><a href="https://www.sikhs.org/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sikh-amber transition-colors">Sikhs.org</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} Sikh History Timeline. All rights reserved.</p>
          <p className="text-sm mt-2 md:mt-0">Created with respect for Sikh history and traditions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
