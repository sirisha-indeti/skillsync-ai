import { useState } from 'react'

function Register({ onSwitchToLogin, onRegisterSuccess }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.password) {
      setMessage('Registration successful')
      onRegisterSuccess({ name: formData.name, email: formData.email, role: 'Member' })
    } else {
      setMessage('Please fill in all fields')
    }
  }

  return (
    <div className="auth-card">
      <h2>Create Account</h2>
      <p>Join SkillSync AI</p>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p className="toggle-text">
        Already have an account?{' '}
        <button type="button" className="link-btn" onClick={onSwitchToLogin}>Login</button>
      </p>
      {message && <p className="message">{message}</p>}
    </div>
  )
}

export default Register
