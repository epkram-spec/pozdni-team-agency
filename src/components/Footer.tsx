import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Phone, Mail, Send, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-on-dark)', padding: '5rem 0 3rem 0', marginTop: '4rem' }}>
      <div className="container">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid var(--border-color-dark)'
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '1rem' }}>
              {AGENCY_CONFIG.agencyName}<span style={{ color: 'var(--accent)' }}>.</span>
            </h3>
            <p style={{ color: '#A09FA6', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '320px' }}>
              {t(AGENCY_CONFIG.taglineUa, AGENCY_CONFIG.taglineEn)}
            </p>
            <span style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t(AGENCY_CONFIG.contacts.locationUa, AGENCY_CONFIG.contacts.locationEn)}
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.2rem' }}>
              {t('Навігація', 'Navigation')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li>
                <button onClick={() => onNavigate('marketing')} style={linkStyle}>
                  {t('Маркетингові послуги', 'Marketing Services')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('design')} style={linkStyle}>
                  {t('Графічний дизайн & Айдентика', 'Graphic Design & Identity')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('smm')} style={linkStyle}>
                  {t('SMM & Контент', 'SMM & Content')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('complex')} style={linkStyle}>
                  {t('Комплексна робота команди', 'Integrated Team Solutions')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} style={linkStyle}>
                  {t('Портфоліо робіт', 'Portfolio & Work')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.2rem' }}>
              {t('Зв’язатися з нами', 'Connect With Us')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href={`tel:${AGENCY_CONFIG.contacts.phone}`} style={contactLinkStyle}>
                <Phone size={18} color="var(--accent)" />
                <span>{AGENCY_CONFIG.contacts.phoneDisplay}</span>
              </a>
              <a href={`mailto:${AGENCY_CONFIG.contacts.email}`} style={contactLinkStyle}>
                <Mail size={18} color="var(--accent)" />
                <span>{AGENCY_CONFIG.contacts.email}</span>
              </a>
              <a href={AGENCY_CONFIG.contacts.telegramUrl} target="_blank" rel="noopener noreferrer" style={contactLinkStyle}>
                <Send size={18} color="var(--accent)" />
                <span>Telegram: {AGENCY_CONFIG.contacts.telegramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 4: CTA Box */}
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color-dark)' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.6rem' }}>
              {t('Готові обговорити ваш проєкт?', 'Ready to discuss your project?')}
            </h4>
            <p style={{ color: '#A09FA6', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              {t('Залиште заявку й ми запропонуємо рішення для ваших завдань.', 'Leave a request and we will propose a clear solution.')}
            </p>
            <button onClick={onOpenContact} className="btn btn-accent btn-sm" style={{ width: '100%' }}>
              {t('Обговорити завдання', 'Discuss Task')}
            </button>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#706F75', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} {AGENCY_CONFIG.agencyName}. {t('Усі права захищено.', 'All rights reserved.')}
          </p>
          <button 
            onClick={scrollToTop} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#A09FA6', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            <span>{t('Нагору', 'Back to top')}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

const linkStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#A09FA6',
  fontSize: '0.95rem',
  cursor: 'pointer',
  padding: 0,
  textAlign: 'left',
  transition: 'color 0.2s'
};

const contactLinkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
  color: '#E0DFE3',
  fontSize: '0.95rem',
  textDecoration: 'none'
};
