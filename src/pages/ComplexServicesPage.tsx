import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { COMPLEX_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { SEO_DATA } from '../config/seoConfig';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Users, CheckCircle2, ArrowRight, Zap, ShieldCheck, Trophy } from 'lucide-react';

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

      {/* ADVANTAGES - LEFT ALIGNED HEADER & 2-COL BALANCED GRID */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Переваги формату', 'Package Benefits')}</span>
            <h2>{t('Чому обирають комплексне рішення?', 'Why Choose an Integrated Package?')}</h2>
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

      {/* VISUAL INTERMEDIARY BANNER 1: EXTERNAL DEPARTMENT SYNERGY */}
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
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop" 
              alt="External Marketing Department Team Sync" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,20,22,0.85) 0%, rgba(20,20,22,0.35) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF', maxWidth: '640px' }}>
              <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                <ShieldCheck size={13} style={{ marginRight: '0.3rem' }} />
                {t('Зовнішній Відділ Маркетингу', 'Turnkey Marketing Department')}
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.6rem' }}>
                {t('Економія до 60% бюджету порівняно з утриманням власного штату', 'Save up to 60% versus maintaining an in-house full-time team')}
              </h3>
              <p style={{ color: '#E0DFE3', fontSize: '0.92rem' }}>
                {t('Отримуйте готову згуртовану команду експертів без витрат на найм та робочі місця.', 'Get a high-performing dedicated team working synchronously.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG (6 ITEMS DISPLAYED IN EXACTLY 3 COLUMNS ON DESKTOP) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Пакетні пропозиції', 'Turnkey Packages')}</span>
            <h2>{t('Каталог комплексних рішень', 'Integrated Solutions Catalog')}</h2>
            <p style={{ marginTop: '0.5rem' }}>{t('Пакетні пропозиції для виводу бізнесу на новий рівень.', 'Turnkey packages to elevate your business to the next level.')}</p>
          </div>
          <ServiceCategorySection categories={COMPLEX_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* VISUAL INTERMEDIARY BANNER 2: TURNKEY BRAND SCALING */}
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
              alt="Strategic Brand Scaling and Growth" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,20,22,0.85) 0%, rgba(20,20,22,0.35) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF', maxWidth: '640px' }}>
              <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                <Trophy size={13} style={{ marginRight: '0.3rem' }} />
                {t('Фокус на результаті', 'Focus on Measurable Outcomes')}
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.6rem' }}>
                {t('Повна відповідальність за фінальний результат та окупність інвестицій', 'Single-point accountability for marketing ROI and brand growth')}
              </h3>
              <p style={{ color: '#E0DFE3', fontSize: '0.92rem' }}>
                {t('Жодних розбіжностей між дизайнером і маркетологом — працюємо як єдиний організм.', 'Zero disconnects between strategy, visual assets, and ad campaigns.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW RETAINER WORKS - LEFT ALIGNED HEADER & 4-CARD BALANCED GRID */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Механіка співпраці', 'Operational Workflow')}</span>
            <h2>{t('Як працює формат «Зовнішній відділ»?', 'How External Department Works?')}</h2>
          </div>
          <div className="grid-2-col mobile-carousel">
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

      {/* FAQ SECTION - LEFT ALIGNED HEADER */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>FAQ</span>
            <h2>{t('Часті запитання про комплексні послуги', 'Integrated Services FAQ')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER (FULL 5000+ CHARACTERS) */}
      <SeoBlock
        titleUa={SEO_DATA.complex.seoBlockTitleUa}
        titleEn={SEO_DATA.complex.seoBlockTitleEn}
        paragraphsUa={SEO_DATA.complex.paragraphsUa}
        paragraphsEn={SEO_DATA.complex.paragraphsEn}
      />
    </div>
  );
};
