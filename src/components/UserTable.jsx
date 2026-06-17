import { useState } from 'react';
import { Search } from 'lucide-react';
import data from '../data/dummy.json';
import './UserTable.css';

const avatarColors = [
  '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b',
  '#ef4444', '#ec4899', '#6366f1', '#14b8a6',
];

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function UserTable({ limit }) {
  const [search, setSearch] = useState('');

  const filtered = data.users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="user-table-wrapper">
      <div className="table-header">
        <h3>Users {limit ? '(Recent)' : ''}</h3>
        <div className="table-search">
          <Search />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Spent</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((user, i) => (
              <tr key={user.id}>
                <td>
                  <div className="user-cell">
                    <div
                      className="user-avatar-table"
                      style={{ background: avatarColors[i % avatarColors.length] }}
                    >
                      {getInitials(user.name)}
                    </div>
                    <span className="user-name">{user.name}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span className={`plan-badge ${user.plan.toLowerCase()}`}>
                    {user.plan}
                  </span>
                </td>
                <td>
                  <div className="status-indicator">
                    <span className={`status-dot ${user.status}`} />
                    <span>{user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span>
                  </div>
                </td>
                <td>{formatDate(user.joined)}</td>
                <td>${user.spent.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
