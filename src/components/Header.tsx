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
            >
              {t(item.labelUa, item.labelEn)}
            </button>
          ))}
        </nav>

        {/* Right Action Group */}
        <div className="header-actions">
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

          {/* Desktop CTA Button */}
          <button 
            onClick={onOpenContact} 
            className="btn btn-primary btn-sm header-cta-desktop"
          >
            <span>{t('Обговорити завдання', 'Discuss Task')}</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Overlay Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-item ${currentTab === item.id ? 'active' : ''}`}
              >
                {t(item.labelUa, item.labelEn)}
              </button>
            ))}
          </div>

          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {t('Мова / Language:', 'Language:')}
              </span>
              <div className="lang-switch">
                <button
                  onClick={() => setLang('ua')}
                  className={`lang-btn ${lang === 'ua' ? 'active' : ''}`}
                >
                  UA
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                >
                  EN
                </button>
              </div>
            </div>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="btn btn-accent"
              style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
            >
              <span>{t('Обговорити завдання', 'Discuss Task')}</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
