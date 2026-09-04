import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PromoBanner } from './components/PromoBanner';
import { ContactModal } from './components/ContactModal';
import { SEO_DATA } from './config/seoConfig';

import { HomePage } from './pages/HomePage';
import { MarketingPage } from './pages/MarketingPage';
import { DesignPage } from './pages/DesignPage';
import { SmmPage } from './pages/SmmPage';
import { ComplexServicesPage } from './pages/ComplexServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactsPage } from './pages/ContactsPage';

function MainApp() {
  const { lang } = useLanguage();
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [modalInitialService, setModalInitialService] = useState<string>('all');

  // Dynamic SEO Page Titles & Meta Descriptions
  useEffect(() => {
    const seo = SEO_DATA[currentTab] || SEO_DATA['home'];
    const title = lang === 'ua' ? seo.titleUa : seo.titleEn;
    const description = lang === 'ua' ? seo.metaDescriptionUa : seo.metaDescriptionEn;

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [currentTab, lang]);

  // Sync state with URL Hash for shareable links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      
      if (!hash) {
        setCurrentTab('home');
        return;
      }

      if (hash === 'contact' || hash === 'contact-modal') {
        setModalInitialService('all');
        setContactModalOpen(true);
        return;
      }

      if (['home', 'marketing', 'design', 'smm', 'complex', 'portfolio', 'contacts'].includes(hash)) {
        setCurrentTab(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Handle service deep linking like #service-c1, #service-m3
      if (hash.startsWith('service-')) {
        const serviceId = hash.replace('service-', '');
        let targetTab = 'home';
        if (serviceId.startsWith('c')) targetTab = 'complex';
        else if (serviceId.startsWith('m')) targetTab = 'marketing';
        else if (serviceId.startsWith('d')) targetTab = 'design';
        else if (serviceId.startsWith('s')) targetTab = 'smm';

        setCurrentTab(targetTab);

        setTimeout(() => {
          const elem = document.getElementById(`service-${serviceId}`);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            elem.style.boxShadow = '0 0 0 3px var(--accent)';
            setTimeout(() => {
              elem.style.boxShadow = '';
            }, 3000);
          }
        }, 300);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : `#${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setModalInitialService(serviceName);
    } else {
      setModalInitialService('all');
    }
    setContactModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentTab) {
      case 'marketing':
        return <MarketingPage onOpenContact={handleOpenContact} />;
      case 'design':
        return <DesignPage onOpenContact={handleOpenContact} />;
      case 'smm':
        return <SmmPage onOpenContact={handleOpenContact} />;
      case 'complex':
        return <ComplexServicesPage onOpenContact={handleOpenContact} />;
      case 'portfolio':
        return <PortfolioPage onOpenContact={handleOpenContact} />;
      case 'contacts':
        return <ContactsPage />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PromoBanner onOpenContact={() => handleOpenContact('Промо-акція')} />
      <Header 
        currentTab={currentTab} 
        onNavigate={handleNavigate} 
        onOpenContact={() => handleOpenContact()} 
      />

      <main style={{ flexGrow: 1, width: '100%' }}>
        {renderCurrentPage()}
      </main>

      <Footer 
        onNavigate={handleNavigate} 
        onOpenContact={() => handleOpenContact()} 
      />

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        initialService={modalInitialService} 
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;
