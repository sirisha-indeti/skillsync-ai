import React from 'react'

function Dashboard({ projects = [], tasks = [], notifications = [] }) {
  const activeTasks = tasks.filter((task) => task.status !== 'done')
  const recentNotifications = notifications.slice(0, 3)

  return (
    <div className="page-card">
      <h2>Dashboard</h2>
      <p>Welcome to SkillSync AI. Track your team activity and AI insights in one place.</p>
      <div className="stats-grid">
        <div className="stat-box">
          <h3>{projects.length}</h3>
          <p>Active Projects</p>
        </div>
        <div className="stat-box">
          <h3>{activeTasks.length}</h3>
          <p>Open Tasks</p>
        </div>
        <div className="stat-box">
          <h3>{notifications.filter((notification) => !notification.read).length}</h3>
          <p>Unread Alerts</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-panel">
          <h3>Recent Projects</h3>
          {projects.length > 0 ? (
            <ul className="recent-project-list">
              {projects.slice(0, 3).map((project) => (
                <li key={project.id} className="recent-project-item">
                  <strong>{project.title}</strong>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent projects yet. Add one through the Projects page.</p>
          )}
        </section>

        <section className="dashboard-panel">
          <h3>Quick Alerts</h3>
          {recentNotifications.length > 0 ? (
            <ul className="recent-project-list">
              {recentNotifications.map((notification) => (
                <li key={notification.id} className="recent-project-item">
                  <strong>{notification.title}</strong>
                  <p>{notification.message}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No alerts at the moment.</p>
          )}
        </section>
      </div>
    </div>
  )
}

export default Dashboard
