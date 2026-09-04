import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { COMPLEX_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Users, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

interface ComplexServicesPageProps {
  onOpenContact: (serviceName?: string) => void;
}

export const ComplexServicesPage: React.FC<ComplexServicesPageProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const scenarios = [
    t('Потрібен новий запуск бізнесу чи бренду «під ключ»', 'Need a complete new business or brand launch turnkey'),
    t('Втомилися координувати розрізнених фрілансерів без єдиного стилю', 'Tired of coordinating isolated freelancers with zero alignment'),
    t('Шукаєте вигідну альтернативу дорогому внутрішньому маркетинговому відділу', 'Seeking a cost-effective alternative to hiring an in-house team'),
    t('Потрібна цілісна система: маркетинг + дизайн + SMM у синергії', 'Need a full system: marketing + design + SMM in synergy')
  ];

  return (
    <div>
      {/* HERO BANNER WITH TEAM PHOTOGRAPHY */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
                <Users size={14} style={{ marginRight: '0.4rem' }} />
                {t('Напрям: Комплексна робота 3-х Фахівців', 'Direction: Integrated Team of 3 Specialists')}
              </span>
              <h1 style={{ marginBottom: '1.4rem' }}>
                {t(
                  'Комплексні пакети та формат «Зовнішній відділ маркетингу»',
                  'Turnkey Packages & "External Marketing Team" Retainer Model'
                )}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                {t(
                  'Три профільні спеціалісти (маркетолог, дизайнер, SMM-експерт) працюють синхронно над вашим проєктом, виключаючи неузгодженість і злиття бюджетів.',
                  'Three dedicated specialists (marketer, designer, SMM expert) work synchronously on your business, eliminating disconnects and wasted budget.'
                )}
              </p>
              <button onClick={() => onOpenContact('Зовнішній відділ маркетингу')} className="btn btn-accent">
                <span>{t('Обговорити комплексне рішення', 'Discuss Integrated Package')}</span>
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Pozdni Team Integrated Collaboration"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,22,0.8) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', color: '#FFFFFF' }}>
                <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  <Zap size={13} style={{ marginRight: '0.3rem' }} />
                  {t('СИНЕРГІЯ ТРЬОХ ЕКСПЕРТІВ', 'SYNERGY OF 3 EXPERTS')}
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem' }}>
                  {t('Маркетолог + Дизайнер + SMM', 'Marketer + Designer + SMM')}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES - MOBILE CAROUSEL */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2>{t('Чому обирають комплексне рішення?', 'Why Choose an Integrated Package?')}</h2>
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

      {/* CATALOG (6 ITEMS DISPLAYED IN EXACTLY 3 COLUMNS ON DESKTOP) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h2>{t('Каталог комплексних рішень', 'Integrated Solutions Catalog')}</h2>
            <p>{t('Пакетні пропозиції для виводу бізнесу на новий рівень.', 'Turnkey packages to elevate your business to the next level.')}</p>
          </div>
          <ServiceCategorySection categories={COMPLEX_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* HOW RETAINER WORKS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <h2>{t('Як працює формат «Зовнішній відділ»?', 'How External Department Works?')}</h2>
          </div>
          <div className="mobile-carousel">
            {[
              { step: '01', titleUa: 'Закріплення команди', titleEn: 'Team Allocation', descUa: 'Призначається маркетолог, дизайнер та SMM фахівець.', descEn: 'Marketer, designer, and SMM specialist assigned.' },
              { step: '02', titleUa: 'Розробка медіа-плану', titleEn: 'Media Roadmap', descUa: 'Формування спринтів, завдань та графіку публікацій.', descEn: 'Creating sprints, deliverables and content schedule.' },
              { step: '03', titleUa: 'Синхронна робота', titleEn: 'Synchronous Execution', descUa: 'Дизайн розробляється під стратегію, SMM пакує контент.', descEn: 'Design matches strategy while SMM packages content.' },
              { step: '04', titleUa: 'Щомісячний звіт', titleEn: 'Monthly Analytics Report', descUa: 'Аналіз охоплень, лідів, конверсій та коригування дій.', descEn: 'Reviewing reach, leads, conversions and adjusting.' }
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
            <h2>{t('Часті запитання про комплексні послуги', 'Integrated Services FAQ')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER */}
      <SeoBlock
        titleUa="Комплексні маркетингові послуги та зовнішній відділ маркетингу від Pozdni Team Agency"
        titleEn="Turnkey Integrated Marketing & External Marketing Department by Pozdni Team Agency"
        paragraphsUa={[
          "Найбільший ефект у маркетингу досягається тоді, коли стратегія, візуальна айдентика та просування в соцмережах розробляються єдиною командою. Формат «Зовнішній відділ маркетингу» від Pozdni Team Agency дозволяє замінити цілий внутрішній штат за ціною одного фахівця.",
          "Команда з трьох профільних експертів (маркетолог, графічний дизайнер, SMM-спеціаліст) бере на себе повний цикл просування вашого бренду: від розробки воронки продажів до регулярної зйомки Reels.",
          "Обирайте готовий комплексний пакет для запуску нового бренду, проведення ребрендингу або регулярного щомісячного Retainer-супроводу."
        ]}
        paragraphsEn={[
          "The greatest growth momentum occurs when marketing strategy, design identity, and SMM operate in complete synergy. Our 'External Marketing Department' model replaces an entire in-house team at a fraction of the cost.",
          "Our squad of 3 dedicated professionals (marketing strategist, graphic designer, SMM manager) handles your brand lifecycle: from sales funnel construction to ongoing visual production.",
          "Select a tailored turnkey package for launching a new brand, launching a rebrand, or setting up a monthly growth retainer."
        ]}
      />
    </div>
  );
};
