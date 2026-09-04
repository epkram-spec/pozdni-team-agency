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
      style={{
        backgroundColor: 'var(--accent)',
        color: '#FFFFFF',
        padding: '0.75rem 1rem',
        fontSize: '0.92rem',
        position: 'relative',
        zIndex: 90
      }}
    >
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.8rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              padding: '0.2rem 0.6rem', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.75rem', 
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <Sparkles size={14} />
            {t(AGENCY_CONFIG.promoBanner.badgeUa || '', AGENCY_CONFIG.promoBanner.badgeEn || '')}
          </span>
          <span style={{ fontWeight: 500 }}>
            {t(AGENCY_CONFIG.promoBanner.textUa, AGENCY_CONFIG.promoBanner.textEn)}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={onOpenContact}
            style={{
              background: '#FFFFFF',
              color: 'var(--accent)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem 0.9rem',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span>{t(AGENCY_CONFIG.promoBanner.ctaTextUa, AGENCY_CONFIG.promoBanner.ctaTextEn)}</span>
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => setVisible(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.8)',
              cursor: 'pointer',
              padding: '0.2rem'
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
