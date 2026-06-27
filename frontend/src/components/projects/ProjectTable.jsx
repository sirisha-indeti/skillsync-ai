function ProjectTable({ projects }) {
  return (
    <div className="project-table">
      {projects.map((project) => (
        <div key={project.id} className="project-row">
          <strong>{project.title}</strong>
          <span>{project.description}</span>
        </div>
      ))}
    </div>
  )
}

export default ProjectTable
