"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "А если ИИ мне неправильно объяснит?",
    answer:
      'Мы используем передовые модели (Gemini Flash), обученные на нашей проверенной базе теории. Каждый ответ проходит дополнительную фильтрацию, чтобы исключить "галлюцинации" нейросети. Кроме того, все материалы составлены экспертами ЕГЭ.',
  },
  {
    question: "С чего начать подготовку?",
    answer:
      "Сразу после регистрации платформа даст тебе короткий тест на определение уровня и слабых тем. На основе результатов BioGenius составит персональную подборку материалов и заданий, чтобы ты начал закрывать пробелы с первого дня.",
  },
  {
    question: "Можно ли отменить подписку?",
    answer:
      "Да, ты можешь отменить подписку в любой момент в личном кабинете. Если ты отменишь подписку во время бесплатного 3-дневного периода, деньги не спишутся.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen ? "bg-emerald-50/50 border-emerald-200 shadow-sm" : "bg-white border-zinc-200 hover:border-zinc-300"}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className={`text-lg font-medium transition-colors ${isOpen ? "text-emerald-900" : "text-zinc-900"}`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180 text-emerald-500" : "text-zinc-400"}`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
