import { TeamMember, PortfolioItem, PromoBannerConfig } from '../types';
import marketerPhoto from '../assets/team/marketer.jpg';
import designerPhoto from '../assets/team/designer.jpg';
import smmPhoto from '../assets/team/smm.jpg';

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
      photoUrl: marketerPhoto,
      skills: ["Маркетингова стратегія", "Аналітика & KPI", "Воронки продажів", "Позиціонування"]
    },
    {
      id: "tetyana",
      name: "Тетяна",
      role: "Графічна дизайнерка / Graphic Designer",
      description: "Створює візуальну ідентичність бренду: айдентику, логотипи, упакування, брендбуки та рекламні візуали. Формує стиль, який запам'ятовується та продає.",
      photoUrl: designerPhoto,
      skills: ["Айдентика & Брендбук", "Графічний дизайн", "Упаковка", "SMM-візуали"]
    },
    {
      id: "olya",
      name: "Оля",
      role: "SMM-маркетологиня / SMM Marketer",
      description: "Розробляє контент-стратегії, веде соціальні мережі, планує Reels/Shorts та працює з ком'юніті. Забезпечує регулярну системну присутність бренду в медіапросторі.",
      photoUrl: smmPhoto,
      skills: ["SMM-стратегія", "Контент-планування", "Reels / Shorts", "Ком'юніті-менеджмент"]
    }
  ] as TeamMember[],

  collaborationFormats: [
    {
      titleUa: "Окрема послуга",
      titleEn: "Single Service",
      descUa: "Точкове рішення конкретного завдання: розробка логотипа, разовий аудит або створення контент-плану.",
      descEn: "Targeted solution for your task: logo design, one-time audit, or content calendar."
    },
    {
      titleUa: "Проєктна робота",
      titleEn: "Project-Based Work",
      descUa: "Розробка комплексного проєкту від ідеї до повного запуску у фіксовані терміни з прогнозованим бюджетом.",
      descEn: "Comprehensive project execution from concept to launch within a fixed deadline."
    },
    {
      titleUa: "Регулярний супровід",
      titleEn: "Monthly Retainer",
      descUa: "Щомісячна системна робота над контентом, візуалом та рекламними матеріалами вашої компанії.",
      descEn: "Monthly continuous work on content, visual design, and marketing collateral."
    },
    {
      titleUa: "Зовнішня команда",
      titleEn: "External Team",
      descUa: "Повна заміна внутрішнього відділу маркетингу: маркетолог, дизайнер та SMM-фахівець за ціною одного штатника.",
      descEn: "Full replacement of an in-house marketing department: 3 specialists working in synergy."
    }
  ],

  targetAudiences: [
    {
      titleUa: "HoReCa та гастрономія",
      titleEn: "HoReCa & Gastronomy",
      descUa: "Ресторани, кав'ярні, пекарні, готелі та темні кухні, де важлива атмосфера й візуальний апетит.",
      descEn: "Restaurants, cafes, bakeries, hotels, and dark kitchens where visual appetite is key."
    },
    {
      titleUa: "Ювелірні бренди й преміум",
      titleEn: "Jewelry & Luxury",
      descUa: "Бренди прикрас, які потребують естетичної айдентики, преміального контенту та концептуального SMM.",
      descEn: "Jewelry brands requiring aesthetic identity, premium content, and conceptual SMM."
    },
    {
      titleUa: "Beauty, Fashion та Retail",
      titleEn: "Beauty, Fashion & Retail",
      descUa: "Салони краси, косметичні марки, шоуруми одягу та аксесуарів із високими вимогами до візуалу.",
      descEn: "Beauty salons, cosmetics brands, and clothing showrooms with high visual standards."
    },
    {
      titleUa: "Виробники й крафтові бренди",
      titleEn: "Manufacturers & Craft Brands",
      descUa: "Компанії, яким потрібне зрозуміле упакування лінійки товарів, каталоги та B2B-презентації.",
      descEn: "Companies needing clear product line packaging, catalogs, and B2B decks."
    },
    {
      titleUa: "B2B та сервісні компанії",
      titleEn: "B2B & Service Companies",
      descUa: "Сервісні та консалтингові компанії, які шукають чітке системне позиціонування та довіру.",
      descEn: "Service & consulting firms seeking clear systemic positioning and market trust."
    },
    {
      titleUa: "Експерти та персональні бренди",
      titleEn: "Experts & Personal Brands",
      descUa: "Спеціалісти, фаундер-бренди та консультанти, які пакують свої знання та досвід у системний продукт.",
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

  // Shared common questions across services
  faqHome: [
    {
      questionUa: "Чи можна замовити окрему послугу чи обов'язково комплекс?",
      questionEn: "Can I order a single service or is integrated full-service mandatory?",
      answerUa: "Ви можете звернутися до нас як за разовою послугою (наприклад, розробка брендбуку чи аудит маркетингу), так і за повноцінним супроводом.",
      answerEn: "You can reach out for a single service (e.g. brandbook or marketing audit) as well as full complex agency support."
    },
    {
      questionUa: "Як формується вартість послуг та чи є приховані платежі?",
      questionEn: "How is service pricing formed and are there hidden fees?",
      answerUa: "Вартість розраховується фіксовано за узгодженим кошторисом перед стартом проєкту. Жодних прихованих комісій — ви завжди знаєте фінальний бюджет.",
      answerEn: "Pricing is fixed based on an agreed estimate before project launch. No hidden fees — you always know the exact budget."
    },
    {
      questionUa: "Як відбувається запуск та перші кроки після звернення?",
      questionEn: "How does project onboarding work after contacting us?",
      answerUa: "Все починається з короткого брифу чи дзвінка, де ми з'ясовуємо ваші завдання. Далі ми готуємо прозорий план дій та стартуємо роботу.",
      answerEn: "It begins with a brief intake call to align on goals, followed by a transparent action plan and quick project onboarding."
    },
    {
      questionUa: "З якими нішами бізнесу ви працюєте найчастіше?",
      questionEn: "Which business niches do you work with most frequently?",
      answerUa: "Ми маємо експертизу в HoReCa (ресторани, кафе, готелі) та ювелірній галузі, але також будуємо системний маркетинг для B2C, рітейлу та локального бізнесу.",
      answerEn: "We hold deep expertise in HoReCa (gastronomy & hospitality) and jewelry, while scaling systems for B2C, retail, and local services."
    },
    {
      questionUa: "Хто саме буде працювати над моїм проєктом?",
      questionEn: "Who specifically will be working on my project?",
      answerUa: "Вашим проєктом займається згуртована команда з 3 експертів: старший маркетолог, графічна дизайнерка та SMM-маркетолог під керівництвом PM.",
      answerEn: "Your project is assigned to a dedicated team of 3 specialists: senior marketer, graphic designer, and SMM marketer."
    },
    {
      questionUa: "Чи працюєте ви дистанційно по Україні та за кордоном?",
      questionEn: "Do you work remotely across Ukraine and internationally?",
      answerUa: "Так, 100% наших процесів налаштовано для віддаленої співпраці. Ми системно ведемо проєкти через Telegram, Zoom, Notion та Figma.",
      answerEn: "Yes, 100% of our operations are optimized for remote collaboration across Ukraine and globally via Telegram, Zoom, Notion, and Figma."
    }
  ],

  faqMarketing: [
    {
      questionUa: "Що саме входить у розробку маркетингової стратегії?",
      questionEn: "What is included in a marketing strategy development?",
      answerUa: "Глибинний аудит поточної ситуації, аналіз конкурентів та ЦА, формування UTP/позиціонування, розробка воронок продажів та покроковий медіаплан дій.",
      answerEn: "In-depth audit, competitor & audience research, UVP positioning, sales funnels architecture, and a step-by-step media execution plan."
    },
    {
      questionUa: "Скільки часу займає розробка повноцінної стратегії?",
      questionEn: "How long does full marketing strategy development take?",
      answerUa: "Зазвичай процес розробки стратегії займає від 10 до 15 робочих днів залежно від обсягу бізнесу та складності ніші.",
      answerEn: "Strategy development typically takes 10 to 15 business days depending on business scope and market complexity."
    },
    {
      questionUa: "Чи допомагаєте ви впроваджувати стратегію після розробки?",
      questionEn: "Do you help execute the strategy after its completion?",
      answerUa: "Так! Ми не просто віддаємо документований PDF-план, а супроводжуємо його реалізацію як ваша маркетингова команда.",
      answerEn: "Yes! We don't just hand over a PDF report, we actively execute and supervise its implementation as your marketing arm."
    },
    {
      questionUa: "Як ви вимірюєте результативність маркетингових дій?",
      questionEn: "How do you measure marketing performance and results?",
      answerUa: "Ми орієнтуємося на чіткі бізнес-метрики: вартість залучення клієнта (CAC), коефіцієнт конверсії, ROI та підсумкове зростання виторгу.",
      answerEn: "We focus on clear performance metrics: customer acquisition cost (CAC), conversion rate, ROI, and overall revenue growth."
    },
    {
      questionUa: "Як формується вартість маркетингових послуг?",
      questionEn: "How is marketing service pricing structured?",
      answerUa: "Вартість розраховується фіксовано за узгодженим кошторисом перед стартом проєкту. Ви завжди знаєте точний обсяг та бюджет.",
      answerEn: "Pricing is calculated on a fixed-rate estimate agreed upon before starting. You always know the precise scope and budget."
    },
    {
      questionUa: "Як почати співпрацю з напряму маркетингу?",
      questionEn: "How to initiate a marketing engagement with your team?",
      answerUa: "Надішліть заявку через форму або напишіть у Telegram. Ми проведемо первинну консультацію та підготуємо пропозицію.",
      answerEn: "Submit an inquiry via our form or text us on Telegram. We'll hold an intro call and build a targeted proposal."
    }
  ],

  faqDesign: [
    {
      questionUa: "Що входить у розробку фірмового стилю та айдентики?",
      questionEn: "What is included in brand identity & visual design development?",
      answerUa: "Логотип, фірмова колірна палітра, шрифтова пара, правила використання стилю, шаблони носіїв (візитки, меню, упаковка, соцмережі) та брендбук.",
      answerEn: "Logo design, color palette, typography pairing, brand guidelines, collaterals (menus, packaging, social templates), and a brandbook."
    },
    {
      questionUa: "Скільки варіантів логотипа ви надаєте на вибір?",
      questionEn: "How many logo concepts do you present for selection?",
      answerUa: "Ми готуємо 3 принципово різні концепції з обґрунтуванням смислів, після чого доопрацьовуємо обраний варіант до ідеалу.",
      answerEn: "We develop 3 distinct concept directions with strategic rationale, then polish the chosen direction to perfection."
    },
    {
      questionUa: "Чи передаєте ви всі вихідні файли після завершення?",
      questionEn: "Do you transfer all raw source vector files upon completion?",
      answerUa: "Так, ви отримуєте повний пакет векторних та растрових вихідників (Figma, AI, EPS, PDF, PNG, SVG), повністю готових до друку та диджиталу.",
      answerEn: "Yes, you receive all vector and raster source files (Figma, AI, EPS, PDF, PNG, SVG) ready for print and digital publishing."
    },
    {
      questionUa: "Чи робите ви дизайн упаковки та поліграфії для HoReCa?",
      questionEn: "Do you design restaurant menus, packaging & print items?",
      answerUa: "Так! Це наша спеціалізація. Ми робимо додрукарську підготовку меню, упаковки, мерчу та рекламної поліграфії з урахуванням стандартів друку.",
      answerEn: "Yes! That is our core specialty. We manage prepress for menus, packaging, merch, and print collateral according to specs."
    },
    {
      questionUa: "Як формується вартість дизайн-проєктів?",
      questionEn: "How is design project pricing calculated?",
      answerUa: "Вартість розраховується фіксовано залежно від складу носіїв та обсягу елементів айдентики перед стартом розробки.",
      answerEn: "Pricing is fixed based on the number of deliverables and identity asset complexity before design work begins."
    },
    {
      questionUa: "Скільки ітерацій правок включено у вартість розробки?",
      questionEn: "How many revision rounds are included in the price?",
      answerUa: "До складу входить 3 повні ітерації правок для кожної концепції, що гарантує 100% влучання у ваше бачення без переплат.",
      answerEn: "We include 3 comprehensive revision rounds per stage, guaranteeing 100% alignment with your vision without added costs."
    }
  ],

  faqSmm: [
    {
      questionUa: "Що входить у щомісячний SMM-супровід під ключ?",
      questionEn: "What is included in monthly turnkey SMM management?",
      answerUa: "SMM-стратегія, рубрикатор, контент-планування, виїзна або студійна контент-зйомка, написання постів, монтаж Reels/Shorts, Stories та модерація.",
      answerEn: "SMM strategy, content calendar, video/photo shoots, copywriting, Reels/Shorts editing, daily Stories, and profile moderation."
    },
    {
      questionUa: "Чи входить фото- та відеозйомка у вартість SMM?",
      questionEn: "Is photo & video production included in SMM packages?",
      answerUa: "Так! Ми самостійно організовуємо та проводимо професійні зйомки для створення унікального живого контенту, а не фотостоків.",
      answerEn: "Yes! We organize and run professional on-site content shoots to create authentic custom brand visuals rather than stock photos."
    },
    {
      questionUa: "Як швидко з'являються перші результати в соцмережах?",
      questionEn: "How quickly do first social media results appear?",
      answerUa: "Перші позитивні зрушення у залученні, рості охоплень та якісному візуалі видно вже протягом перших 2-3 тижнів регулярного контенту.",
      answerEn: "Initial improvements in engagement, reach, and visual presentation become visible within the first 2-3 weeks of launching."
    },
    {
      questionUa: "Хто пише тексти та формує ToV (Tone of Voice) бренду?",
      questionEn: "Who writes captions and establishes the brand's Tone of Voice?",
      answerUa: "Наш SMM-копірайтер розробляє унікальний Tone of Voice бренду та створює експертні, продаючі чи розважальні тексти під кожний пост.",
      answerEn: "Our SMM copywriter defines your custom Tone of Voice and writes engaging, high-converting copy tailored to your audience."
    },
    {
      questionUa: "Як формується вартість щомісячного SMM-супроводу?",
      questionEn: "How is monthly SMM management pricing structured?",
      answerUa: "Вартість розраховується фіксованим щомісячним платежем залежно від періодичності публікацій, кількості Reels та зйомок.",
      answerEn: "Pricing is set as a transparent flat monthly rate based on posting frequency, number of Reels, and shoot volume."
    },
    {
      questionUa: "Що від нас потрібно для запуску SMM-роботи?",
      questionEn: "What is required from our side to launch SMM work?",
      answerUa: "Заповнити бриф, надати доступ до акаунту та погодити первинну контент-стратегію. Всю іншу рутину ми беремо на себе.",
      answerEn: "Fill out a brief, grant profile access, and approve the content strategy. We handle all execution details from there."
    }
  ],

  faqComplex: [
    {
      questionUa: "Чим формат «Команда 3-х» кращий за фрілансерів чи штатного спеціаліста?",
      questionEn: "Why is the 'Team of 3' model better than freelancers or in-house hires?",
      answerUa: "Ви отримуєте одразу 3 готових експертів (маркетолог, дизайнер, SMM), які працюють злагоджено як єдиний організм за ціною одного штатного працівника.",
      answerEn: "You get 3 synchronized experts (marketer, designer, SMM) working seamlessly together for the cost of a single senior employee."
    },
    {
      questionUa: "Хто координує роботу та з ким комунікувати клієнту?",
      questionEn: "Who coordinates the team and serves as the single point of contact?",
      answerUa: "За вашим проєктом закріплено персонального Project Manager / Старшого маркетолога, який веде єдиний чат та контролює всі дедлайни.",
      answerEn: "A dedicated Project Manager / Senior Marketer leads your single point of contact, ensuring flawless deadlines and updates."
    },
    {
      questionUa: "Чи можна гнучко змінювати задачі в межах місяця?",
      questionEn: "Can task focus be flexibly shifted within a monthly package?",
      answerUa: "Так! Якщо у певний місяць потрібен більший акцент на дизайн (наприклад, перед відкриттям), ми перенаправляємо ресурси команди під задачі.",
      answerEn: "Yes! If a specific month requires extra design focus (e.g. prior to launch), we reallocate team hours to priority needs."
    },
    {
      questionUa: "Яку звітність ви надаєте за результатами співпраці?",
      questionEn: "What reporting do you provide at the end of each month?",
      answerUa: "Щомісячний аналітичний звіт з висновками за KPI, оглядом виконаних робіт, динамікою показників та покроковим планом на наступний місяць.",
      answerEn: "A monthly analytical report detailing key KPI results, accomplished scope, metric trends, and next month's action roadmap."
    },
    {
      questionUa: "Як формується вартість комплексного рішення?",
      questionEn: "How is pricing structured for complex full-service packages?",
      answerUa: "Фіксована прозора щомісячна абоплата без прихованих платежів та надбавок. Ви отримуєте повноцінний відділ маркетингу під ключ.",
      answerEn: "Fixed transparent monthly retainer without unexpected surcharges. You gain a fully functional turnkey marketing department."
    },
    {
      questionUa: "Як виглядає старт роботи з Комплексною командою?",
      questionEn: "What does onboarding look like with the Integrated Team?",
      answerUa: "Діагностична сесія -> Аудит -> Стратегічний план на 30 днів -> Запуск перших спільних спринтів у межах 48 годин.",
      answerEn: "Diagnostic session -> Audit -> 30-day Strategic Roadmap -> Launch of first team sprints within 48 hours."
    }
  ],

  // Default fallback for home page
  faq: [] as Array<{ questionUa: string; questionEn: string; answerUa: string; answerEn: string; }>
};

AGENCY_CONFIG.faq = AGENCY_CONFIG.faqHome;
