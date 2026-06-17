import { DollarSign, Users, TrendingUp, TrendingDown, CreditCard } from 'lucide-react';
import './KpiCard.css';

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  CreditCard,
};

export default function KpiCard({ label, value, change, trend, icon }) {
  const Icon = iconMap[icon] || DollarSign;

  return (
    <div className="kpi-card">
      <div className="kpi-header">
        <div className="kpi-icon">
          <Icon size={22} />
        </div>
        <div className={`kpi-trend ${trend}`}>
          {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {Math.abs(change)}%
        </div>
      </div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-label">{label}</div>
    </div>
  );
}
