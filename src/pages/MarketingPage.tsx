import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { MARKETING_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { SEO_DATA } from '../config/seoConfig';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Target, CheckCircle2, ArrowRight, TrendingUp, BarChart3, Rocket } from 'lucide-react';

interface MarketingPageProps {
  onOpenContact: (serviceName?: string) => void;
}

export const MarketingPage: React.FC<MarketingPageProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const scenarios = [
    t('Маркетингові дії втратили системність та вимірюваність', 'Marketing efforts lack system and tracking'),
    t('Шукаєте нові точки зростання та додаткові канали залучення', 'Looking for new growth levers and acquisition channels'),
    t('Потрібно чітко сформулювати позиціонування та UTP (УТП)', 'Need to crystallize brand positioning & UVP'),
    t('Потрібен повний аудит перед виводом нового продукту', 'Need a comprehensive audit before new product launch')
  ];

  return (
    <div>
      {/* HERO BANNER WITH PHOTOGRAPHY */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
                <Target size={14} style={{ marginRight: '0.4rem' }} />
                {t('Напрям: Маркетинг & Стратегія', 'Direction: Marketing & Strategy')}
              </span>
              <h1 style={{ marginBottom: '1.4rem' }}>
                {t(
                  'Як побудувати маркетингову систему, що приносить стабільний потік клієнтів?',
                  'How to build a marketing system that delivers a consistent customer pipeline?'
                )}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                {t(
                  'Ми допомагаємо знайти унікальне позиціонування бізнесу, розробити виражену стратегію, побудувати воронки продажів та оптимізувати рекламні витрати.',
                  'We help crystallize unique market positioning, formulate executable growth strategies, build sales funnels, and optimize marketing spend.'
                )}
              </p>
              <button onClick={() => onOpenContact('Маркетингова стратегія')} className="btn btn-accent">
                <span>{t('Замовити маркетинговий аудит', 'Order Marketing Audit')}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Banner Photo */}
            <div 
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                height: '360px',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                alt="Marketing Analytics & Strategy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,22,0.8) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', color: '#FFFFFF' }}>
                <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  <TrendingUp size={13} style={{ marginRight: '0.3rem' }} />
                  {t('СИСТЕМНИЙ МАРКЕТИНГ', 'SYSTEMIC MARKETING')}
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem' }}>
                  {t('Аналітика, Воронки & Масштабування', 'Analytics, Funnels & Scaling')}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN NEEDED - LEFT ALIGNED HEADER & 2-COL BALANCED GRID */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Потреба бізнесу', 'Business Need')}</span>
            <h2>{t('Коли потрібні маркетингові послуги?', 'When Do You Need Marketing Services?')}</h2>
          </div>
          <div className="grid-2-col mobile-carousel">
            {scenarios.map((sc, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-primary)' }}>{sc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL INTERMEDIARY BANNER 1: DATA & ANALYTICS */}
      <section className="section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div 
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              height: '240px',
              display: 'flex',
              alignItems: 'center',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" 
              alt="Data Driven Marketing Strategy" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,20,22,0.85) 0%, rgba(20,20,22,0.35) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF', maxWidth: '640px' }}>
              <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                <BarChart3 size={13} style={{ marginRight: '0.3rem' }} />
                {t('Маркетинг на основі даних', 'Data-Driven Growth')}
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.6rem' }}>
                {t('Оцифровуємо кожен крок клієнта від кліка до повторної покупки', 'Measuring every touchpoint from lead click to recurring customer')}
              </h3>
              <p style={{ color: '#E0DFE3', fontSize: '0.92rem' }}>
                {t('Будуємо прозорі звіти з ROMI, CAC та LTV замість абстрактних графіків.', 'Building real ROMI, CAC, and LTV attribution instead of generic graphs.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG - LEFT ALIGNED HEADER */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Повний каталог', 'Full Catalog')}</span>
            <h2>{t('Каталог маркетингових послуг', 'Marketing Service Catalog')}</h2>
            <p style={{ marginTop: '0.5rem' }}>{t('Спеціалізовані рішення для розбудови стратегії та системного зростання.', 'Targeted solutions for strategy development and scalable growth.')}</p>
          </div>
          <ServiceCategorySection categories={MARKETING_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* VISUAL INTERMEDIARY BANNER 2: PRODUCT LAUNCH & GROWTH */}
      <section className="section" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div 
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              height: '240px',
              display: 'flex',
              alignItems: 'center',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop" 
              alt="Strategic Product Launch" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,20,22,0.85) 0%, rgba(20,20,22,0.35) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF', maxWidth: '640px' }}>
              <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                <Rocket size={13} style={{ marginRight: '0.3rem' }} />
                {t('Швидкий запуск', 'Fast Track Launch')}
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.6rem' }}>
                {t('Готові рішення для розширення ринку та запуску нових напрямів', 'Turnkey expansion roadmaps for new products & verticals')}
              </h3>
              <p style={{ color: '#E0DFE3', fontSize: '0.92rem' }}>
                {t('Формуємо маркетинговий план, що забезпечує результат з першого місяця.', 'Formulating marketing strategies engineered for quick wins.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - LEFT ALIGNED HEADER & 4-CARD BALANCED GRID */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Етапи роботи', 'Work Steps')}</span>
            <h2>{t('Процес роботи з маркетингу', 'Marketing Workflow Process')}</h2>
          </div>
          <div className="grid-2-col mobile-carousel">
            {[
              { step: '01', titleUa: 'Аналіз & Аудит', titleEn: 'Audit & Analysis', descUa: 'Занурення в бізнес, аналіз конкурентів та аудиторії.', descEn: 'Deep dive into business, competitors and target audience.' },
              { step: '02', titleUa: 'Стратегія & Гіпотези', titleEn: 'Strategy & Hypotheses', descUa: 'Побудова покрокової карти дій та пріоритетів.', descEn: 'Formulating step-by-step roadmap and priorities.' },
              { step: '03', titleUa: 'Впровадження & Воронка', titleEn: 'Implementation & Funnel', descUa: 'Упаковка пропозицій та інтеграція каналів.', descEn: 'Packaging offers and integrating marketing channels.' },
              { step: '04', titleUa: 'Аналітика & Оптимізація', titleEn: 'Analytics & Scaling', descUa: 'Контроль KPI, аналіз результатів та масштабування.', descEn: 'Tracking KPIs, analyzing outcomes and scaling growth.' }
            ].map((p, i) => (
              <div key={i} className="card">
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)', display: 'block', marginBottom: '0.5rem' }}>
                  {p.step}
                </span>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>{t(p.titleUa, p.titleEn)}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{t(p.descUa, p.descEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - LEFT ALIGNED HEADER */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>FAQ</span>
            <h2>{t('Часті запитання про маркетинг', 'Marketing FAQ')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faqMarketing} />
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER (FULL 5000+ CHARACTERS) */}
      <SeoBlock
        titleUa={SEO_DATA.marketing.seoBlockTitleUa}
        titleEn={SEO_DATA.marketing.seoBlockTitleEn}
        paragraphsUa={SEO_DATA.marketing.paragraphsUa}
        paragraphsEn={SEO_DATA.marketing.paragraphsEn}
      />
    </div>
  );
};
