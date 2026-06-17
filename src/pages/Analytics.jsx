import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';
import data from '../data/dummy.json';
import './Dashboard.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: 'rgba(15, 17, 23, 0.9)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '10px',
          padding: '0.75rem 1rem',
          backdropFilter: 'blur(8px)',
        }}
      >
        <p style={{ color: '#a1a1aa', fontSize: '0.75rem', marginBottom: '0.35rem' }}>{label || payload[0].name}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color || entry.payload?.color, fontSize: '0.85rem', fontWeight: 600 }}>
            ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-charts" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {/* Revenue by Source */}
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
              marginBottom: '1.5rem',
            }}
          >
            Revenue by Source
          </h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.revenueBySource} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis
                  dataKey="source"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickFormatter={(v) => `$${v / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {data.revenueBySource.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Distribution */}
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
              marginBottom: '1.5rem',
            }}
          >
            Traffic Distribution
          </h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.trafficData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                  dataKey="visitors"
                  nameKey="source"
                  stroke="none"
                >
                  {data.trafficData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][index]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Traffic table */}
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
          Traffic Sources
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Source', 'Visitors', 'Percentage'].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    borderBottom: '1px solid var(--border-color)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.trafficData.map((item, i) => (
              <tr key={i}>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  {item.source}
                </td>
                <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  {item.visitors.toLocaleString()}
                </td>
                <td style={{ padding: '0.85rem 1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        flex: 1,
                        height: 6,
                        borderRadius: 3,
                        background: 'var(--border-color)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${item.percentage}%`,
                          height: '100%',
                          borderRadius: 3,
                          background: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i],
                        }}
                      />
                    </div>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, minWidth: '32px' }}>
                      {item.percentage}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
