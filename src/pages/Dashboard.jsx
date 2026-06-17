import KpiCard from '../components/KpiCard';
import RevenueChart from '../components/RevenueChart';
import UserTable from '../components/UserTable';
import data from '../data/dummy.json';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="kpi-grid">
        {data.kpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </div>

      <div className="dashboard-charts">
        <RevenueChart />
      </div>

      <UserTable limit={5} />
    </div>
  );
}
