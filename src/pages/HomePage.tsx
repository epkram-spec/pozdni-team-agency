import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { TeamCard } from '../components/TeamCard';
import { PortfolioCard } from '../components/PortfolioCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Target, 
  Palette, 
  Share2, 
  Users, 
  Utensils, 
  Gem, 
  Store, 
  Sparkles, 
  Building2, 
  UserCheck, 
  Briefcase,
  UserPlus
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  const { t } = useLanguage();

  const clientProblems = [
    {
      problem: t('Маркетингові дії втратили спільний напрям', 'Marketing actions lost unified direction'),
      result: t('Чітка єдина маркетингова система з вимірюваними цілями', 'A clear, unified marketing system with measurable goals')
    },
    {
      problem: t('Бізнесу бракує зрозумілого позиціонування', 'Business lacks clear market positioning'),
      result: t('Сильне UTP (УТП) та позиціонування, яке виділяє з-поміж конкурентів', 'Strong positioning and UVP that sets you apart from competitors')
    },
    {
      problem: t('Дизайн, контент і реклама працюють окремо', 'Design, content, and ads work in isolation'),
      result: t('Повна синергія візуалу, текстів та реклами для максимальної конверсії', 'Full synergy between visuals, copy, and ads for max conversion')
    },
    {
      problem: t('Власнику доводиться координувати кількох виконавців', 'Owner spends hours managing multiple freelancers'),
      result: t('Один контактний центр та відповідальна команда 3 спеціалістів', 'One central touchpoint and dedicated team of 3 specialists')
    },
    {
      problem: t('Потрібен терміновий запуск або оновлення бренду', 'Urgent need for brand launch or revamp'),
      result: t('Швидкий та прозорий запуск проєкту у чітко обумовлені терміни', 'Fast, transparent project launch within defined deadlines')
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
                ✦ Pozdni Team Agency
              </span>
              <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
                {t(
                  "Потрібна команда, яка з’єднає маркетинг, дизайн і SMM в одну систему?",
                  "Need a team to connect marketing, design, and SMM into one system?"
                )}
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                {t(
                  "Допомагаємо бізнесу сформувати стратегію, упакувати пропозицію, створити сильний візуал і системно працювати з контентом.",
                  "We help businesses craft strategies, package offers, design high-impact visuals, and drive consistent content operations."
                )}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button onClick={() => onOpenContact()} className="btn btn-accent">
                  <span>{t('Обговорити завдання', 'Discuss Task')}</span>
                  <ArrowRight size={18} />
                </button>
                <button onClick={() => onNavigate('marketing')} className="btn btn-outline">
                  <span>{t('Переглянути послуги', 'View Services')}</span>
                </button>
              </div>
            </div>

            {/* Hero Image / Editorial Composition */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  width: '100%',
                  height: '460px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1000&auto=format&fit=crop" 
                  alt="Pozdni Team Agency Team Strategy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20, 20, 22, 0.7) 0%, transparent 60%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', color: '#FFFFFF' }}>
                  <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                    3 {t('Фахівці в 1 команді', 'Specialists in 1 Team')}
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem' }}>
                    {t('Маркетинг + Дизайн + SMM', 'Marketing + Design + SMM')}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROP STATEMENT */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px' }}>
          <span className="tag" style={{ marginBottom: '1rem' }}>{t('Чим ми корисні', 'Our Core Value')}</span>
          <h2 style={{ fontSize: '2rem', lineHeight: '1.4', fontWeight: 600 }}>
            {t(
              "Ми не робимо дизайн заради дизайну і не пишемо пости заради публікацій. Ми створюємо цілісну систему, де кожне візуальне й текстове рішення працює на впізнаваність та зростання продажів вашого бізнесу.",
              "We don't design just for design, nor publish posts just for activity. We build a cohesive system where every visual and copy decision directly drives brand recognition and sales growth."
            )}
          </h2>
        </div>
      </section>

      {/* PROBLEMS VS RESULTS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Результат співпраці', 'Impact & Results')}</span>
            <h2>{t('Які проблеми ми вирішуємо', 'Problems We Solve')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {clientProblems.map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#DC2626', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    <XCircle size={18} />
                    <span>{t('Було / Проблема', 'Before / Problem')}</span>
                  </div>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                    {item.problem}
                  </p>
                </div>

                <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={18} />
                    <span>{t('Стане / Результат', 'After / Solution')}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 CORE DIRECTIONS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Напрями послуг', 'Core Directions')}</span>
            <h2>{t('4 ключові вектори роботи', '4 Primary Directions')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {/* Marketing */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{t('Маркетинг', 'Marketing')}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t('Маркетингова стратегія, аудит, позиціонування, UTP, побудова воронок та аналітика цільової аудиторії.', 'Marketing strategy, audit, UVP positioning, sales funnels, and target audience research.')}
              </p>
              <button onClick={() => onNavigate('marketing')} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>{t('Детальніше про маркетинг', 'More about Marketing')}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Design */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <Palette size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{t('Графічний Дизайн', 'Graphic Design')}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t('Розробка логотипа, айдентика, брендбуки, дизайн упаковки, поліграфія, рекламні креативи та шаблони.', 'Logo development, brand identity, packaging design, print, and advertising creatives.')}
              </p>
              <button onClick={() => onNavigate('design')} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>{t('Детальніше про дизайн', 'More about Design')}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* SMM */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <Share2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{t('SMM & Контент', 'SMM & Content')}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t('Контент-стратегія, сітка публікацій, сценарії Reels/Shorts, фотозйомка, ком\'юніті та робота з блогерами.', 'Content strategy, grid planning, Reels scripts, photo shoots, community management, and influencers.')}
              </p>
              <button onClick={() => onNavigate('smm')} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>{t('Детальніше про SMM', 'More about SMM')}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Integrated Services */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', borderColor: 'var(--accent)', backgroundColor: 'var(--accent-light)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{t('Комплексні Послуги', 'Integrated Services')}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t('Коли 3 фахівці працюють над одним бізнес-завданням під ключ: від упаковки до ретеншну.', 'When 3 specialists collaborate on your single business task turnkey: from packaging to retention.')}
              </p>
              <button onClick={() => onNavigate('complex')} className="btn btn-accent btn-sm" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>{t('Комплексні рішення', 'Integrated Solutions')}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COOPERATION FORMATS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Гнучкість', 'Flexibility')}</span>
            <h2>{t('Формати співпраці', 'Cooperation Formats')}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {AGENCY_CONFIG.collaborationFormats.map((fmt, i) => (
              <div key={i} className="card" style={{ padding: '1.8rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent)', display: 'block', marginBottom: '0.5rem' }}>
                  0{i + 1}
                </span>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', fontFamily: 'var(--font-body)' }}>
                  {t(fmt.titleUa, fmt.titleEn)}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {t(fmt.descUa, fmt.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE / SECTORS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Експертиза', 'Expertise')}</span>
            <h2>{t('Для кого ми працюємо', 'Who We Work With')}</h2>
            <p style={{ marginTop: '0.8rem' }}>
              {t(
                'Ми маємо глибинний досвід у фокусних нішах (HoReCa, Jewelry), але також успішно створюємо системи для локального бізнесу та B2B.',
                'We hold deep domain expertise in gastronomy & jewelry, while building proven marketing systems for local brands and B2B.'
              )}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {AGENCY_CONFIG.targetAudiences.map((aud, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {i === 0 ? <Utensils size={20} /> : i === 1 ? <Gem size={20} /> : i === 2 ? <Store size={20} /> : i === 3 ? <Sparkles size={20} /> : i === 4 ? <Briefcase size={20} /> : i === 5 ? <Building2 size={20} /> : <UserCheck size={20} />}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', fontFamily: 'var(--font-body)' }}>
                    {t(aud.titleUa, aud.titleEn)}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {t(aud.descUa, aud.descEn)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Сила команди', 'Team Synergy')}</span>
            <h2>{t('Команда Pozdni Team', 'Meet the Pozdni Team')}</h2>
            <p style={{ marginTop: '0.8rem', fontSize: '1.1rem' }}>
              {t(
                'Троє фахівців, які дивляться на одне бізнес-завдання з трьох сторін.',
                'Three specialists looking at your single business goal from three perspectives.'
              )}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {AGENCY_CONFIG.team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Наші роботи', 'Our Work')}</span>
              <h2>{t('Галерея проєктів', 'Project Gallery')}</h2>
            </div>
            <button onClick={() => onNavigate('portfolio')} className="btn btn-outline">
              <span>{t('Усі проєкти в портфоліо', 'All Portfolio Projects')}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {AGENCY_CONFIG.portfolioItems.slice(0, 6).map((item) => (
              <PortfolioCard key={item.id} item={item} onSelect={() => onOpenContact(item.title)} />
            ))}
          </div>
        </div>
      </section>

      {/* HIRING / EXPANSION BLOCK */}
      <section className="section">
        <div className="container">
          <div 
            style={{ 
              backgroundColor: 'var(--bg-dark)', 
              color: '#FFFFFF', 
              borderRadius: 'var(--radius-lg)', 
              padding: '3.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="tag" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', marginBottom: '1rem' }}>
                <UserPlus size={14} style={{ marginRight: '0.4rem' }} />
                {t('Розширення мережі', 'Team Expansion')}
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: '2.2rem', marginBottom: '1rem' }}>
                {t('Працюємо з перевіреними експертами', 'Collaborate With Our Network')}
              </h2>
              <p style={{ color: '#A09FA6', fontSize: '1.05rem' }}>
                {t(
                  'Ми поступово розширюємо команду й залучаємо перевірених спеціалістів під конкретні завдання. Якщо ви сильні у своїй справі та хочете працювати над спільними проєктами, напишіть нам.',
                  'We continuously expand our network and pull in vetted specialists for specific challenges. If you are strong in your discipline and want to build projects together, drop us a line.'
                )}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <button onClick={() => onOpenContact('Партнерство / Команда')} className="btn btn-accent">
                <span>{t('Познайомитися з командою', 'Get in Touch')}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>FAQ</span>
            <h2>{t('Часті запитання клієнтів', 'Frequently Asked Questions')}</h2>
          </div>

          <FAQAccordion items={AGENCY_CONFIG.faq} />
        </div>
      </section>

      {/* SEO BLOCK */}
      <SeoBlock
        titleUa="Маркетингова агенція Pozdni Team — Стратегія, Дизайн та SMM для зростання вашого бізнесу"
        titleEn="Pozdni Team Marketing Agency — Strategy, Visual Design & SMM Growth"
        paragraphsUa={[
          "Pozdni Team Agency — це маркетингова агенція повного циклу, що поєднує глибоку маркетингову аналітику, естетичний графічний дизайн та ефективне просування в соціальних мережах. Ми допомагаємо бізнесам перетворювати увагу аудиторії на вимірний фінансовий результат.",
          "Завдяки досвіду роботи у нішах HoReCa, ювелірних брендів, beauty-індустрії, B2B та роздрібній торгівлі ми пропонуємо випробувані рішення, які адаптуються під індивідуальні цілі вашого проєкту.",
          "Обирайте зручний формат співпраці: разовий проєкт (аудит, брендінг, воронка), місячний Retainer-супровід чи повноцінний зовнішній відділ маркетингу під ключ."
        ]}
        paragraphsEn={[
          "Pozdni Team Agency is a full-service marketing agency uniting strategic analytics, graphic design, and social media execution. We help businesses translate audience engagement into measurable sales results.",
          "With proven expertise across HoReCa, jewelry, beauty, retail, and B2B sectors, we provide tailored strategies that scale with your brand objectives.",
          "Choose your preferred collaboration model: project-based work, monthly retainers, or a turnkey external marketing department."
        ]}
      />

      {/* FINAL CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>
            {t('Готові обговорити ваш проєкт?', 'Ready to Elevate Your Brand?')}
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            {t(
              'Зв’яжіться з нами, щоб розібрати поточний стан маркетингу та отримати чіткий план дій.',
              'Reach out to audit your current marketing and get a clean, strategic roadmap.'
            )}
          </p>
          <button onClick={() => onOpenContact()} className="btn btn-accent" style={{ padding: '1.1rem 2.4rem', fontSize: '1.1rem' }}>
            <span>{t('Обговорити завдання', 'Discuss Task')}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};
