import { useState } from 'react'

function TaskForm({ onCreateTask }) {
  const [formData, setFormData] = useState({ title: '', description: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim()) return
    onCreateTask({
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      status: 'todo',
    })
    setFormData({ title: '', description: '' })
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Task title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Task description" value={formData.description} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
