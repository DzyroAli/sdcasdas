import React from 'react';
import { Presentation, Sparkles, Download } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Presentation className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">Slaydlar</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Возможности</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">Как это работает</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Цены</a>
          </nav>
          <div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Попробовать бесплатно
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}