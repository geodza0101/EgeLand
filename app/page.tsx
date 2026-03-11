import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Brain,
  Target,
  Dna,
  Gamepad2,
} from "lucide-react";
import { InsideView } from "@/components/inside-view";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative p-4 md:p-6 h-screen min-h-[800px]">
        <div className="relative w-full h-full rounded-[3rem] border-4 border-white overflow-hidden flex flex-col shadow-sm">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1530213786676-4189f1756947?q=80&w=2940&auto=format&fit=crop"
              alt="Biology Background"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Subtle gradient to ensure text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Header */}
          <header className="relative z-10 flex items-center justify-between p-8 md:px-12">
            <div className="text-3xl font-bold tracking-tighter text-white">
              BioGenius
            </div>
            <nav className="hidden md:flex items-center gap-12 text-sm font-semibold text-white uppercase tracking-wider">
              <a
                href="#comparison"
                className="hover:text-emerald-300 transition-colors"
              >
                Сравнение
              </a>
              <a
                href="#features"
                className="hover:text-emerald-300 transition-colors"
              >
                Фичи
              </a>
              <a
                href="#platform"
                className="hover:text-emerald-300 transition-colors"
              >
                Платформа
              </a>
              <a
                href="#pricing"
                className="hover:text-emerald-300 transition-colors"
              >
                Тарифы
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-emerald-300 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-end justify-between p-8 md:p-16 pb-12 md:pb-24">
            {/* Left side cards (like reference) */}
            <div className="hidden lg:flex gap-8 mb-8 md:mb-0 self-center lg:self-end">
              <div className="bg-white text-zinc-900 p-8 rounded-t-3xl rounded-br-3xl w-64 shadow-2xl">
                <Brain className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold mb-6">AI-Ментор</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                      Доступность
                    </div>
                    <div className="text-sm font-medium">24/7 без выходных</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                      Скорость ответа
                    </div>
                    <div className="text-sm font-medium">Мгновенно</div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center justify-between cursor-pointer hover:text-emerald-600 transition-colors">
                  <span className="text-sm font-bold">Подробнее</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="text-white self-end pb-8 space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5" />
                    <h3 className="text-xl font-bold">Практика</h3>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    База заданий
                  </div>
                  <div className="text-sm font-medium">10 000+ тестов</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Dna className="w-5 h-5" />
                    <h3 className="text-xl font-bold">Теория</h3>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    Формат
                  </div>
                  <div className="text-sm font-medium">Без воды, по ФИПИ</div>
                </div>
              </div>
            </div>

            {/* Right side main text */}
            <div className="max-w-2xl lg:text-right flex flex-col lg:items-end w-full lg:w-auto">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-white leading-[0.9] tracking-tighter mb-8">
                Готовься к сотке
                <br />
                без стресса.
              </h1>

              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center text-left">
                <div className="max-w-sm">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Твой личный AI-репетитор
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Умные тесты и понятная теория в одном месте. Мы покажем, где
                    у тебя пробелы, и поможем их закрыть.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full lg:w-auto">
                  <button className="bg-white text-zinc-900 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors whitespace-nowrap">
                    Начать бесплатно
                  </button>
                  <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors whitespace-nowrap">
                    Войти
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-12 hidden md:flex items-center gap-4 text-white text-xs font-bold uppercase tracking-widest">
            <span>Scroll Down</span>
            <div className="w-12 h-[2px] bg-white" />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight text-zinc-900">
            Почему BioGenius работает лучше зубрежки?
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Перестань тратить деньги и время впустую. Получай быструю обратную
            связь и учись эффективнее.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Classic */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-semibold mb-8 text-zinc-500">
              Обычная подготовка
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span className="text-zinc-700 text-lg">
                  Ждешь проверку от учителя неделю
                </span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span className="text-zinc-700 text-lg">
                  Решаешь скучные варианты на бумаге
                </span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span className="text-zinc-700 text-lg">
                  Гуглишь непонятное часами
                </span>
              </li>
            </ul>
          </div>

          {/* BioGenius */}
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
            <h3 className="text-2xl font-semibold mb-8 text-emerald-600">
              С BioGenius
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-zinc-900 text-lg font-medium">
                  AI проверяет твои ответы мгновенно
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-zinc-900 text-lg font-medium">
                  Платформа сама собирает задания по твоим слабым темам
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-zinc-900 text-lg font-medium">
                  Задаешь вопрос AI-ментору и сразу получаешь разбор
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-4 md:px-8 bg-zinc-50/50 border-y border-zinc-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight text-zinc-900">
              Всё для твоей сотки
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Мы продумали каждый шаг подготовки, чтобы ты не тратил время на
              воду и не слился на полпути.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-emerald-500/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <Brain className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-900">
                Суть без воды
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Только та теория, которая реально встретится на ЕГЭ. Прочитал —
                сразу закрепил мини-тестом.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-emerald-500/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <Target className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-900">
                Реальные тесты
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Полная симуляция ЕГЭ с таймером и вторая часть с подробным
                объяснением от ИИ — как будто сидишь рядом с экспертом.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-emerald-500/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <Dna className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-900">
                Генетика без слез
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Пошаговые разборы задач 22 типа. Научим оформлять так, чтобы не
                сняли ни одного балла.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-emerald-500/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <Gamepad2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-900">
                Готовься играя
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Прокачивай уровень, собирай награды и делай серию дней (streak)
                — чтобы учиться было так же интересно, как листать ленту.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inside View Section */}
      <section id="platform" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight text-zinc-900">
            Посмотри, как выглядит твоя будущая 100-балльная подготовка
          </h2>
        </div>
        <InsideView />
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 px-4 md:px-8 bg-zinc-50/50 border-y border-zinc-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight text-zinc-900">
              Твои инвестиции в бюджетное место
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Дешевле, чем один месяц с репетитором. Попробуй 3 дня бесплатно,
              отмени в любой момент.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 1 Month */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col shadow-sm">
              <h3 className="text-xl font-medium text-zinc-500 mb-2">
                1 месяц
              </h3>
              <div className="text-4xl font-bold text-zinc-900 mb-6">
                2 990 ₽
                <span className="text-lg text-zinc-400 font-normal">/мес</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Полный
                  доступ к теории
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
                  Безлимитный AI-ментор
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Проверка
                  второй части
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors">
                Выбрать тариф
              </button>
            </div>

            {/* 3 Months (Popular) */}
            <div className="bg-white border-2 border-emerald-500 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-xl shadow-emerald-900/5">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Хит продаж
              </div>
              <h3 className="text-xl font-medium text-emerald-600 mb-2">
                3 месяца
              </h3>
              <div className="text-4xl font-bold text-zinc-900 mb-2">
                2 490 ₽
                <span className="text-lg text-zinc-400 font-normal">/мес</span>
              </div>
              <div className="text-sm text-zinc-400 mb-6 line-through">
                8 970 ₽
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Полный
                  доступ к теории
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
                  Безлимитный AI-ментор
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Проверка
                  второй части
                </li>
                <li className="flex items-center gap-3 text-zinc-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
                  Индивидуальный план
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/20">
                Начать 3 дня бесплатно
              </button>
            </div>

            {/* 6 Months */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col shadow-sm">
              <h3 className="text-xl font-medium text-zinc-500 mb-2">
                6 месяцев
              </h3>
              <div className="text-4xl font-bold text-zinc-900 mb-2">
                1 990 ₽
                <span className="text-lg text-zinc-400 font-normal">/мес</span>
              </div>
              <div className="text-sm text-zinc-400 mb-6 line-through">
                17 940 ₽
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Полный
                  доступ ко всем функциям
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
                  Приоритетная поддержка
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Гарантия
                  результата*
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl font-semibold bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors">
                Выбрать тариф
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight text-zinc-900">
            Остались вопросы?
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Убедись, что BioGenius — это именно то, что тебе нужно для успешной
            сдачи ЕГЭ.
          </p>
        </div>
        <FAQ />
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-zinc-200 text-center text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold text-zinc-900">BioGenius</div>
          <p>© 2026 BioGenius. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Оферта
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
