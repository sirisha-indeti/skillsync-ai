import React from 'react'

function Navbar({ currentPage, onNavigate }) {
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
      </div>
    </nav>
  )
}

export default Navbar
