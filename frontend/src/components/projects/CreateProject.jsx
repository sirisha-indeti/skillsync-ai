import { useState } from 'react'

function CreateProject({ onCreate }) {
  const [formData, setFormData] = useState({ title: '', description: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.description.trim()) return
    onCreate({
      id: Date.now(),
      title: formData.title,
      description: formData.description,
    })
    setFormData({ title: '', description: '' })
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Project title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Project description" value={formData.description} onChange={handleChange} required />
      <button type="submit">Add Project</button>
    </form>
  )
}

export default CreateProject
