import { useState } from 'react'

function Settings({ user, onSave }) {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    theme: 'light',
    notifications: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="page-card">
      <h2>Settings</h2>
      <p>Update your workspace preferences and account settings.</p>
      <form className="settings-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Theme
          <select name="theme" value={formData.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label className="checkbox-field">
          <input type="checkbox" name="notifications" checked={formData.notifications} onChange={handleChange} />
          Receive notifications
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  )
}

export default Settings
