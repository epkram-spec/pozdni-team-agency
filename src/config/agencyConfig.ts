import { TeamMember, PortfolioItem, PromoBannerConfig } from '../types';

export const AGENCY_CONFIG = {
  agencyName: "Pozdni Team Agency",
  taglineUa: "Креативна та стратегічна маркетингова команда",
  taglineEn: "Creative & Strategic Marketing Team",
  
  contacts: {
    phone: "+380665600324",
    phoneDisplay: "+38 (066) 560-03-24",
    email: "epkram@gmail.com",
    telegramUrl: "https://t.me/e_pozdnyakov",
    telegramHandle: "@e_pozdnyakov",
    locationUa: "Україна / Дистанційно по всьому світу",
    locationEn: "Ukraine / Worldwide Remote"
  },

  promoBanner: {
    active: true,
    badgeUa: "СПЕЦІАЛЬНА ПРОПОЗИЦІЯ",
    badgeEn: "SPECIAL OFFER",
    textUa: "Безкоштовний аудит вашої поточної маркетингової системи та візуалу при першому зверненні!",
    textEn: "Free audit of your current marketing system & visuals upon first consultation!",
    ctaTextUa: "Отримати аудит",
    ctaTextEn: "Get Audit"
  } as PromoBannerConfig,

  team: [
    {
      id: "evgen",
      name: "Євген",
      role: "Старший маркетолог / Senior Marketer",
      description: "Відповідає за бренд-стратегію, воронки продажів, аналітику та цільове позиціонування бізнесу. Перетворює хаотичні маркетингові дії у вимірювану систему.",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      skills: ["Маркетингова стратегія", "Аналітика & KPI", "Воронки продажів", "Позиціонування"]
    },
    {
      id: "tetyana",
      name: "Тетяна",
      role: "Графічна дизайнерка / Graphic Designer",
      description: "Створює візуальну ідентичність бренду: айдентику, логотипи, упакування, брендбуки та рекламні візуали. Формує стиль, який запам'ятовується та продає.",
      photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
      skills: ["Айдентика & Брендбук", "Графічний дизайн", "Упаковка", "SMM-візуали"]
    },
    {
      id: "olya",
      name: "Оля",
      role: "SMM-маркетологиня / SMM Marketer",
      description: "Розробляє контент-стратегії, веде соціальні мережі, планує Reels/Shorts та працює з ком'юніті. Забезпечує регулярну системну присутність бренду в медіапросторі.",
      photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
      skills: ["SMM-стратегія", "Контент-планування", "Reels / Shorts", "Ком'юніті-менеджмент"]
    }
  ] as TeamMember[],

  collaborationFormats: [
    {
      titleUa: "Окрема послуга",
      titleEn: "Single Service",
      descUa: "Точкове рішення вашого завдання: розробка логотипа, разовий аудит або створення контент-плану.",
      descEn: "Targeted solution for your task: logo design, one-time audit, or content calendar."
    },
    {
      titleUa: "Проєктна робота",
      titleEn: "Project-Based Work",
      descUa: "Розробка комплексного проєкту від ідеї до реалізації у фіксовані терміни (наприклад, упаковка нового бренду).",
      descEn: "Comprehensive project from concept to launch within a fixed deadline."
    },
    {
      titleUa: "Запуск або кампанія",
      titleEn: "Launch or Campaign",
      descUa: "Підготовка та проведення промо-кампанії, запуску нового продукту або сезонної акції.",
      descEn: "Preparing and executing promo campaigns, product launches, or seasonal sales."
    },
    {
      titleUa: "Регулярний супровід",
      titleEn: "Monthly Retainer",
      descUa: "Щомісячна системна робота над контентом, візуалом та рекламними матеріалами вашої компанії.",
      descEn: "Monthly continuous work on content, visual design, and marketing collateral."
    },
    {
      titleUa: "Зовнішня маркетингова команда",
      titleEn: "External Marketing Team",
      descUa: "Повна заміна внутрішнього відділу маркетингу: троє фахівців за ціною одного штатника.",
      descEn: "Full replacement of an in-house marketing department: 3 specialists working in synergy."
    }
  ],

  targetAudiences: [
    {
      titleUa: "HoReCa та гастрономічні проєкти",
      titleEn: "HoReCa & Gastronomy",
      descUa: "Ресторани, кав'ярні, пекарні, готелі та темні кухні, де важлива атмосфера й візуальний апетит.",
      descEn: "Restaurants, cafes, bakeries, hotels, and dark kitchens where visual appetite is key."
    },
    {
      titleUa: "Ювелірні бренди й магазини",
      titleEn: "Jewelry Brands & Stores",
      descUa: "Бренди прикрас, які потребують естетичної айдентики, преміального контенту та концептуального SMM.",
      descEn: "Jewelry brands requiring aesthetic identity, premium content, and conceptual SMM."
    },
    {
      titleUa: "Локальний бізнес",
      titleEn: "Local Businesses",
      descUa: "Міські сервіси, студії, майстерні та магазини, що прагнуть стати лідерами у своєму районі або місті.",
      descEn: "City services, studios, workshops, and retail stores striving to lead locally."
    },
    {
      titleUa: "Beauty та Retail",
      titleEn: "Beauty & Retail",
      descUa: "Салони краси, косметичні марки, шоуруми одягу та аксесуарів із високими вимогами до візуалу.",
      descEn: "Beauty salons, cosmetics brands, and clothing showrooms with high visual standards."
    },
    {
      titleUa: "Виробники й дистриб’ютори",
      titleEn: "Manufacturers & Distributors",
      descUa: "Компанії, яким потрібне зрозуміле упакування лінійки товарів, каталоги та B2B-презентації.",
      descEn: "Companies needing clear product line packaging, catalogs, and B2B decks."
    },
    {
      titleUa: "B2B-компанії",
      titleEn: "B2B Companies",
      descUa: "Сервісні та консалтингові компанії, які шукають чітке системне позиціонування та довіру.",
      descEn: "Service & consulting firms seeking clear systemic positioning and market trust."
    },
    {
      titleUa: "Експерти та персональні бренди",
      titleEn: "Experts & Personal Brands",
      descUa: "Спеціалісти, фаундер-бренди та консультанти, які пакують свої знання та досвід.",
      descEn: "Specialists, founders, and consultants packaging their personal expertise."
    }
  ],

  portfolioItems: [
    {
      id: "p1",
      title: "Айдентика та упаковка локальної пекарні",
      category: "design",
      categoryLabel: "Дизайн & Брендінг",
      industry: "HoReCa",
      description: "Розробка логотипу, фірмового стилю, меню та серії фірмового пакування для крафтової пекарні.",
      executedScope: ["Логотип & Брендбук", "Пакування та стаканчики", "Оформлення фасаду & Меню"],
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "p2",
      title: "Маркетингова стратегія позиціонування ювелірного дому",
      category: "marketing",
      categoryLabel: "Маркетингова стратегія",
      industry: "Jewelry / Premium",
      description: "Аналіз конкурентів, визначення цільових сегментів, побудова унікальної ціннісної пропозиції.",
      executedScope: ["Аудит ринку", "Сегментація аудиторії", "Стратегія позиціонування"],
      imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "p3",
      title: "Візуальні рекламні креативи для beauty-шоуруму",
      category: "design",
      categoryLabel: "Графічний дизайн",
      industry: "Beauty & Retail",
      description: "Створення серії адаптивних стильних візуалів для таргетованої реклами та сторіз.",
      executedScope: ["Static & Motion баннери", "Шаблони для сторіз", "Адаптація під розміри"],
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "p4",
      title: "Системне ведення та SMM-стратегія мережі кав'ярень",
      category: "smm",
      categoryLabel: "SMM & Контент",
      industry: "HoReCa",
      description: "Розробка сітки контенту, зйомка коротких відео Reels, робота з коментарями та відгуками.",
      executedScope: ["Контент-план 30 днів", "Виробництво Reels", "Співпраця з інфлюенсерами"],
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "p5",
      title: "Концептуальна фотозйомка та іміджевий контент",
      category: "smm",
      categoryLabel: "Фотозйомка & Продакшн",
      industry: "Lifestyle / Accessories",
      description: "Організація та проведення предметної зйомки нової колекції шкіряних аксесуарів.",
      executedScope: ["Мудборд & Мудсет", "Предметне фото", "Ретуш та обробка"],
      imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "p6",
      title: "Комплексне пакування та запуск крафтового виробництва",
      category: "complex",
      categoryLabel: "Комплексні послуги",
      industry: "Виробництво / B2C",
      description: "Спільна робота маркетолога, дизайнера та SMM-спеціаліста над виводом нового бренду на ринок.",
      executedScope: ["Стратегія запуску", "Айдентика & Упаковка", "SMM запуск & Реклама"],
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
    }
  ] as PortfolioItem[],

  faq: [
    {
      questionUa: "Чи можна замовити одну окрему послугу?",
      questionEn: "Can I order a single standalone service?",
      answerUa: "Так, звісно! Ви можете звернутися до нас як за разовою послугою (наприклад, розробка логотипа або аудит маркетингу), так і за комплексним супроводом.",
      answerEn: "Yes, absolutely! You can contact us for a single service (e.g. logo design or marketing audit) as well as full complex retainer support."
    },
    {
      questionUa: "Чи працюєте ви з малим бізнесом?",
      questionEn: "Do you work with small businesses?",
      answerUa: "Так. Ми дуже цінуємо роботу з малим і локальним бізнесом, адже тут швидко видно реальний результат дій команди.",
      answerEn: "Yes. We highly value working with small and local businesses where the real impact of our team's work is quickly visible."
    },
    {
      questionUa: "Як формується вартість?",
      questionEn: "How is pricing formed?",
      answerUa: "Вартість розраховується індивідуально залежно від обсягу завдань, складності та термінів. Ми завжди пропонуємо прозору кошторисну пропозицію перед стартом.",
      answerEn: "Pricing is calculated individually based on task scope, complexity, and timelines. We always provide a transparent quote before launch."
    },
    {
      questionUa: "Чи можете ви повністю вести маркетинг компанії?",
      questionEn: "Can you fully manage company marketing?",
      answerUa: "Так! Формат «Зовнішня маркетингова команда» дозволяє нам закривати всі питання стратегії, дизайну та SMM у синергії 3 спеціалістів.",
      answerEn: "Yes! Our 'External Marketing Team' format allows us to handle strategy, design, and SMM synergistically with 3 dedicated specialists."
    },
    {
      questionUa: "Як починається робота?",
      questionEn: "How does the engagement start?",
      answerUa: "Все починається з короткого дзвінка або переписки, де ми з'ясовуємо ваші завдання, після чого ми готуємо пропозицію та план кроків.",
      answerEn: "It all starts with a brief intro call or chat to align on your goals, after which we prepare a custom proposal and action plan."
    },
    {
      questionUa: "Чи працюєте ви дистанційно?",
      questionEn: "Do you work remotely?",
      answerUa: "Так, ми ефективно співпрацюємо дистанційно з клієнтами по всій Україні та за її межами через Zoom, Telegram та Notion/Figma.",
      answerEn: "Yes, we collaborate seamlessly remote with clients across Ukraine and internationally via Zoom, Telegram, and Notion/Figma."
    },
    {
      questionUa: "Чи можна залучити додаткових спеціалістів?",
      questionEn: "Can additional specialists be involved?",
      answerUa: "Так! Під спеціалізовані задачі (таргетована реклама, складне веб-програмування, відеозйомка) ми залучаємо перевірених партнерів.",
      answerEn: "Yes! For specialized tasks (media buying, web dev, video production) we pull in vetted partner specialists."
    }
  ]
};
