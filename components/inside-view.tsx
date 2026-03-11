"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, CheckSquare, LineChart } from "lucide-react";
import Image from "next/image";

const tabs = [
  {
    id: "chat",
    label: "Умный чат",
    icon: MessageSquare,
    image:
      "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop",
    description:
      "Задавай любые вопросы по биологии. AI-ментор объяснит сложную тему простым языком и приведет примеры.",
  },
  {
    id: "tasks",
    label: "Разбор задач",
    icon: CheckSquare,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
    description:
      "Решай задания второй части. ИИ проверит твой ответ по критериям ФИПИ и покажет, где можно потерять баллы.",
  },
  {
    id: "progress",
    label: "Твой прогресс",
    icon: LineChart,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    description:
      "Следи за своим ростом. Платформа анализирует твои ошибки и подсвечивает темы, которые нужно повторить.",
  },
];

export function InsideView() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                isActive
                  ? "bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-2xl shadow-zinc-200/50 aspect-[16/10] md:aspect-[21/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="relative flex-1 w-full h-full">
              <Image
                src={activeContent.image}
                alt={activeContent.label}
                fill
                className="object-cover opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {activeContent.label}
                  </h3>
                  <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                    {activeContent.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
