import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { SMM_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Share2, CheckCircle2, ArrowRight } from 'lucide-react';

interface SmmPageProps {
  onOpenContact: (serviceName?: string) => void;
}

export const SmmPage: React.FC<SmmPageProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const scenarios = [
    t('Публікації виходять хаотично і не приводять реальних клієнтів', 'Posts published erratically with low reach & leads'),
    t('Потрібно розробити трендовий контент та серію коротких Reels/Shorts', 'Need trend-driven video content & Reels/Shorts series'),
    t('Потрібна модерація директу, відповідей та побудова ком’юніті', 'Need active DM moderation and community building'),
    t('Потрібна якісна візуальна сітка Instagram, яка продає', 'Need a clean, aesthetics-first Instagram feed that sells')
  ];

  return (
    <div>
      {/* HERO */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
              <Share2 size={14} style={{ marginRight: '0.4rem' }} />
              {t('Напрям: SMM & Контент', 'Direction: SMM & Content')}
            </span>
            <h1 style={{ marginBottom: '1.5rem' }}>
              {t(
                'Як перетворити соціальні мережі на системний канал комунікації та продажів?',
                'How to turn social media channels into a reliable lead & sales engine?'
              )}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {t(
                'Забезпечуємо повне системне ведення соцмереж: контент-стратегія, тексти, зйомка коротких відео Reels, дизайн публікацій та модерація.',
                'We deliver end-to-end SMM management: content strategy, copy, Reels production, feed design, and community moderation.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* WHEN NEEDED */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2>{t('Коли потрібні послуги SMM?', 'When Do You Need SMM Services?')}</h2>
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

      {/* CATALOG (B59:E101) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h2>{t('Каталог SMM-послуг', 'SMM & Content Service Catalog')}</h2>
            <p>{t('Повний спектр рішень для зростання охоплення та довіри підписників.', 'Comprehensive services to expand organic reach and audience trust.')}</p>
          </div>
          <ServiceCategorySection categories={SMM_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <h2>{t('Процес ведення SMM', 'SMM Management Workflow')}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', titleUa: 'Аналіз & Рубрикатор', titleEn: 'Rubric & Analysis', descUa: 'Аналіз профілю, конкурентів та створення рубрик.', descEn: 'Audit profile, analyze competitors and create rubrics.' },
              { step: '02', titleUa: 'Контент-план & Тексти', titleEn: 'Content Calendar', descUa: 'Розробка теми публікацій та написання постів.', descEn: 'Drafting publication topics and engaging copy.' },
              { step: '03', titleUa: 'Візуал & Продакшн', titleEn: 'Visual & Production', descUa: 'Дизайн сітки, монтаж Reels та сторіз.', descEn: 'Designing feed templates, editing Reels & stories.' },
              { step: '04', titleUa: 'Публікація & Звітність', titleEn: 'Publishing & Reports', descUa: 'Системний постинг, модерація та щомісячний звіт.', descEn: 'Consistent posting, moderation and monthly reports.' }
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
            <h2>{t('Запитання щодо SMM', 'SMM Questions')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--text-secondary)' }}>
            {t('SMM Агенція Pozdni Team — Послуги ведення соціальних мереж', 'Pozdni Team SMM Agency — Social Media Services')}
          </h3>
          <p>
            {t(
              'Ведення Instagram, TikTok, Facebook, розробка контент-плану, зйомка Reels, створення візуального стилю стрічки та ком’юніті-менеджмент для бренду.',
              'End-to-end management of Instagram, TikTok, Facebook, Reels production, feed curation, and community engagement.'
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
            {t('Запустимо системне ведення вашого SMM?', 'Launch Systematic SMM Management?')}
          </h2>
          <button onClick={() => onOpenContact('SMM')} className="btn btn-accent">
            <span>{t('Обговорити завдання', 'Discuss Task')}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
