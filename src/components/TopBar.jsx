import { useState } from 'react';
import { Search, Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './TopBar.css';

export default function TopBar({ title, subtitle }) {
  const { theme, toggleTheme } = useTheme();
  const [showNotif, setShowNotif] = useState(false);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className="topbar-right">
        <div className="topbar-search">
          <Search />
          <input type="text" placeholder="Search anything..." />
        </div>

        <div style={{ position: 'relative' }}>
          <button className="topbar-btn" aria-label="Notifications" onClick={() => setShowNotif(!showNotif)}>
            <Bell size={18} />
            <span className="notification-dot" />
          </button>
          
          {showNotif && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 0.5rem)',
              right: 0,
              width: '280px',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '1rem',
              boxShadow: 'var(--shadow-card)',
              zIndex: 100,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>Notifications</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>You have no new notifications.</p>
            </div>
          )}
        </div>

        <button className="topbar-btn" onClick={toggleTheme} aria-label="Toggle theme">
          <span className={`theme-toggle-icon ${theme === 'dark' ? '' : 'rotate'}`}>
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </span>
        </button>
      </div>
    </header>
  );
}
