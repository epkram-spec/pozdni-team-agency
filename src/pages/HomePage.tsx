import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { SEO_DATA } from '../config/seoConfig';
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
  Briefcase,
  UserPlus,
  Zap,
  ShieldCheck,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenContact: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContact }) => {
  const { t } = useLanguage();

  // Exactly 6 Client Problems & Solutions for perfect 3x2 / 2x3 grid balance
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
    },
    {
      problem: t('Маркетинговий бюджет витрачається без прозорої окупності', 'Marketing budget spent without transparent ROI'),
      result: t('Чітка аналітика, розрахована вартість ліда та прогнозована окупність', 'Clear analytics, calculated cost per lead, and predictable ROI')
    }
  ];

  return (
    <div>
      {/* HERO SECTION WITH PHOTO BANNER */}
      <section className="section" style={{ paddingTop: '3.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
                ✦ Pozdni Team Agency
              </span>
              <h1 style={{ marginBottom: '1.4rem' }}>
                {t(
                  "Потрібна команда, яка з’єднає маркетинг, дизайн і SMM в одну систему?",
                  "Need a team to connect marketing, design, and SMM into one system?"
                )}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.2rem', lineHeight: '1.6' }}>
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

            {/* Hero Photo Banner */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  width: '100%',
                  height: '420px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
                  alt="Pozdni Team Agency Strategy Session"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20, 20, 22, 0.75) 0%, transparent 60%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1.8rem', left: '1.8rem', right: '1.8rem', color: '#FFFFFF' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--accent)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.6rem' }}>
                    <Zap size={13} />
                    <span>3 В 1 СИНЕРГІЯ</span>
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.2rem' }}>
                    {t('Маркетинг + Дизайн + SMM', 'Marketing + Design + SMM')}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem' }}>
                    {t('Один контактний центр замість 10 фрілансерів', 'One central team instead of 10 separate freelancers')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROP STATEMENT - LEFT ALIGNED */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'left', maxWidth: '920px' }}>
          <span className="tag" style={{ marginBottom: '1rem' }}>{t('Чим ми корисні', 'Our Core Value')}</span>
          <h2 style={{ fontSize: '1.65rem', lineHeight: '1.4', fontWeight: 600 }}>
            {t(
              "Ми не робимо дизайн заради дизайну і не пишемо пости заради публікацій. Ми створюємо цілісну систему, де кожне візуальне й текстове рішення працює на впізнаваність та зростання продажів вашого бізнесу.",
              "We don't design just for design, nor publish posts just for activity. We build a cohesive system where every visual and copy decision directly drives brand recognition and sales growth."
            )}
          </h2>
        </div>
      </section>

      {/* PROBLEMS VS RESULTS - EVEN 6 CARDS IN 3-COL GRID (LEFT ALIGNED HEADER) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Результат співпраці', 'Impact & Results')}</span>
            <h2>{t('Які проблеми ми вирішуємо', 'Problems We Solve')}</h2>
          </div>

          <div className="grid-3-col mobile-carousel">
            {clientProblems.map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DC2626', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <XCircle size={16} />
                    <span>{t('Було / Проблема', 'Before / Problem')}</span>
                  </div>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: '1.4', minHeight: '2.8rem' }}>
                    {item.problem}
                  </p>
                </div>

                <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={16} />
                    <span>{t('Стане / Результат', 'After / Solution')}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.4', minHeight: '3.6rem' }}>
                    {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO INTERMEDIARY BANNER 1: HORECA & BRANDING SHOWCASE */}
      <section className="section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div 
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              height: '260px',
              display: 'flex',
              alignItems: 'center',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop" 
              alt="HoReCa & Hospitality Branding" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,20,22,0.85) 0%, rgba(20,20,22,0.4) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF', maxWidth: '600px' }}>
              <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                {t('Фокусні Ніші: HoReCa & Jewelry', 'Focus Niches: HoReCa & Jewelry')}
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '0.6rem' }}>
                {t('Створюємо візуальний смак та преміальне відчуття бренду', 'Crafting visual taste & luxury brand perception')}
              </h3>
              <p style={{ color: '#E0DFE3', fontSize: '0.95rem' }}>
                {t('Від естетичної упаковки ювелірних виробів до меню та SMM для ресторанів.', 'From aesthetic jewelry packaging to restaurant menus and high-converting SMM.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE DIRECTIONS - LEFT ALIGNED HEADER */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Напрями послуг', 'Core Directions')}</span>
            <h2>{t('4 ключові вектори роботи', '4 Primary Directions')}</h2>
          </div>

          <div className="grid-2-col mobile-carousel">
            {/* Marketing */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '1.2rem' }}>
                <Target size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>{t('Маркетинг', 'Marketing')}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t('Маркетингова стратегія, аудит, позиціонування, UTP, побудова воронок та аналітика цільової аудиторії.', 'Marketing strategy, audit, UVP positioning, sales funnels, and target audience research.')}
              </p>
              <button onClick={() => onNavigate('marketing')} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>{t('Детальніше про маркетинг', 'More about Marketing')}</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Design */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '1.2rem' }}>
                <Palette size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>{t('Графічний Дизайн', 'Graphic Design')}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t('Розробка логотипа, айдентика, брендбуки, дизайн упаковки, поліграфія, рекламні креативи та шаблони.', 'Logo development, brand identity, packaging design, print, and advertising creatives.')}
              </p>
              <button onClick={() => onNavigate('design')} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>{t('Детальніше про дизайн', 'More about Design')}</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* SMM */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '1.2rem' }}>
                <Share2 size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>{t('SMM & Контент', 'SMM & Content')}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t('Ведення соцмереж, контент-планування, виробництво Reels/Shorts, фото/відеозйомки та ком’юніті.', 'Social media management, content planning, Reels/Shorts production, and community building.')}
              </p>
              <button onClick={() => onNavigate('smm')} className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>{t('Детальніше про SMM', 'More about SMM')}</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Complex */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--accent-light)', border: '1px solid rgba(216, 90, 56, 0.3)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginBottom: '1.2rem' }}>
                <Users size={22} />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>{t('Комплексна робота', 'Integrated Work')}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {t('Повноцінна команда 3 фахівців (маркетолог, дизайнер, SMM), яка закриває всі маркетингові задачі під ключ.', 'Full team of 3 specialists (marketer, designer, SMM) handling all marketing needs turnkey.')}
              </p>
              <button onClick={() => onNavigate('complex')} className="btn btn-accent btn-sm" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>{t('Комплексні рішення', 'Integrated Solutions')}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COOPERATION FORMATS - 4 EVEN CARDS IN 2-COL GRID (LEFT ALIGNED HEADER) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Гнучкість', 'Flexibility')}</span>
            <h2>{t('Формати співпраці', 'Cooperation Formats')}</h2>
          </div>

          <div className="grid-2-col mobile-carousel">
            {AGENCY_CONFIG.collaborationFormats.map((fmt, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent)', display: 'block', marginBottom: '0.4rem' }}>
                  0{i + 1}
                </span>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', minHeight: '2.6rem' }}>
                  {t(fmt.titleUa, fmt.titleEn)}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', minHeight: '4.2rem' }}>
                  {t(fmt.descUa, fmt.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE / SECTORS - 6 EVEN CARDS IN 3-COL GRID (LEFT ALIGNED HEADER) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '750px', marginBottom: '2.5rem' }}>
            <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Експертиза', 'Expertise')}</span>
            <h2>{t('Для кого ми працюємо', 'Who We Work With')}</h2>
            <p style={{ marginTop: '0.6rem' }}>
              {t(
                'Ми маємо глибинний досвід у фокусних нішах (HoReCa, Jewelry), але також успішно створюємо системи для локального бізнесу та B2B.',
                'We hold deep domain expertise in gastronomy & jewelry, while building proven marketing systems for local brands and B2B.'
              )}
            </p>
          </div>

          <div className="grid-3-col mobile-carousel">
            {AGENCY_CONFIG.targetAudiences.map((aud, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {i === 0 ? <Utensils size={18} /> : i === 1 ? <Gem size={18} /> : i === 2 ? <Store size={18} /> : i === 3 ? <Sparkles size={18} /> : i === 4 ? <Briefcase size={18} /> : <Building2 size={18} />}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-body)', margin: 0 }}>
                    {t(aud.titleUa, aud.titleEn)}
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', minHeight: '3.8rem' }}>
                  {t(aud.descUa, aud.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION - LEFT ALIGNED HEADER */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Синергія 3-х фахівців', '3 Specialist Synergy')}</span>
            <h2>{t('Команда Pozdni Team', 'Pozdni Team Experts')}</h2>
            <p style={{ marginTop: '0.6rem' }}>
              {t(
                'Замість розрізнених підрядників — згуртована команда з трьох ключових експертів, які працюють синхронно над вашим бізнесом.',
                'Instead of isolated contractors — a unified team of 3 key specialists working synchronously on your business.'
              )}
            </p>
          </div>

          <div className="grid-3-col mobile-carousel">
            {AGENCY_CONFIG.team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERY - LEFT ALIGNED HEADER */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ textAlign: 'left' }}>
              <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Наші роботи', 'Our Work')}</span>
              <h2>{t('Галерея проєктів', 'Project Gallery')}</h2>
            </div>
            <button onClick={() => onNavigate('portfolio')} className="btn btn-outline">
              <span>{t('Усі проєкти в портфоліо', 'All Portfolio Projects')}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-3-col mobile-carousel">
            {AGENCY_CONFIG.portfolioItems.slice(0, 6).map((item) => (
              <PortfolioCard key={item.id} item={item} onSelect={() => onOpenContact(item.title)} />
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED NETWORK EXPANSION / HIRING BLOCK */}
      <section className="section">
        <div className="container">
          <div 
            style={{ 
              backgroundColor: 'var(--bg-dark)', 
              color: '#FFFFFF', 
              borderRadius: 'var(--radius-lg)', 
              padding: '3rem 2.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <span className="tag" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <UserPlus size={14} style={{ marginRight: '0.4rem' }} />
                  {t('Партнерська екосистема & Мережа', 'Partner Ecosystem & Network')}
                </span>
                <h2 style={{ color: '#FFFFFF', fontSize: '2.0rem', marginBottom: '1rem' }}>
                  {t('Розширення мережі фахівців для проєктної співпраці', 'Expanding Specialist Network for Project Collaboration')}
                </h2>
                <p style={{ color: '#C0BFCE', fontSize: '1.0rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {t(
                    'Ми будуємо постійно зростаючу мережу талановитих фахівців (таргетологів, Motion-дизайнерів, веб-розробників, фотографів та копірайтерів). Залучаємо спеціалістів під конкретні завдання та масштабні проєкти на прозорих гонорарних умовах.',
                    'We continuously expand a network of vetted professionals (media buyers, motion designers, developers, photographers, copywriters) for targeted high-scale projects.'
                  )}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    t('Залучення під вузькопрофільні задачі та спецпроєкти', 'Engagement for specialized niche tasks'),
                    t('Прозорий кошторис, фіксований гонорар та своєчасна оплата', 'Transparent estimates & timely competitive payouts'),
                    t('Можливість увійти в постійний пул партнерів агенції', 'Opportunity to join our core agency partner roster')
                  ].map((benefit, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E0DFE3', fontSize: '0.9rem' }}>
                      <ShieldCheck size={16} color="var(--accent)" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.12)', textAlign: 'left' }}>
                <Award size={36} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                  {t('Бажаєте приєднатися?', 'Want to join our network?')}
                </h3>
                <p style={{ color: '#A09FA6', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                  {t('Надішліть портфоліо та резюме. Ми зв’яжемося для обговорення найближчих проєктів.', 'Submit your portfolio and skills. We will get in touch for upcoming projects.')}
                </p>
                <button 
                  onClick={() => onOpenContact('Приєднання до мережі фахівців')} 
                  className="btn btn-accent"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>{t('Подати заявку у мережу', 'Apply to Specialist Network')}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - LEFT ALIGNED HEADER */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>FAQ</span>
            <h2>{t('Часті запитання клієнтів', 'Frequently Asked Questions')}</h2>
          </div>

          <FAQAccordion items={AGENCY_CONFIG.faq} />
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER (FULL 5000+ CHARACTERS) */}
      <SeoBlock
        titleUa={SEO_DATA.home.seoBlockTitleUa}
        titleEn={SEO_DATA.home.seoBlockTitleEn}
        paragraphsUa={SEO_DATA.home.paragraphsUa}
        paragraphsEn={SEO_DATA.home.paragraphsEn}
      />
    </div>
  );
};
