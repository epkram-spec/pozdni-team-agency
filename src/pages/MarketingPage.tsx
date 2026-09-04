import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { MARKETING_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';

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
      {/* HERO */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
              <Target size={14} style={{ marginRight: '0.4rem' }} />
              {t('Напрям: Маркетинг', 'Direction: Marketing')}
            </span>
            <h1 style={{ marginBottom: '1.5rem' }}>
              {t(
                'Як побудувати маркетингову систему, що приносить стабільний потік клієнтів?',
                'How to build a marketing system that delivers a consistent customer pipeline?'
              )}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {t(
                'Ми допомагаємо знайти унікальне позиціонування бізнесу, розробити виражену стратегію, побудувати воронки продажів та оптимізувати рекламні витрати.',
                'We help crystallize unique market positioning, formulate executable growth strategies, build sales funnels, and optimize marketing spend.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* WHEN NEEDED */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2>{t('Коли потрібні маркетингові послуги?', 'When Do You Need Marketing Services?')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {scenarios.map((sc, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ fontSize: '1rem', fontWeight: 600 }}>{sc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG (B102:E145) */}
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
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <h2>{t('Процес роботи з маркетингу', 'Marketing Workflow Process')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', titleUa: 'Аналіз & Аудит', titleEn: 'Audit & Analysis', descUa: 'Занурення в бізнес, аналіз конкурентів та аудиторії.', descEn: 'Deep dive into business, competitors and target audience.' },
              { step: '02', titleUa: 'Стратегія & Гіпотези', titleEn: 'Strategy & Hypotheses', descUa: 'Побудова покрокової карти дій та пріоритетів.', descEn: 'Formulating step-by-step roadmap and priorities.' },
              { step: '03', titleUa: 'Впровадження & Воронка', titleEn: 'Implementation & Funnel', descUa: 'Упаковка пропозицій та інтеграція каналів.', descEn: 'Packaging offers and integrating marketing channels.' },
              { step: '04', titleUa: 'Аналітика & Оптимізація', titleEn: 'Analytics & Scaling', descUa: 'Контроль KPI, аналіз результатів та масштабування.', descEn: 'Tracking KPIs, analyzing outcomes and scaling growth.' }
            ].map((p, i) => (
              <div key={i} className="card">
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', display: 'block', marginBottom: '0.6rem' }}>
                  {p.step}
                </span>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>{t(p.titleUa, p.titleEn)}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t(p.descUa, p.descEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>{t('Запитання щодо маркетингу', 'Marketing Questions')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--text-secondary)' }}>
            {t('Маркетингова агенція Pozdni Team — Послуги з маркетингу', 'Pozdni Team Agency — Marketing Services')}
          </h3>
          <p>
            {t(
              'Послуги з маркетингу включають розробку маркетингової стратегії, проведення аудиту, створення позиціонування бренду, побудову воронки продажів та постійний аналітичний супровід для бізнесу в Києві, Україні та віддалено.',
              'Marketing services encompass strategic planning, audit, brand positioning, sales funnel building, and analytics consulting for businesses worldwide.'
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
            {t('Обговоримо маркетингові цілі вашого бізнесу?', 'Discuss Your Business Marketing Goals?')}
          </h2>
          <button onClick={() => onOpenContact('Маркетинг')} className="btn btn-accent">
            <span>{t('Обговорити завдання', 'Discuss Task')}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
