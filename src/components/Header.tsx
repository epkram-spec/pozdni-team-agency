import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenContact }) => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', labelUa: 'Головна', labelEn: 'Home' },
    { id: 'marketing', labelUa: 'Маркетинг', labelEn: 'Marketing' },
    { id: 'design', labelUa: 'Дизайн', labelEn: 'Design' },
    { id: 'smm', labelUa: 'SMM', labelEn: 'SMM' },
    { id: 'complex', labelUa: 'Комплексні послуги', labelEn: 'Integrated' },
    { id: 'portfolio', labelUa: 'Портфоліо', labelEn: 'Portfolio' },
    { id: 'contacts', labelUa: 'Контакти', labelEn: 'Contacts' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
          className="logo"
        >
          {AGENCY_CONFIG.agencyName}<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${currentTab === item.id ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {t(item.labelUa, item.labelEn)}
            </button>
          ))}
        </nav>

        {/* Right Action Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Language Switcher */}
          <div className="lang-switch" aria-label="Language Selector">
            <button
              onClick={() => setLang('ua')}
              className={`lang-btn ${lang === 'ua' ? 'active' : ''}`}
              title="Українська мова"
            >
              UA
            </button>
            <button
              onClick={() => setLang('en')}
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              title="English language"
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onOpenContact} 
            className="btn btn-primary btn-sm"
            style={{ display: 'none' }} 
            id="header-cta-desktop"
          >
            {t('Обговорити завдання', 'Discuss Task')}
            <ArrowUpRight size={16} />
          </button>
          <style>{`
            @media (min-width: 992px) {
              #header-cta-desktop { display: inline-flex !important; }
            }
          `}</style>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-outline btn-sm"
            style={{ padding: '0.5rem', display: 'flex' }}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <style>{`
            @media (min-width: 992px) {
              .header .btn-outline { display: none !important; }
              .nav-desktop { display: flex !important; }
            }
            @media (max-width: 991px) {
              .nav-desktop { display: none !important; }
            }
          `}</style>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                background: 'none',
                border: 'none',
                padding: '0.6rem 0',
                fontSize: '1.1rem',
                fontWeight: currentTab === item.id ? '700' : '500',
                color: currentTab === item.id ? 'var(--accent)' : 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              {t(item.labelUa, item.labelEn)}
            </button>
          ))}
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="btn btn-accent"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            {t('Обговорити завдання', 'Discuss Task')}
          </button>
        </div>
      )}
    </header>
  );
};
