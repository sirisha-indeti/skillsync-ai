function TeamBoard({ projects, teamMembers }) {
  return (
    <div className="team-board">
      <div className="board-column">
        <h3>Projects</h3>
        {projects.map((project) => (
          <div key={project.id} className="board-card">
            <strong>{project.title}</strong>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <div className="board-column">
        <h3>Team Members</h3>
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <strong>{member.name}</strong>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamBoard
