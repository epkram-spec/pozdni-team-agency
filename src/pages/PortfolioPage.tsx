import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { PortfolioCard } from '../components/PortfolioCard';
import { SeoBlock } from '../components/SeoBlock';
import { Briefcase, ArrowRight } from 'lucide-react';

interface PortfolioPageProps {
  onOpenContact: (serviceName?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'marketing' | 'design' | 'smm' | 'complex'>('all');

  const filteredItems = AGENCY_CONFIG.portfolioItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div>
      {/* HERO */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
              <Briefcase size={14} style={{ marginRight: '0.4rem' }} />
              {t('Портфоліо робіт', 'Project Portfolio')}
            </span>
            <h1 style={{ marginBottom: '1.5rem' }}>
              {t(
                'Кейси та рішення, розроблені Pozdni Team Agency',
                'Cases & Solutions Crafted by Pozdni Team Agency'
              )}
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {t(
                'Приклади реалізації завдань з айдентики, маркетингових стратегій, SMM-супроводу та комплексного пакування продуктів у нішах HoReCa, ювелірних брендів та B2B.',
                'Selected work across brand identity, marketing strategy, SMM operations, and integrated product packaging in HoReCa & luxury sectors.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & GALLERY */}
      <section className="section">
        <div className="container">
          {/* Category Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.8rem', 
              marginBottom: '3rem',
              justifyContent: 'center' 
            }}
          >
            {[
              { id: 'all', labelUa: 'Усі проєкти', labelEn: 'All Projects' },
              { id: 'marketing', labelUa: 'Маркетинг', labelEn: 'Marketing' },
              { id: 'design', labelUa: 'Графічний Дизайн', labelEn: 'Design' },
              { id: 'smm', labelUa: 'SMM & Контент', labelEn: 'SMM' },
              { id: 'complex', labelUa: 'Комплексні послуги', labelEn: 'Integrated' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`btn ${filter === f.id ? 'btn-accent' : 'btn-outline'} btn-sm`}
              >
                {t(f.labelUa, f.labelEn)}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} onSelect={() => onOpenContact(item.title)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.0rem', marginBottom: '1.5rem' }}>
            {t('Хочете створити схожий проєкт для вашого бізнесу?', 'Want to Create a Similar Project for Your Brand?')}
          </h2>
          <button onClick={() => onOpenContact('Портфоліо')} className="btn btn-accent">
            <span>{t('Обговорити завдання', 'Discuss Task')}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* SEO BLOCK RIGHT BEFORE FOOTER */}
      <SeoBlock
        titleUa="Портфоліо маркетингової агенції Pozdni Team — Реалізовані кейси та дизайн-проєкти"
        titleEn="Pozdni Team Agency Portfolio — Case Studies, Visual Design & Growth Results"
        paragraphsUa={[
          "У нашому портфоліо зібрані реалізовані кейси для ресторанного бізнесу (HoReCa), ювелірних брендів, локальних виробників та B2B-компаній.",
          "Кожен кейс відображає комплексний підхід агенції Pozdni Team: від вивчення аудиторії та позиціонування до створення унікального логотипа, айдентики та запуску SMM.",
          "Ознайомтеся з прикладами робіт та оберіть формат співпраці, який найкраще відповідає цілям вашого бізнесу."
        ]}
        paragraphsEn={[
          "Our portfolio showcases completed client work across gastronomy (HoReCa), luxury jewelry brands, regional retail, and B2B enterprises.",
          "Every case study represents Pozdni Team's holistic methodology: from target market discovery to logo crafting, identity guidelines, and active SMM execution.",
          "Explore our recent projects and choose the collaboration framework best suited to scale your business."
        ]}
      />
    </div>
  );
};
