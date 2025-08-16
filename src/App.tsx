import React from 'react';
import { Routes, Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import TodoList from './components/Todolist';
import About from './components/About';
import AppNav from './components/AppNav';
import Rootlayout from './layout/Rootlayout';
import ProtectedRoute from './ProtectedRoute';
import Login from './components/Login';
import { AuthProvider } from './AuthContext';

interface Todo {
  id: number;
  text: string;
}

function Home() {
  const [selectedTodo, setSelectedTodo] = React.useState<number | null>(1);
  const [newTodo, setNewTodo] = React.useState<string>('');
  const [todos, setTodos] = React.useState<Todo[]>([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Master TypeScript' },
  ]);

  const isExistingTodo = (text: string) => {
    return todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
  }

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTodo.trim() || isExistingTodo(newTodo)) return;

    setTodos(prev => [
      ...prev,
      { id: prev.length + 1, text: newTodo.trim() }
    ]);
    setNewTodo('');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen gap-4">
      <form onSubmit={handleAddTodo} className="block">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Enter new todo..."
          className="border rounded px-2 py-2 flex-1"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Todo
        </button>
      </form>

      <TodoList
        todos={todos}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
        deleteTodo={(id) => setTodos(todos.filter(todo => todo.id !== id))}
      />
    </div>
  );
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route path="login" element={<Login />} />
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
