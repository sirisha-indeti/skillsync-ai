import { useState } from 'react'
import CreateProject from '../components/projects/CreateProject.jsx'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import ProjectTable from '../components/projects/ProjectTable.jsx'

function Projects({ projects, onCreate }) {
  const [formData, setFormData] = useState({ title: '', description: '' })

  const handleCreateProject = (newProject) => {
    onCreate(newProject)
  }

  return (
    <div className="page-card">
      <h2>Projects</h2>
      <p>Manage your current projects and collaboration tasks.</p>

      <CreateProject onCreate={handleCreateProject} />

      <div className="projects-section">
        <h3>Project Cards</h3>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="projects-section">
        <h3>Project List</h3>
        <ProjectTable projects={projects} />
      </div>
    </div>
  )
}

export default Projects
