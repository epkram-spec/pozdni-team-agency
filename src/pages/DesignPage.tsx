import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceCategorySection } from '../components/ServiceCategorySection';
import { DESIGN_SERVICES_CATALOG } from '../config/servicesCatalog';
import { FAQAccordion } from '../components/FAQAccordion';
import { SeoBlock } from '../components/SeoBlock';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Palette, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

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

      {/* WHEN NEEDED - MOBILE CAROUSEL */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2>{t('Коли потрібні послуги графічного дизайнера?', 'When Do You Need Graphic Design Services?')}</h2>
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
            <h2>{t('Каталог дизайн-послуг', 'Graphic Design Catalog')}</h2>
            <p>{t('Професійний дизайн для всіх точок контакту клієнта з вашим брендом.', 'Professional design for all customer touchpoints with your brand.')}</p>
          </div>
          <ServiceCategorySection categories={DESIGN_SERVICES_CATALOG} onOpenContact={onOpenContact} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <h2>{t('Процес розробки дизайну', 'Design Workflow Process')}</h2>
          </div>
          <div className="mobile-carousel">
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

      {/* FAQ SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="tag tag-accent" style={{ marginBottom: '0.8rem' }}>FAQ</span>
            <h2>{t('Часті запитання про дизайн', 'Design FAQ')}</h2>
          </div>
          <FAQAccordion items={AGENCY_CONFIG.faq.slice(0, 4)} />
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER */}
      <SeoBlock
        titleUa="Послуги графічного дизайну, розробки айдентики та брендінг від Pozdni Team Agency"
        titleEn="Graphic Design, Brand Identity & Packaging Services by Pozdni Team Agency"
        paragraphsUa={[
          "Візуальний стиль бізнесу — це перший індикатор довіри клієнта. Графічний дизайн від Pozdni Team Agency перетворює цінності вашої компанії на виражену айдентику, логотипи та брендбуки, що виділяються серед конкурентів.",
          "Ми розробляємо дизайн упаковки для роздрібних товарів, фірмові елементи для HoReCa (меню, стаканчики, форму, вивіски), рекламні креативи та презентаційні матеріали.",
          "Кожен дизайн-проєкт створюється у тісній взаємодії з маркетологом, що гарантує не лише візуальну естетику, але й комерційну ефективність матеріалів."
        ]}
        paragraphsEn={[
          "Visual presentation is the primary indicator of brand trust. Pozdni Team Agency crafts expressive brand identity, logo design, and comprehensive brand guidelines that elevate market presence.",
          "We design packaging for retail products, branded collateral for hospitality (menus, custom cups, signage), high-converting ad visuals, and executive pitch decks.",
          "Every design asset is developed alongside marketing strategists to ensure maximum aesthetic quality coupled with commercial effectiveness."
        ]}
      />
    </div>
  );
};
