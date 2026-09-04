import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { SMM_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Share2, CheckCircle2, ArrowRight, Video } from 'lucide-react';

interface SmmPageProps {
  onOpenContact: (serviceName?: string) => void;
}

export const SmmPage: React.FC<SmmPageProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const scenarios = [
    t('Профіль ведуть хаотично, відсутня єдина сітка та стиль', 'Social account managed randomly without grid harmony'),
    t('Публікації та сторіз не приносять заявок і лідів', 'Posts & stories yield zero active leads'),
    t('Потрібно регулярне виробництво коротких відео Reels/Shorts', 'Need consistent production of short Reels/Shorts video'),
    t('Потрібно побудувати активне ком’юніті та довіру аудиторії', 'Need to nurture an engaged community & follower trust')
  ];

  return (
    <div>
      {/* HERO BANNER WITH SMM PRODUCTION PHOTOGRAPHY */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
                <Share2 size={14} style={{ marginRight: '0.4rem' }} />
                {t('Напрям: SMM & Контент-маркетинг', 'Direction: SMM & Content Marketing')}
              </span>
              <h1 style={{ marginBottom: '1.4rem' }}>
                {t(
                  'Як перетворити соціальні мережі на стабільне джерело клієнтів?',
                  'How to turn social media into a reliable source of loyal clients?'
                )}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                {t(
                  'Ми створюємо системні контент-стратегії, організовуємо фото/відеозйомки, випускаємо Reels/TikToks та забезпечуємо системне ведення соцмереж.',
                  'We construct social strategies, coordinate photo/video shoots, produce viral Reels/TikToks, and ensure consistent community growth.'
                )}
              </p>
              <button onClick={() => onOpenContact('SMM & Контент-стратегія')} className="btn btn-accent">
                <span>{t('Обговорити SMM-супровід', 'Discuss SMM Retainer')}</span>
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
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                alt="SMM Video Production & Content Creation"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,22,0.8) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', color: '#FFFFFF' }}>
                <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  <Video size={13} style={{ marginRight: '0.3rem' }} />
                  {t('REELS & КОНТЕНТ ПРОДАКШН', 'REELS & CONTENT PRODUCTION')}
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem' }}>
                  {t('Контент-план, Відеозйомка & SMM', 'Content Plan, Video Shoot & SMM')}
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
            <h2>{t('Коли потрібен професійний SMM?', 'When Do You Need Professional SMM?')}</h2>
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
            <h2>{t('Каталог SMM-послуг', 'SMM Service Catalog')}</h2>
            <p>{t('Комплексні рішення для залучення підписників та перетворення їх на покупців.', 'End-to-end solutions for engaging followers and driving customer sales.')}</p>
          </div>
          <ServiceCategorySection categories={SMM_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <h2>{t('Процес ведення соцмереж', 'SMM Workflow Process')}</h2>
          </div>
          <div className="mobile-carousel">
            {[
              { step: '01', titleUa: 'Аналіз & Рубрикатор', titleEn: 'Audit & Content Pillars', descUa: 'Розробка теми, рубрик та тон мовлення (Tone of Voice).', descEn: 'Defining themes, pillars and Tone of Voice.' },
              { step: '02', titleUa: 'Контент-план & Зйомка', titleEn: 'Content Plan & Shooting', descUa: 'Планування фото/відео та проведення зйомок.', descEn: 'Planning grid & executing photo/video shoots.' },
              { step: '03', titleUa: 'Публікація & Stories', titleEn: 'Publishing & Stories', descUa: 'Щоденний вихід постів, сторіз та Reels у графіку.', descEn: 'Daily publishing of posts, stories & Reels.' },
              { step: '04', titleUa: 'Ком’юніті & Аналітика', titleEn: 'Community & Analytics', descUa: 'Робота з коментарями, моніторинг охоплень та KPI.', descEn: 'Community interaction, reach tracking & KPI reports.' }
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
            <h2>{t('Часті запитання про SMM', 'SMM FAQ')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER */}
      <SeoBlock
        titleUa="Послуги SMM, просування в Instagram, TikTok та створення контенту від Pozdni Team Agency"
        titleEn="SMM, Instagram Growth, TikTok & Content Marketing by Pozdni Team Agency"
        paragraphsUa={[
          "Соціальні мережі сьогодні — це головна вітрина вашого бізнесу. Професійний SMM від Pozdni Team Agency поєднує виражений візуальний стиль, системне контент-планування та регулярне висвітлення цінностей бренду.",
          "Ми беремо на себе повний цикл SMM: від розробки стратегії та Tone of Voice до організації професійних предметних чи іміджевих фотозйомок і монтажу Reels.",
          "Завдяки синергії з маркетологом та дизайнером наш SMM створює не просто гарну картинку, а сформовану довіру та регулярні звернення потенційних клієнтів."
        ]}
        paragraphsEn={[
          "Social media serves as the primary storefront of modern business. Professional SMM by Pozdni Team Agency merges cohesive visual style, structured content scheduling, and ongoing brand messaging.",
          "We handle the end-to-end social media lifecycle: from strategy design and Tone of Voice development to on-site video shoots and short-form Reels editing.",
          "In close alignment with our marketing strategists and graphic designers, our SMM execution builds real consumer trust and drives inbound customer inquiries."
        ]}
      />
    </div>
  );
};
