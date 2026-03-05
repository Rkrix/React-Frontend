
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">MyApp</h2>
        <nav>
          <ul>
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/profile">👤 Profile</a></li>
            <li><a href="/settings">⚙️ Settings</a></li>
            <li><a href="/logout">🚪 Logout</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome to your Dashboard</h1>
          <p>Here’s a quick overview of your activity.</p>
        </header>

        <section className="cards">
          <div className="card">
            <h3>📊 Analytics</h3>
            <p>Track your performance and growth metrics.</p>
          </div>
          <div className="card">
            <h3>📝 Tasks</h3>
            <p>Manage your to-do list and deadlines.</p>
          </div>
          <div className="card">
            <h3>💬 Messages</h3>
            <p>Stay connected with your team.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
