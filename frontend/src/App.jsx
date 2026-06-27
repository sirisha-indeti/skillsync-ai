import { useState } from 'react'
import './App.css'
import './assets/styles/globals.css'
import './assets/styles/variables.css'
import './assets/styles/scrollbar.css'
import Navbar from './components/layout/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [currentPage, setCurrentPage] = useState('dashboard')

  const handleLogout = () => {
    setIsAuthenticated(false)
    setAuthMode('login')
    setCurrentPage('dashboard')
  }

  const renderPage = () => {
    if (!isAuthenticated) {
      return authMode === 'login' ? (
        <Login
          onSwitchToRegister={() => setAuthMode('register')}
          onLoginSuccess={() => setIsAuthenticated(true)}
        />
      ) : (
        <Register
          onSwitchToLogin={() => setAuthMode('login')}
          onRegisterSuccess={() => setIsAuthenticated(true)}
        />
      )
    }

    switch (currentPage) {
      case 'projects':
        return <Projects />
      case 'profile':
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app-shell">
      {isAuthenticated && <Navbar currentPage={currentPage} onNavigate={setCurrentPage} onLogout={handleLogout} />}
      <main className="main-content">{renderPage()}</main>
    </div>
  )
}

export default App
