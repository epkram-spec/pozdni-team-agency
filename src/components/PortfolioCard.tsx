import React from 'react';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Thumbnail */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: 'var(--bg-subtle)' }}>
        <img 
          src={item.imageUrl} 
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          className="portfolio-img"
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
          <span className="tag tag-accent" style={{ fontSize: '0.75rem' }}>
            {item.categoryLabel}
          </span>
          <span className="tag" style={{ fontSize: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            {item.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.8rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', lineHeight: '1.3' }}>
          {item.title}
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', flexGrow: 1 }}>
          {item.description}
        </p>

        {/* Executed Scope */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.2rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
            {t('Виконані роботи:', 'Executed Scope:')}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {item.executedScope.map((scope, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={14} color="var(--accent)" />
                <span>{scope}</span>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => onSelect(item)} 
          className="btn btn-outline btn-sm"
          style={{ width: '100%', justifyContent: 'space-between' }}
        >
          <span>{t('Обговорити схожий проєкт', 'Discuss Similar Project')}</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

      <style>{`
        .card:hover .portfolio-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
