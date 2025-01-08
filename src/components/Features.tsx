import React from 'react';
import { Clock, Layout, Globe, FileOutput, Palette, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Быстрая генерация',
    description: 'Создавайте презентации за считанные минуты вместо часов работы'
  },
  {
    icon: Layout,
    title: 'Готовые шаблоны',
    description: 'Множество профессиональных шаблонов на выбор'
  },
  {
    icon: Globe,
    title: 'Мультиязычность',
    description: 'Поддержка презентаций на разных языках'
  },
  {
    icon: FileOutput,
    title: 'Экспорт',
    description: 'Сохраняйте в PowerPoint и PDF форматах'
  },
  {
    icon: Palette,
    title: 'Кастомизация',
    description: 'Настраивайте дизайн под свой бренд'
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Защита ваших данных и конфиденциальность'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Возможности платформы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Slaydlar предоставляет все необходимые инструменты для создания
            профессиональных презентаций без лишних усилий
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}