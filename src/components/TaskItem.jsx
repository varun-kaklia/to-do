function TaskItem({ task, onUpdate, onDelete, onToggleComplete }) {
  const priorityColors = {
    High: 'border-red-500',
    Medium: 'border-yellow-500',
    Low: 'border-green-500'
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 flex items-center gap-4 border-l-4 ${priorityColors[task.priority]}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className="h-5 w-5 text-indigo-600"
      />
      <div className="flex-1">
        <p className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </p>
        <div className="text-sm text-gray-500">
          <span>{task.category}</span> | <span>{task.priority}</span>
          {task.dueDate && <span> | Due: {task.dueDate}</span>}
        </div>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;