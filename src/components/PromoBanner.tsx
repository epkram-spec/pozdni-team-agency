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
        padding: '0.65rem 1rem',
        fontSize: '0.88rem',
        position: 'relative',
        zIndex: 90
      }}
    >
      <div 
        className="container promo-banner-content" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.6rem 1rem'
        }}
      >
        <div className="promo-banner-text" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.25)', 
              padding: '0.2rem 0.6rem', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.72rem', 
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              whiteSpace: 'nowrap'
            }}
          >
            <Sparkles size={13} />
            {t(AGENCY_CONFIG.promoBanner.badgeUa || '', AGENCY_CONFIG.promoBanner.badgeEn || '')}
          </span>
          <span style={{ fontWeight: 500, fontSize: '0.86rem', lineHeight: '1.3' }}>
            {t(AGENCY_CONFIG.promoBanner.textUa, AGENCY_CONFIG.promoBanner.textEn)}
          </span>
        </div>

        <div className="promo-banner-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginLeft: 'auto' }}>
          <button 
            onClick={onOpenContact}
            style={{
              background: '#FFFFFF',
              color: 'var(--accent)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem 0.85rem',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <span>{t(AGENCY_CONFIG.promoBanner.ctaTextUa, AGENCY_CONFIG.promoBanner.ctaTextEn)}</span>
            <ArrowRight size={13} />
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
              alignItems: 'center'
            }}
            aria-label="Hide promo banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
