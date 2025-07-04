import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilters';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: crypto.randomUUID(), completed: false }]);
    toast.success('Task added successfully!');
  };

  const updateTask = (id, updates) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updates } : task));
    toast.info('Task updated!');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast.error('Task deleted!');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = filter === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          To-Do
        </h1>
        <TaskForm onAdd={addTask} />
        <CategoryFilter 
          categories={['All', 'Work', 'Personal', 'Shopping', 'Others']}
          currentFilter={filter}
          onFilterChange={setFilter}
        />
        <TaskList 
          tasks={filteredTasks} 
          onUpdate={updateTask}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
        />
        <ToastContainer position="bottom-right" autoClose={2000} />
      </div>
    </div>
  );
}

export default App;