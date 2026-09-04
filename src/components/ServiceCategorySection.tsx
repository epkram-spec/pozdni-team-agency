import React from 'react';
import { ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface ServiceCategorySectionProps {
  categories: ServiceCategory[];
  onOpenContact: (serviceName?: string) => void;
}

export const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({ categories, onOpenContact }) => {
  const { t } = useLanguage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      {categories.map((cat, idx) => (
        <div 
          key={idx} 
          style={{ 
            backgroundColor: 'var(--bg-surface)', 
            border: '1px solid var(--border-color)', 
            borderRadius: 'var(--radius-lg)', 
            padding: '2.5rem' 
          }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1.8rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            {cat.title}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {cat.items.map((item) => (
              <div 
                key={item.id}
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: item.isKey ? 'var(--accent-light)' : 'var(--bg-primary)',
                  border: item.isKey ? '1px solid rgba(216, 90, 56, 0.3)' : '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                    <span className="tag" style={{ fontSize: '0.75rem' }}>{item.category}</span>
                    {item.isKey && (
                      <span className="tag tag-accent" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                        {t('Ключова послуга', 'Key Service')}
                      </span>
                    )}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenContact(item.name)}
                  className={`btn ${item.isKey ? 'btn-accent' : 'btn-outline'} btn-sm`}
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>{t('Обговорити завдання', 'Discuss Task')}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
