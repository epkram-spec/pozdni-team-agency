import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PromoBanner } from './components/PromoBanner';
import { ContactModal } from './components/ContactModal';

import { HomePage } from './pages/HomePage';
import { MarketingPage } from './pages/MarketingPage';
import { DesignPage } from './pages/DesignPage';
import { SmmPage } from './pages/SmmPage';
import { ComplexServicesPage } from './pages/ComplexServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactsPage } from './pages/ContactsPage';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [modalInitialService, setModalInitialService] = useState<string>('all');

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
        return <HomePage onNavigate={setCurrentTab} onOpenContact={handleOpenContact} />;
    }
  };

  return (
    <LanguageProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <PromoBanner onOpenContact={() => handleOpenContact('Промо-акція')} />
        <Header 
          currentTab={currentTab} 
          onNavigate={setCurrentTab} 
          onOpenContact={() => handleOpenContact()} 
        />

        <main style={{ flexGrow: 1 }}>
          {renderCurrentPage()}
        </main>

        <Footer 
          onNavigate={setCurrentTab} 
          onOpenContact={() => handleOpenContact()} 
        />

        <ContactModal 
          isOpen={contactModalOpen} 
          onClose={() => setContactModalOpen(false)} 
          initialService={modalInitialService} 
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
