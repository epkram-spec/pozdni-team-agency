import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactsPage: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    service: 'all',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim()) {
      setStatus('error');
      setErrorMessage(t('Будь ласка, заповніть ім’я та контактні дані.', 'Please enter your name and contact info.'));
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      const subject = encodeURIComponent(`Заявка зі сторінки контактів від ${formData.name}`);
      const body = encodeURIComponent(
        `Ім'я: ${formData.name}\nКомпанія: ${formData.company}\nКонтакт: ${formData.contact}\nНапрям: ${formData.service}\nЗавдання:\n${formData.message}`
      );
      
      const mailtoUrl = `mailto:${AGENCY_CONFIG.contacts.email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      setStatus('success');
    }, 800);
  };

  return (
    <div>
      {/* HERO */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="tag tag-accent" style={{ marginBottom: '1.2rem' }}>
              <Send size={14} style={{ marginRight: '0.4rem' }} />
              {t('Контакти', 'Contacts')}
            </span>
            <h1 style={{ marginBottom: '1.5rem' }}>
              {t('Давайте обговоримо ваше бізнес-завдання', 'Let’s Discuss Your Business Objective')}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {t(
                'Напишіть нам у месенджер або заповніть форму зворотного зв’язку. Ми дамо відповідь протягом кількох годин.',
                'Message us via Telegram or submit the quick contact form. We reply within a couple of hours.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTS DETAILS & FORM */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
            {/* Direct Contacts Column */}
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.8rem' }}>
                {t('Прямий зв’язок', 'Direct Channels')}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {/* Phone */}
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                      {t('Телефон', 'Phone')}
                    </span>
                    <a href={`tel:${AGENCY_CONFIG.contacts.phone}`} style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {AGENCY_CONFIG.contacts.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                      Email
                    </span>
                    <a href={`mailto:${AGENCY_CONFIG.contacts.email}`} style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {AGENCY_CONFIG.contacts.email}
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Send size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                      Telegram
                    </span>
                    <a href={AGENCY_CONFIG.contacts.telegramUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {AGENCY_CONFIG.contacts.telegramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>
                {t('Надіслати повідомлення', 'Send Message')}
              </h3>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={56} color="var(--accent)" style={{ margin: '0 auto 1.2rem' }} />
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>
                    {t('Заявку успішно створено!', 'Request Created!')}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t(
                      'Поштовий клієнт активовано для відправки листа на epkram@gmail.com.',
                      'Your email client has been prepared for epkram@gmail.com.'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div style={{ padding: '0.8rem', backgroundColor: '#FDF2F2', border: '1px solid #F87171', borderRadius: 'var(--radius-sm)', color: '#991B1B', marginBottom: '1.2rem', fontSize: '0.9rem' }}>
                      <AlertCircle size={18} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">{t('Ваше ім’я', 'Your Name')} *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder={t('Олександр / Марія', 'John / Sarah')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t('Компанія чи сфера', 'Company or Industry')}</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder={t('Наприклад: Ресторан, Beauty, Retail', 'e.g. Restaurant, Beauty, Retail')}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t('Телефон, Email або Telegram', 'Phone, Email or Telegram')} *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="+380... або @username"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t('Напрям послуг', 'Service Direction')}</label>
                    <select 
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="all">{t('Комплексна робота команди (Маркетинг + Дизайн + SMM)', 'Integrated Team (Marketing + Design + SMM)')}</option>
                      <option value="marketing">{t('Маркетинг та Стратегія', 'Marketing & Strategy')}</option>
                      <option value="design">{t('Графічний Дизайн & Айдентика', 'Graphic Design & Identity')}</option>
                      <option value="smm">{t('SMM & Соцмережі', 'SMM & Social Media')}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t('Короткий опис завдання', 'Short Task Description')}</label>
                    <textarea 
                      className="form-textarea" 
                      placeholder={t('Опишіть поточні завдання...', 'Describe your current tasks...')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-accent" 
                    style={{ width: '100%', marginTop: '0.8rem' }}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t('Надіслати заявку', 'Submit Request')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
