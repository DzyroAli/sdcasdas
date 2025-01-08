import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Базовый',
    price: '0',
    features: [
      '5 презентаций в месяц',
      'Базовые шаблоны',
      'Экспорт в PDF',
      'Поддержка по email'
    ]
  },
  {
    name: 'Про',
    price: '1990',
    features: [
      'Безлимитные презентации',
      'Премиум шаблоны',
      'Экспорт в PowerPoint и PDF',
      'Приоритетная поддержка',
      'Настройка брендинга',
      'API доступ'
    ]
  },
  {
    name: 'Бизнес',
    price: '4990',
    features: [
      'Все функции Про плана',
      'Командный доступ',
      'Аналитика использования',
      'Персональный менеджер',
      'SLA гарантии',
      'Обучение команды'
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Тарифные планы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите план, который подходит именно вам
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.price !== '0' && <span className="text-gray-600">₽/мес</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 px-4 rounded-lg transition-colors ${
                index === 1 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Выбрать план
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}