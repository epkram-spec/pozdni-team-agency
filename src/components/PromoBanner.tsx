import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  onOpenContact: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  if (!AGENCY_CONFIG.promoBanner.active || !visible) {
    return null;
  }

  return (
    <div 
      className="promo-banner"
      style={{
        backgroundColor: 'var(--accent)',
        color: '#FFFFFF',
        padding: '0.45rem 0.75rem',
        fontSize: '0.82rem',
        position: 'relative',
        zIndex: 90,
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <div 
        className="container promo-banner-container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '0.5rem 0.8rem',
          maxWidth: 'var(--container-max)',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', flex: 1, minWidth: 0 }}>
          <span 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.25)', 
              padding: '0.15rem 0.5rem', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.7rem', 
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <Sparkles size={12} />
            {t(AGENCY_CONFIG.promoBanner.badgeUa || '', AGENCY_CONFIG.promoBanner.badgeEn || '')}
          </span>
          <span 
            style={{ 
              fontWeight: 500, 
              fontSize: '0.8rem', 
              lineHeight: '1.25',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {t(AGENCY_CONFIG.promoBanner.textUa, AGENCY_CONFIG.promoBanner.textEn)}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <button 
            onClick={onOpenContact}
            style={{
              background: '#FFFFFF',
              color: 'var(--accent)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.25rem 0.7rem',
              fontWeight: 700,
              fontSize: '0.75rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <span>{t(AGENCY_CONFIG.promoBanner.ctaTextUa, AGENCY_CONFIG.promoBanner.ctaTextEn)}</span>
            <ArrowRight size={12} />
          </button>

          <button
            onClick={() => setVisible(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.9)',
              cursor: 'pointer',
              padding: '0.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Hide promo banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
