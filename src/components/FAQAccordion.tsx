import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionItem {
  questionUa: string;
  questionEn: string;
  answerUa: string;
  answerEn: string;
}

interface FAQAccordionProps {
  items: FAQAccordionItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              transition: 'all 0.2s ease'
            }}
          >
            <button
              onClick={() => toggle(idx)}
              style={{
                width: '100%',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: isOpen ? 'var(--accent)' : 'var(--text-primary)'
              }}
            >
              <span>{t(item.questionUa, item.questionEn)}</span>
              <ChevronDown 
                size={20} 
                style={{ 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  flexShrink: 0
                }} 
              />
            </button>

            {isOpen && (
              <div 
                style={{
                  padding: '0 1.5rem 1.5rem 1.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.65',
                  borderTop: '1px solid rgba(24, 24, 26, 0.05)'
                }}
              >
                {t(item.answerUa, item.answerEn)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
