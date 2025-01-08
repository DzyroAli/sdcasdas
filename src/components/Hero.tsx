import React from 'react';
import { Presentation, Sparkles, Clock } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Создавайте презентации с помощью{' '}
            <span className="text-indigo-600">искусственного интеллекта</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Генерируйте профессиональные презентации за считанные минуты. Просто введите тему,
            и наш ИИ создаст впечатляющую презентацию для вас.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Создать презентацию</span>
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}