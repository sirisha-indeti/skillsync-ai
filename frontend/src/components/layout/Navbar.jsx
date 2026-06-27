import React from 'react'

function Navbar({ currentPage, onNavigate, onLogout }) {
  return (
    <nav className="navbar">
      <div className="brand">SkillSync AI</div>
      <div className="nav-links">
        <button className={currentPage === 'dashboard' ? 'nav-btn active' : 'nav-btn'} onClick={() => onNavigate('dashboard')}>
          Dashboard
        </button>
        <button className={currentPage === 'projects' ? 'nav-btn active' : 'nav-btn'} onClick={() => onNavigate('projects')}>
          Projects
        </button>
        <button className={currentPage === 'profile' ? 'nav-btn active' : 'nav-btn'} onClick={() => onNavigate('profile')}>
          Profile
        </button>
        <button className="nav-btn logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
