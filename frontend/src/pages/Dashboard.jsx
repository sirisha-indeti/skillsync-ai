import React from 'react'

function Dashboard() {
  return (
    <div className="page-card">
      <h2>Dashboard</h2>
      <p>Welcome to SkillSync AI. Track your team activity and AI insights in one place.</p>
      <div className="stats-grid">
        <div className="stat-box">
          <h3>12</h3>
          <p>Active Projects</p>
        </div>
        <div className="stat-box">
          <h3>48</h3>
          <p>Tasks Completed</p>
        </div>
        <div className="stat-box">
          <h3>4</h3>
          <p>AI Suggestions</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
