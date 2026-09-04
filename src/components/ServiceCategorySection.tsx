import React, { useState } from 'react';
import { ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Link as LinkIcon, Check } from 'lucide-react';

interface ServiceCategorySectionProps {
  categories: ServiceCategory[];
  onOpenContact: (serviceName?: string) => void;
}

export const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({ categories, onOpenContact }) => {
  const { t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (itemId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}#service-${itemId}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedId(itemId);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {categories.map((cat, idx) => {
        const isSixItems = cat.items.length === 6;
        const gridClassName = isSixItems ? 'grid-3-col mobile-carousel' : 'mobile-carousel';

        return (
          <div 
            key={idx} 
            style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '1.5rem' 
            }}
            className="category-box"
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border-color)' }}>
              {cat.title}
            </h3>

            <div className={gridClassName}>
              {cat.items.map((item) => (
                <div 
                  key={item.id}
                  id={`service-${item.id}`}
                  className="service-card-item"
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: item.isKey ? 'var(--accent-light)' : 'var(--bg-primary)',
                    border: item.isKey ? '1px solid rgba(216, 90, 56, 0.35)' : '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    scrollMarginTop: '100px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span className="tag" style={{ fontSize: '0.72rem', padding: '0.25rem 0.6rem' }}>{item.category}</span>
                        {item.isKey && (
                          <span className="tag tag-accent" style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.6rem' }}>
                            {t('Ключова послуга', 'Key Service')}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => handleCopyLink(item.id, e)}
                        title={t('Скопіювати посилання на послугу', 'Copy direct link to service')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: copiedId === item.id ? 'var(--accent)' : 'var(--text-muted)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.4rem',
                          borderRadius: 'var(--radius-sm)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {copiedId === item.id ? <Check size={14} /> : <LinkIcon size={14} />}
                        <span style={{ fontSize: '0.7rem' }}>
                          {copiedId === item.id ? t('Скопійовано!', 'Copied!') : ''}
                        </span>
                      </button>
                    </div>

                    <h4 
                      style={{ 
                        fontSize: '1.1rem', 
                        marginBottom: '0.6rem', 
                        fontFamily: 'var(--font-body)', 
                        fontWeight: 700,
                        lineHeight: 1.35,
                        whiteSpace: 'pre-line',
                        minHeight: '2.8rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {item.name.replace('\\n', '\n')}
                    </h4>

                    <p 
                      style={{ 
                        fontSize: '0.88rem', 
                        color: 'var(--text-secondary)', 
                        marginBottom: '1.25rem', 
                        lineHeight: 1.45,
                        minHeight: '4.2rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenContact(item.name.replace('\n', ' '))}
                    className={`btn ${item.isKey ? 'btn-accent' : 'btn-outline'} btn-sm`}
                    style={{ width: '100%', justifyContent: 'space-between', marginTop: 'auto' }}
                  >
                    <span>{t('Обговорити завдання', 'Discuss Task')}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
