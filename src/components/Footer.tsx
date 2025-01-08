import React from 'react';
import { Presentation } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Presentation className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold">Slaydlar</span>
            </div>
            <p className="text-gray-400">
              Создавайте профессиональные презентации с помощью искусственного интеллекта
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Возможности</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Цены</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Карьера</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Документация</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Помощь</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Slaydlar. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}