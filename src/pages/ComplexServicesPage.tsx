import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { COMPLEX_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComplexServicesPageProps {
  onOpenContact: (serviceName?: string) => void;
}

export const ComplexServicesPage: React.FC<ComplexServicesPageProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const scenarios = [
    t('Вам потрібен повний запуск нового бренду від нуля до перших продажів', 'Need a full brand launch from ground zero to first sales'),
    t('Не хочете витрачати час на менеджмент фрілансерів і шукаєте 1 відповідальну команду', 'Want to bypass freelancer management and rely on 1 accountable team'),
    t('Потрібен повний ребрендинг з оновленням стратегії, айдентики та SMM', 'Need full rebranding including strategy, identity, and SMM'),
    t('Шукаєте альтернативу власному штатному відділу маркетингу', 'Searching for a cost-effective alternative to in-house marketing hire')
  ];

  return (
    <div>
      {/* HERO */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
              <Users size={14} style={{ marginRight: '0.4rem' }} />
              {t('Напрям: Комплексні послуги', 'Direction: Integrated Solutions')}
            </span>
            <h1 style={{ marginBottom: '1.5rem' }}>
              {t(
                'Коли 3 фахівці працюють над одним бізнес-завданням в єдиній системі',
                'When 3 dedicated specialists execute your single business goal in full synergy'
              )}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {t(
                'Маркетолог розробляє стратегію, дизайнер створює візуал, а SMM-спеціаліст пакує та просуває продукт. Ви отримуєте повністю закритий напрям без хаосу та збоїв.',
                'Marketer designs strategy, designer creates identity, and SMM specialist drives execution. You get full turnkey delivery without management friction.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* WHEN NEEDED */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2>{t('Коли потрібна комплексна робота команди?', 'When Do You Need Integrated Team Work?')}</h2>
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
            <h2>{t('Каталог комплексних рішень', 'Integrated Solutions Catalog')}</h2>
            <p>{t('Пакетні пропозиції для виводу бізнесу на новий рівень.', 'Packaged solutions designed to scale your business.')}</p>
          </div>
          <ServiceCategorySection categories={COMPLEX_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* SYNERGY HIGHLIGHT */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <h2>{t('Як працює синергія 3 фахівців', 'How 3-Specialist Synergy Works')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {AGENCY_CONFIG.team.map((m) => (
              <div key={m.id} className="card" style={{ borderTop: '3px solid var(--accent)' }}>
                <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{m.name}</span>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', fontFamily: 'var(--font-body)' }}>{m.role}</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>{t('Запитання щодо комплексних послуг', 'Integrated Services Questions')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq} />
        </div>
      </section>

      {/* SEO BLOCK */}
      <SeoBlock
        titleUa="Комплексні послуги під ключ — Синергія 3 фахівців для вашого бізнесу"
        titleEn="Integrated Turnkey Services — 3-Specialist Synergy for Business Growth"
        paragraphsUa={[
          "Формат комплексного супроводу бізнесу від Pozdni Team Agency поєднує експертизу трьох ключових спеціалістів: маркетингового стратега, графічного дизайнера та SMM-спеціаліста. Це повноцінна альтернатива розрізненим фрілансерам чи дорогому внутрішньому штату.",
          "Ми беремо на себе повну упаковку нового бренду з нуля, ребрендинг існуючих компаній, запуск комплексних промо-кампаній або постійну роботу у форматі «Зовнішній відділ маркетингу» із фіксованою щомісячною оплатою та прозорими KPI.",
          "Комплексний підхід гарантує, що вся маркетингова комунікація — від аналітики ринку до дизайну упаковки та рекламного креативу в соцмережах — працює як єдиний злагоджений механізм."
        ]}
        paragraphsEn={[
          "Integrated business growth support by Pozdni Team Agency pairs three core experts: a marketing strategist, visual brand designer, and SMM execution specialist into one synchronized workflow.",
          "We handle end-to-end brand packaging from scratch, corporate rebranding, strategic launch campaigns, or monthly retainer ops as your external marketing team.",
          "This integrated methodology ensures that every asset — from audience positioning to packaging design and Instagram ad copy — works towards measurable revenue targets."
        ]}
      />

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
            {t('Передасте завдання комплексній команді?', 'Delegate Your Goal to an Integrated Team?')}
          </h2>
          <button onClick={() => onOpenContact('Комплексні послуги')} className="btn btn-accent">
            <span>{t('Обговорити завдання', 'Discuss Task')}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
