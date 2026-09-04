import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { DESIGN_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { SEO_DATA } from '../config/seoConfig';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Palette, CheckCircle2, ArrowRight, Sparkles, Layers, Package } from 'lucide-react';

interface DesignPageProps {
  onOpenContact: (serviceName?: string) => void;
}

export const DesignPage: React.FC<DesignPageProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const scenarios = [
    t('Створення нового бренду та візуальної ідентичності з нуля', 'Creating new brand identity & visuals from scratch'),
    t('Застарілий логотип чи стилістика, що не відповідає статусу', 'Outdated logo or visuals underperforming market standard'),
    t('Потрібна упаковка продукції, етикетки чи стаканчики для HoReCa', 'Product packaging, labels, or cups for HoReCa/retail'),
    t('Потрібні рекламні баннери, шаблони та оформлення для соцмереж', 'Ad banners, templates, and social media brand assets')
  ];

  return (
    <div>
      {/* HERO BANNER WITH BRANDING PHOTOGRAPHY */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
                <Palette size={14} style={{ marginRight: '0.4rem' }} />
                {t('Напрям: Графічний Дизайн & Айдентика', 'Direction: Graphic Design & Identity')}
              </span>
              <h1 style={{ marginBottom: '1.4rem' }}>
                {t(
                  'Як створити айдентику та дизайн, що закохують і виділяють бізнес?',
                  'How to craft brand identity & design that captivates and sets your business apart?'
                )}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
                {t(
                  'Ми створюємо логотипи, повноцінні брендбуки, упаковку товарів, поліграфію та рекламні візуали, які будують сильну емоційну прив’язку клієнта до бренду.',
                  'We craft logos, comprehensive brand books, product packaging, print collateral, and advertising visuals that forge deep customer connections.'
                )}
              </p>
              <button onClick={() => onOpenContact('Графічний дизайн & Айдентика')} className="btn btn-accent">
                <span>{t('Замовити розробку дизайну', 'Order Design Development')}</span>
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
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop" 
                alt="Brand Identity & Design Packaging"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,22,0.8) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', color: '#FFFFFF' }}>
                <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  <Sparkles size={13} style={{ marginRight: '0.3rem' }} />
                  {t('ПРЕМІАЛЬНА АЙДЕНТИКА', 'PREMIUM IDENTITY')}
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem' }}>
                  {t('Логотипи, Брендбуки & Упаковка', 'Logos, Brandbooks & Packaging')}
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
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Візуальний імідж', 'Visual Image')}</span>
            <h2>{t('Коли потрібні послуги графічного дизайнера?', 'When Do You Need Graphic Design Services?')}</h2>
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

      {/* VISUAL INTERMEDIARY BANNER 1: PACKAGING & HORECA DESIGN */}
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
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop" 
              alt="Packaging and Product Design" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,20,22,0.85) 0%, rgba(20,20,22,0.35) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF', maxWidth: '640px' }}>
              <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                <Package size={13} style={{ marginRight: '0.3rem' }} />
                {t('Дизайн Упаковки & Поліграфія', 'Packaging & Print Craft')}
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.6rem' }}>
                {t('Створюємо дизайн упаковки, що дарує преміальний Unboxing Experience', 'Engineering tactile packaging for elevated unboxing presentation')}
              </h3>
              <p style={{ color: '#E0DFE3', fontSize: '0.92rem' }}>
                {t('Кожна етикетка та коробка виділяється на полиці та підкреслює статус.', 'Product packaging designed to command shelf attention.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG - LEFT ALIGNED HEADER */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag" style={{ marginBottom: '0.8rem' }}>{t('Каталог рішень', 'Design Catalog')}</span>
            <h2>{t('Каталог дизайн-послуг', 'Graphic Design Catalog')}</h2>
            <p style={{ marginTop: '0.5rem' }}>{t('Професійний дизайн для всіх точок контакту клієнта з вашим брендом.', 'Professional design for all customer touchpoints with your brand.')}</p>
          </div>
          <ServiceCategorySection categories={DESIGN_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* VISUAL INTERMEDIARY BANNER 2: BRANDBOOK & DIGITAL VISUALS */}
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
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop" 
              alt="Brandbook Guidelines & Visual System" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,20,22,0.85) 0%, rgba(20,20,22,0.35) 100%)' }} />
            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF', maxWidth: '640px' }}>
              <span className="tag" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                <Layers size={13} style={{ marginRight: '0.3rem' }} />
                {t('Візуальна Система', 'Visual Design System')}
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.6rem' }}>
                {t('Єдиний стильовий гайдбук для всіх ваших підрядників та друкарень', 'Unified brand guidelines governing print, packaging, and digital media')}
              </h3>
              <p style={{ color: '#E0DFE3', fontSize: '0.92rem' }}>
                {t('Стандартизуємо кольори, шрифти та графіку для бездоганного вигляду.', 'Standardizing colors, typography, and grid systems for zero brand drift.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - LEFT ALIGNED HEADER & 4-CARD BALANCED GRID */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'left', maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>{t('Етапи дизайну', 'Design Steps')}</span>
            <h2>{t('Процес розробки дизайну', 'Design Workflow Process')}</h2>
          </div>
          <div className="grid-2-col mobile-carousel">
            {[
              { step: '01', titleUa: 'Мудборд & Концепт', titleEn: 'Moodboard & Concept', descUa: 'Визначення естетичного вектору та стилістики.', descEn: 'Defining visual aesthetic and direction.' },
              { step: '02', titleUa: 'Розробка варіантів', titleEn: 'Option Crafting', descUa: 'Створення унікальних графічних концепцій.', descEn: 'Designing distinct graphic concepts.' },
              { step: '03', titleUa: 'Фіналізація & Гайдбук', titleEn: 'Finalization & Guide', descUa: 'Допрацювання обраного варіанту та адаптація.', descEn: 'Polishing selected concept and guidelines.' },
              { step: '04', titleUa: 'Передача файлів', titleEn: 'File Handoff', descUa: 'Підготовка макетів до друку та векторних вихідників.', descEn: 'Preparing print-ready assets and vector sources.' }
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
            <h2>{t('Часті запитання про дизайн', 'Design FAQ')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER (FULL 5000+ CHARACTERS) */}
      <SeoBlock
        titleUa={SEO_DATA.design.seoBlockTitleUa}
        titleEn={SEO_DATA.design.seoBlockTitleEn}
        paragraphsUa={SEO_DATA.design.paragraphsUa}
        paragraphsEn={SEO_DATA.design.paragraphsEn}
      />
    </div>
  );
};
