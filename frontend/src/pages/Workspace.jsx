import TeamBoard from '../components/workspace/TeamBoard.jsx'

function Workspace({ projects, teamMembers }) {
  return (
    <div className="page-card">
      <h2>Workspace</h2>
      <p>Collaborate with your team across projects and workspaces.</p>
      <div className="workspace-grid">
        <TeamBoard projects={projects} teamMembers={teamMembers} />
      </div>
    </div>
  )
}

export default Workspace
