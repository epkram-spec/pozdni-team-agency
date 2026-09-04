import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { DESIGN_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Palette, CheckCircle2, ArrowRight } from 'lucide-react';

interface DesignPageProps {
  onOpenContact: (serviceName?: string) => void;
}

export const DesignPage: React.FC<DesignPageProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const scenarios = [
    t('Створюєте новий продукт чи відкриваєте новий бренд', 'Launching a new product or founding a brand'),
    t('Поточна візуальна стиль застаріла і не передає цінності', 'Current visual identity is outdated and hides brand value'),
    t('Потрібна якісна продаюча упаковка для виходу на полиці', 'Need high-converting packaging design for retail shelves'),
    t('Потрібна єдина система шаблонів для соцмереж та реклами', 'Need a unified graphic system for social media & ads')
  ];

  return (
    <div>
      {/* HERO */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
              <Palette size={14} style={{ marginRight: '0.4rem' }} />
              {t('Напрям: Графічний Дизайн', 'Direction: Graphic Design')}
            </span>
            <h1 style={{ marginBottom: '1.5rem' }}>
              {t(
                'Як створити айдентику та дизайн, який вирізняє бренд і формує довіру?',
                'How to craft a brand identity & design that cuts through the noise and builds instant trust?'
              )}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {t(
                'Створюємо виразну візуальну ідентичність: від логотипа, брендбуку та упаковки до рекламних баннерів і поліграфії.',
                'We build expressive visual identities: from logos, brand books, and packaging to social templates and ad creatives.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* WHEN NEEDED */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2>{t('Коли потрібні послуги графічного дизайну?', 'When Do You Need Graphic Design Services?')}</h2>
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

      {/* CATALOG */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h2>{t('Каталог послуг з дизайну', 'Graphic Design Service Catalog')}</h2>
            <p>{t('Повний спектр візуальних рішень для вашого бізнесу.', 'Complete spectrum of visual design solutions for your brand.')}</p>
          </div>
          <ServiceCategorySection categories={DESIGN_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <h2>{t('Процес створення дизайну', 'Design Creation Workflow')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', titleUa: 'Бриф & Мудборди', titleEn: 'Brief & Moodboards', descUa: 'Збір вимог, дослідження стилю та візуальні референси.', descEn: 'Requirement gathering, moodboards, and style references.' },
              { step: '02', titleUa: 'Розробка концепцій', titleEn: 'Concept Design', descUa: 'Створення кількох принципово різних варіантів дизайну.', descEn: 'Creating distinct visual concepts for review.' },
              { step: '03', titleUa: 'Фіналізація & Гайд', titleEn: 'Finalization & Guide', descUa: 'Допрацювання обраного варіанту та верстка брендбуку.', descEn: 'Refining chosen concept and compiling brand guidelines.' },
              { step: '04', titleUa: 'Передача файлів', titleEn: 'Asset Handoff', descUa: 'Підготовка макетів до друку та векторних файлів для вебу.', descEn: 'Preparing print-ready layouts and vector web assets.' }
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
            <h2>{t('Запитання щодо дизайну', 'Design Questions')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK */}
      <SeoBlock
        titleUa="Послуги з графічного дизайну, айдентики та розробки брендбуку"
        titleEn="Graphic Design Services, Identity & Brandbook Development"
        paragraphsUa={[
          "Професійні послуги графічного дизайну від Pozdni Team — це створення преміального візуального образу бренду, який запам’ятовується з першого погляду. Ми розробляємо унікальні логотипи, фірмовий стиль, гайдбуки та брендбуки для компаній будь-якого масштабу.",
          "Також ми спеціалізуємося на дизайні упаковки товарів, етикеток, поліграфії для закладів HoReCa (меню, плакати, вивіски), оформленні точок продажу (POS-матеріали) та створенні високоефективних рекламних банерів і креативів для цифрових каналів (Meta Ads, Google Banner Ads).",
          "Якісний графічний дизайн підвищує довіру до бренду, вирізняє вас серед конкурентів та безпосередньо впливає на готовність клієнта купити ваш продукт за вищою ціною."
        ]}
        paragraphsEn={[
          "Professional graphic design services by Pozdni Team build a premium visual presence that sets your brand apart. We craft bespoke logos, visual identity systems, style guides, and brandbooks.",
          "We also excel in packaging design, product labels, collateral print materials for HoReCa (menus, signage, posters), retail POS displays, and high-performing digital marketing assets for Meta Ads and Google display networks.",
          "Strategic visual design builds consumer trust, elevates perceived brand value, and drives conversions."
        ]}
      />

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
            {t('Обговоримо візуальний стиль вашого бренду?', 'Discuss Your Brand Visual Style?')}
          </h2>
          <button onClick={() => onOpenContact('Дизайн')} className="btn btn-accent">
            <span>{t('Обговорити завдання', 'Discuss Task')}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
