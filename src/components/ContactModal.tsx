import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialService = 'all' }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    service: initialService,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.contact.trim()) {
      setStatus('error');
      setErrorMessage(t('Будь ласка, заповніть ім’я та контактні дані.', 'Please fill out your name and contact info.'));
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate sending / preparing mailto fallback
    setTimeout(() => {
      // Create mailto fallback link for high reliability
      const subject = encodeURIComponent(`Заявка з сайту від ${formData.name} [${formData.service}]`);
      const body = encodeURIComponent(
        `Ім'я: ${formData.name}\nКомпанія/Сфера: ${formData.company}\nКонтакт: ${formData.contact}\nНапрям послуг: ${formData.service}\nЗавдання:\n${formData.message}`
      );
      
      const mailtoUrl = `mailto:${AGENCY_CONFIG.contacts.email}?subject=${subject}&body=${body}`;
      
      // Trigger mailto link silently or display success state
      window.location.href = mailtoUrl;

      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({ name: '', company: '', contact: '', service: 'all', message: '' });
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(15, 15, 18, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '540px',
          maxHeight: 'calc(100vh - 2rem)',
          overflowY: 'auto',
          padding: '1.8rem',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-color)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'var(--bg-subtle)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-secondary)'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
            <CheckCircle2 size={56} color="var(--accent)" style={{ margin: '0 auto 1.2rem' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>
              {t('Заявку сформовано!', 'Request Created!')}
            </h3>
            <p style={{ marginBottom: '1.8rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {t(
                'Дякуємо! Наш поштовий клієнт відкрито для відправки листів на epkram@gmail.com. Ми зв’яжемося з вами найближчим часом.',
                'Thank you! Your mail client has opened to send to epkram@gmail.com. We will get back to you shortly.'
              )}
            </p>
            <button onClick={handleReset} className="btn btn-primary" style={{ width: '100%' }}>
              {t('Зрозуміло', 'Got it')}
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.4rem', paddingRight: '2rem' }}>
              <span className="tag tag-accent" style={{ marginBottom: '0.4rem', fontSize: '0.75rem' }}>
                {t('Зв’язок з командою', 'Get in Touch')}
              </span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.2rem 0 0.3rem 0' }}>
                {t('Обговорити ваше завдання', 'Discuss Your Task')}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                {t('Заповніть форму або напишіть нам напряму в Telegram чи на почту.', 'Fill out the form or write directly to Telegram / Email.')}
              </p>
            </div>

            {status === 'error' && (
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#FDF2F2',
                  border: '1px solid #F87171',
                  borderRadius: 'var(--radius-sm)',
                  color: '#991B1B',
                  marginBottom: '1.2rem',
                  fontSize: '0.88rem'
                }}
              >
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>
                  {t('Ваше ім’я', 'Your Name')} <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder={t('Олександр / Марія', 'John / Sarah')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ padding: '0.65rem 0.9rem', fontSize: '0.9rem' }}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>
                  {t('Компанія або сфера бізнесу', 'Company or Industry')}
                </label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder={t('Наприклад: Ресторан, Ювелірний бренд, Beauty', 'e.g. Restaurant, Jewelry brand, Beauty')}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ padding: '0.65rem 0.9rem', fontSize: '0.9rem' }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>
                  {t('Телефон, Email або Telegram', 'Phone, Email or Telegram')} <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="+380... або @username або email@domain.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  style={{ padding: '0.65rem 0.9rem', fontSize: '0.9rem' }}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>
                  {t('Напрям послуг', 'Service Direction')}
                </label>
                <select 
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ padding: '0.65rem 0.9rem', fontSize: '0.9rem' }}
                >
                  <option value="all">{t('Комплексна робота команди (Маркетинг + Дизайн + SMM)', 'Complex Team (Marketing + Design + SMM)')}</option>
                  <option value="marketing">{t('Маркетинг та Стратегія', 'Marketing & Strategy')}</option>
                  <option value="design">{t('Графічний Дизайн & Айдентика', 'Graphic Design & Identity')}</option>
                  <option value="smm">{t('SMM & Ведення соціальних мереж', 'SMM & Social Media Management')}</option>
                  <option value="other">{t('Інше завдання', 'Other task')}</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ marginBottom: '0.3rem', fontSize: '0.85rem' }}>
                  {t('Короткий опис завдання', 'Short Task Description')}
                </label>
                <textarea 
                  className="form-textarea"
                  rows={3}
                  placeholder={t('Опишіть поточний стан бізнесу, цілі або що конкретно потрібно створити...', 'Describe your business current state, goals, or what needs to be built...')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ padding: '0.65rem 0.9rem', fontSize: '0.9rem', minHeight: '70px' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-accent" 
                style={{ width: '100%', marginTop: '0.4rem', padding: '0.85rem' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>{t('Надсилання...', 'Submitting...')}</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{t('Надіслати заявку', 'Submit Request')}</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
