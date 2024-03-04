import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Todo {
  _id: string;
  task: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingTaskText, setEditingTaskText] = useState<string>('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTask = async () => {
    try {
      const response = await axios.post('/api/todos', { task: newTask });
      setTodos([...todos, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleEditTask = async (id: string) => {
    try {
      await axios.put(`/api/todos/${id}`, { task: editingTaskText });
      setTodos(todos.map(todo => {
        if (todo._id === id) {
          return { ...todo, task: editingTaskText };
        }
        return todo;
      }));
      setEditingTaskId(null);
      setEditingTaskText('');
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-6 w-[420px]">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="border rounded px-3 py-2 flex-grow mr-2"
          />
          <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
        </div>
        <ul>
          {todos.map(todo => (
            <li key={todo._id} className="py-2 flex justify-between items-center border-b border-gray-200">
              {editingTaskId === todo._id ? (
                <input
                  type="text"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                  className="border rounded px-3 py-2 flex-grow mr-2"
                />
              ) : (
                <span className="flex-grow px-3 py-2 mr-2">{todo.task}</span>
              )}
              <div className='flex'>
                {editingTaskId === todo._id ? (
                  <button onClick={() => handleEditTask(todo._id)} className="bg-green-500 text-white px-3 py-2 rounded">Save</button>
                ) : (
                  <button onClick={() => {setEditingTaskId(todo._id); setEditingTaskText(todo.task)}} className="bg-yellow-500 text-white px-3 py-2 rounded">Edit</button>
                )}
                <button onClick={() => handleDeleteTask(todo._id)} className="bg-red-500 text-white px-3 py-2 rounded ml-2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

