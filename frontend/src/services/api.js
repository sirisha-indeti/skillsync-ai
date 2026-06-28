const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api'

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || 'API request failed')
  }

  return data
}

export const authApi = {
  login: (payload) => request('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  register: (payload) => request('/auth/register', { method: 'POST', body: JSON.stringify(payload) }),
  me: () => request('/auth/me'),
}

export const projectApi = {
  getAll: () => request('/projects'),
  create: (payload) => request('/projects', { method: 'POST', body: JSON.stringify(payload) }),
}

export const taskApi = {
  getAll: () => request('/tasks'),
  create: (payload) => request('/tasks', { method: 'POST', body: JSON.stringify(payload) }),
}

export const aiApi = {
  insights: (payload) => request('/ai/insights', { method: 'POST', body: JSON.stringify(payload) }),
  taskSummary: (payload) => request('/ai/task-summary', { method: 'POST', body: JSON.stringify(payload) }),
}
