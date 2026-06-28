import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import './assets/styles/globals.css'
import './assets/styles/variables.css'
import './assets/styles/scrollbar.css'
import './assets/styles/page-layouts.css'
import Navbar from './components/layout/Navbar.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [projects, setProjects] = useState([
    { id: 1, title: 'AI Resume Matching', description: 'Improve candidate screening with AI.' },
    { id: 2, title: 'Team Skill Mapping', description: 'Visualize team strengths and gaps.' },
  ])
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Write project brief', description: 'Define scope for AI resume matching.', status: 'todo' },
    { id: 2, title: 'Review candidate data', description: 'Analyze resume dataset quality.', status: 'in-progress' },
  ])
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New member added', message: 'Ana joined the AI project.', read: false },
    { id: 2, title: 'Task completed', message: 'Resume matching draft is done.', read: true },
  ])
  const [teamMembers] = useState([
    { id: 1, name: 'Sirisha Indeti', role: 'Team Lead' },
    { id: 2, name: 'Ana Kim', role: 'Product Designer' },
    { id: 3, name: 'Mark Chen', role: 'AI Engineer' },
  ])
  const [aiHistory, setAiHistory] = useState([])
  const [settings, setSettings] = useState({ theme: 'light', notifications: true })

  const handleLoginSuccess = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
    navigate('/dashboard')
  }

  const handleRegisterSuccess = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
    navigate('/dashboard')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    navigate('/login')
  }

  const handleCreateProject = (newProject) => {
    setProjects([newProject, ...projects])
  }

  const handleCreateTask = (newTask) => {
    setTasks([newTask, ...tasks])
  }

  const handleUpdateTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === 'done' ? 'todo' : 'done' }
          : task,
      ),
    )
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const handleMarkNotificationRead = (notificationId) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === notificationId ? { ...notification, read: true } : notification,
      ),
    )
  }

  const handleGenerateInsights = (prompt) => {
    setAiHistory([
      { id: Date.now(), type: 'Insight', result: `AI insight for: ${prompt}` },
      ...aiHistory,
    ])
  }

  const handleGenerateTaskSummary = (prompt) => {
    setAiHistory([
      { id: Date.now(), type: 'Task Summary', result: `Summary generated for: ${prompt}` },
      ...aiHistory,
    ])
  }

  const handleSaveSettings = (updatedSettings) => {
    setSettings(updatedSettings)
  }

  return (
    <div className={`app-shell ${settings.theme === 'dark' ? 'theme-dark' : ''}`}>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <main className="main-content">
        <AppRoutes
          isAuthenticated={isAuthenticated}
          onLoginSuccess={handleLoginSuccess}
          onRegisterSuccess={handleRegisterSuccess}
          projects={projects}
          onCreateProject={handleCreateProject}
          tasks={tasks}
          onCreateTask={handleCreateTask}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
          aiHistory={aiHistory}
          onGenerateInsights={handleGenerateInsights}
          onGenerateTaskSummary={handleGenerateTaskSummary}
          notifications={notifications}
          onMarkNotificationRead={handleMarkNotificationRead}
          teamMembers={teamMembers}
          settings={settings}
          onSaveSettings={handleSaveSettings}
          user={user}
        />
      </main>
    </div>
  )
}

export default App
