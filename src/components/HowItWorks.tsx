import React from 'react';
import { Type, PenTool, Timer, Download } from 'lucide-react';

const steps = [
  {
    icon: Type,
    title: 'Введите тему',
    description: 'Опишите тему вашей презентации и укажите ключевые моменты'
  },
  {
    icon: PenTool,
    title: 'Выберите шаблон',
    description: 'Выберите подходящий шаблон из нашей коллекции'
  },
  {
    icon: Timer,
    title: 'Подождите минуту',
    description: 'Наш ИИ создаст структурированную презентацию'
  },
  {
    icon: Download,
    title: 'Скачайте результат',
    description: 'Получите готовую презентацию в PowerPoint или PDF'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Создание презентации с Slaydlar - это простой и быстрый процесс
            из четырех шагов
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-indigo-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}