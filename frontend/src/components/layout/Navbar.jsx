import { NavLink } from 'react-router-dom'

function Navbar({ onLogout }) {
  const navClass = ({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn')

  return (
    <nav className="navbar">
      <div className="brand">SkillSync AI</div>
      <div className="nav-links">
        <NavLink className={navClass} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className={navClass} to="/projects">
          Projects
        </NavLink>
        <NavLink className={navClass} to="/tasks">
          Tasks
        </NavLink>
        <NavLink className={navClass} to="/ai">
          AI
        </NavLink>
        <NavLink className={navClass} to="/workspace">
          Workspace
        </NavLink>
        <NavLink className={navClass} to="/notifications">
          Notifications
        </NavLink>
        <NavLink className={navClass} to="/settings">
          Settings
        </NavLink>
        <NavLink className={navClass} to="/profile">
          Profile
        </NavLink>
        <button className="nav-btn logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
