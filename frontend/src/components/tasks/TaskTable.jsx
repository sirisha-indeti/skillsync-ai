function TaskTable({ tasks, onToggleComplete, onDeleteTask }) {
  return (
    <div className="task-table">
      {tasks.map((task) => (
        <div key={task.id} className={`task-row ${task.status === 'done' ? 'completed' : ''}`}>
          <div>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </div>
          <div className="task-actions">
            <button type="button" onClick={() => onToggleComplete(task.id)}>
              {task.status === 'done' ? 'Undo' : 'Complete'}
            </button>
            <button type="button" onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskTable
