import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard.jsx'
import Projects from '../pages/Projects.jsx'
import Tasks from '../pages/Tasks.jsx'
import AI from '../pages/AI.jsx'
import Workspace from '../pages/Workspace.jsx'
import Notifications from '../pages/Notifications.jsx'
import Settings from '../pages/Settings.jsx'
import Profile from '../pages/Profile.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function AppRoutes({
  isAuthenticated,
  onLoginSuccess,
  onRegisterSuccess,
  projects,
  onCreateProject,
  tasks,
  onCreateTask,
  onUpdateTask,
  onDeleteTask,
  aiHistory,
  onGenerateInsights,
  onGenerateTaskSummary,
  notifications,
  onMarkNotificationRead,
  teamMembers,
  settings,
  onSaveSettings,
  user,
}) {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login onSwitchToRegister={() => navigate('/register')} onLoginSuccess={onLoginSuccess} />
          )
        }
      />
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Register onSwitchToLogin={() => navigate('/login')} onRegisterSuccess={onRegisterSuccess} />
          )
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Dashboard projects={projects} tasks={tasks} notifications={notifications} />
          </PrivateRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Projects projects={projects} onCreate={onCreateProject} />
          </PrivateRoute>
        }
      />
      <Route
        path="/tasks"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Tasks tasks={tasks} onCreateTask={onCreateTask} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
          </PrivateRoute>
        }
      />
      <Route
        path="/ai"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <AI onGenerateInsights={onGenerateInsights} onGenerateTaskSummary={onGenerateTaskSummary} aiHistory={aiHistory} />
          </PrivateRoute>
        }
      />
      <Route
        path="/workspace"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Workspace projects={projects} teamMembers={teamMembers} />
          </PrivateRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Notifications notifications={notifications} onMarkRead={onMarkNotificationRead} />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Settings user={user} onSave={onSaveSettings} />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Profile user={user} />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  )
}

export default AppRoutes
