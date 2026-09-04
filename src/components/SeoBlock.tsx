import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SeoBlockProps {
  titleUa: string;
  titleEn: string;
  paragraphsUa: string[];
  paragraphsEn: string[];
}

export const SeoBlock: React.FC<SeoBlockProps> = ({
  titleUa,
  titleEn,
  paragraphsUa,
  paragraphsEn
}) => {
  const { lang, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const title = lang === 'ua' ? titleUa : titleEn;
  const paragraphs = lang === 'ua' ? paragraphsUa : paragraphsEn;

  return (
    <section 
      className="section" 
      style={{ 
        backgroundColor: 'var(--bg-subtle)', 
        borderTop: '1px solid var(--border-color)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem' 
      }}
    >
      <div className="container" style={{ maxWidth: '960px' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>
          {title}
        </h2>
        
        <div style={{ position: 'relative' }}>
          <div 
            style={{
              maxHeight: isExpanded ? 'none' : '140px',
              overflow: 'hidden',
              position: 'relative',
              transition: 'max-height 0.4s ease-in-out'
            }}
          >
            {paragraphs.map((p, idx) => (
              <p 
                key={idx} 
                style={{ 
                  fontSize: '0.92rem', 
                  lineHeight: '1.75', 
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem' 
                }}
              >
                {p}
              </p>
            ))}

            {!isExpanded && (
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '70px',
                  background: 'linear-gradient(to bottom, rgba(245, 244, 240, 0), var(--bg-subtle))',
                  pointerEvents: 'none'
                }}
              />
            )}
          </div>

          <div style={{ marginTop: '1.2rem', textAlign: 'left' }}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-outline"
              style={{
                fontSize: '0.85rem',
                padding: '0.5rem 1.1rem',
                gap: '0.4rem',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-color)',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <span>
                {isExpanded
                  ? t('Згорнути', 'Show less')
                  : t('Читати повністю', 'Read full text')}
              </span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
