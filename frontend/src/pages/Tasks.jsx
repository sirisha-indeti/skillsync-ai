import TaskForm from '../components/tasks/TaskForm.jsx'
import TaskTable from '../components/tasks/TaskTable.jsx'

function Tasks({ tasks, onCreateTask, onUpdateTask, onDeleteTask }) {
  return (
    <div className="page-card">
      <div className="page-head">
        <div>
          <h2>Tasks</h2>
          <p>Keep your project tasks organized and on track.</p>
        </div>
      </div>

      <TaskForm onCreateTask={onCreateTask} />

      <div className="tasks-section">
        <TaskTable tasks={tasks} onToggleComplete={onUpdateTask} onDeleteTask={onDeleteTask} />
      </div>
    </div>
  )
}

export default Tasks
