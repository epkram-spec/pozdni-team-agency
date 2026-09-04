import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { MARKETING_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Target, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';

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

      {/* WHEN NEEDED - MOBILE CAROUSEL */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2>{t('Коли потрібні маркетингові послуги?', 'When Do You Need Marketing Services?')}</h2>
          </div>
          <div className="mobile-carousel">
            {scenarios.map((sc, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-primary)' }}>{sc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h2>{t('Каталог маркетингових послуг', 'Marketing Service Catalog')}</h2>
            <p>{t('Спеціалізовані рішення для розбудови стратегії та системного зростання.', 'Targeted solutions for strategy development and scalable growth.')}</p>
          </div>
          <ServiceCategorySection categories={MARKETING_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <h2>{t('Процес роботи з маркетингу', 'Marketing Workflow Process')}</h2>
          </div>
          <div className="mobile-carousel">
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

      {/* FAQ SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>FAQ</span>
            <h2>{t('Часті запитання про маркетинг', 'Marketing FAQ')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER */}
      <SeoBlock
        titleUa="Послуги маркетингу та стратегічного аналізу від Pozdni Team Agency"
        titleEn="Strategic Marketing & Analytics Services by Pozdni Team Agency"
        paragraphsUa={[
          "Системний маркетинг — це фундамент стабільного зростання будь-якого бізнесу. Команда Pozdni Team Agency допомагає відійти від інтуїтивних хаотичних дій до вимірюваної маркетингової стратегії з чіткими KPI.",
          "Ми проводимо глибокі дослідження ринку, аудиторії та конкурентів, формуємо ціннісну пропозицію (УТП), будуємо воронки залучення та налаштовуємо наскрізну аналітику.",
          "Незалежно від того, чи потрібен вам разовий маркетинговий аудит перед запуском нового продукту, чи повноцінне стратегічне супроводження — ми гарантуємо прозорий підхід та фокус на вимірній окупності."
        ]}
        paragraphsEn={[
          "Systemic marketing forms the backbone of predictable business growth. Pozdni Team Agency guides companies from fragmented marketing actions to a structured strategy with clear performance metrics.",
          "We execute deep market, competitor, and audience research, craft unique value propositions (UVP), construct multi-stage sales funnels, and implement end-to-end performance analytics.",
          "Whether you require a one-off pre-launch audit or long-term strategic growth execution, we deliver transparent workflows focused on verifiable ROI."
        ]}
      />
    </div>
  );
};
