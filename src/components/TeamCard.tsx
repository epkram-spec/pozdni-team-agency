import React from 'react';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Photo Placeholder */}
      <div 
        style={{
          width: '100%',
          height: '320px',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          backgroundColor: 'var(--bg-subtle)',
          position: 'relative'
        }}
      >
        <img 
          src={member.photoUrl} 
          alt={`${member.name} - ${member.role}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            backgroundColor: 'rgba(20, 20, 22, 0.85)',
            color: '#FFFFFF',
            padding: '0.4rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}
        >
          {member.name}
        </div>
      </div>

      {/* Info */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem' }}>{member.name}</h3>
        <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>
          {member.role}
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
          {member.description}
        </p>

        {/* Skills Tag Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {member.skills.map((skill, i) => (
            <span key={i} className="tag" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
