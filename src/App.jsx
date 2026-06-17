import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/Users';
import Analytics from './pages/Analytics';
import SettingsPage from './pages/Settings';
import './App.css';

const pageMeta = {
  '/': { title: 'Dashboard', subtitle: 'Welcome back, Aqsa 👋' },
  '/analytics': { title: 'Analytics', subtitle: 'Deep dive into your data' },
  '/users': { title: 'Users', subtitle: 'Manage your customers' },
  '/settings': { title: 'Settings', subtitle: 'Configure your workspace' },
};

function AppLayout() {
  const location = useLocation();
  const meta = pageMeta[location.pathname] || pageMeta['/'];

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <TopBar title={meta.title} subtitle={meta.subtitle} />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
