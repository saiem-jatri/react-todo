import React from 'react';
import TodoList from './components/Todolist';

interface Todo {
  id: number;
  text: string;
}

export default function App() {
  const [selectedTodo, setSelectedTodo] = React.useState<number | null>(1);
  const [newTodo, setNewTodo] = React.useState<string>('');
    const [todos, setTodos] = React.useState<Todo[]>([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Master TypeScript' },
  ]);

  const handleAddTodo = (e: React.FormEvent) => {
    console.log("====",newTodo);
    
    e.preventDefault();
    if(!newTodo.trim()) return; // Prevent adding empty todos
    setTodos((prev)=> [
      ...prev,
      { id: prev.length + 1, text: newTodo.trim() }
    ]);
    setNewTodo(''); // Clear input after adding
  }
  


  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen  gap-4">
      <form onSubmit={handleAddTodo} className="block">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
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
        setSelectedTodo={(id) => setSelectedTodo(id)}
        deleteTodo={(id) => setTodos(todos.filter(todo => todo.id !== id))}
      />
    </div>
  );
}
