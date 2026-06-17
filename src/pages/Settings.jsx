import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Appearance */}
      <div
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '1.5rem',
        }}
      >
        <h3
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '1.25rem',
          }}
        >
          Appearance
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Dark', icon: Moon, value: 'dark' },
            { label: 'Light', icon: Sun, value: 'light' },
          ].map(({ label, icon: Icon, value }) => (
            <button
              key={value}
              onClick={() => { if (theme !== value) toggleTheme(); }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1.25rem 2rem',
                borderRadius: '12px',
                border: theme === value
                  ? '2px solid var(--accent-primary)'
                  : '1px solid var(--border-color)',
                background: theme === value ? 'var(--active-bg)' : 'var(--input-bg)',
                color: theme === value ? 'var(--accent-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              <Icon size={24} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Profile placeholder */}
      <div
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '1.5rem',
        }}
      >
        <h3
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '1.25rem',
          }}
        >
          Profile
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 420 }}>
          {[
            { label: 'Full Name', value: 'Aqsa Basheer' },
            { label: 'Email', value: 'aqsa@metric.io' },
            { label: 'Company', value: 'Metric Inc.' },
          ].map(({ label, value }) => (
            <div key={label}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {label}
              </label>
              <input
                type="text"
                defaultValue={value}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--input-bg)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
              />
            </div>
          ))}
          <button
            onClick={handleSave}
            style={{
              marginTop: '0.5rem',
              padding: '0.7rem 1.5rem',
              borderRadius: '10px',
              border: 'none',
              background: isSaved ? '#10b981' : 'var(--gradient-primary)',
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { e.target.style.opacity = '0.9'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}
          >
            {isSaved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Notifications placeholder */}
      <div
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '1.5rem',
        }}
      >
        <h3
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '1.25rem',
          }}
        >
          Notifications
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { label: 'Email Notifications', desc: 'Receive email alerts for important updates', checked: true },
            { label: 'Weekly Reports', desc: 'Get a weekly summary of your analytics', checked: true },
            { label: 'Marketing Emails', desc: 'Receive product updates and offers', checked: false },
          ].map(({ label, desc, checked }) => (
            <label
              key={label}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '0.85rem',
                borderRadius: '10px',
                background: 'var(--input-bg)',
                cursor: 'pointer',
              }}
            >
              <div>
                <div style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{label}</div>
                <div style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginTop: '0.15rem' }}>{desc}</div>
              </div>
              <input
                type="checkbox"
                defaultChecked={checked}
                style={{
                  width: 18,
                  height: 18,
                  accentColor: '#8b5cf6',
                  cursor: 'pointer',
                  marginTop: '0.1rem',
                }}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
