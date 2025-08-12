import { useState } from "react";


interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  selectedTodo: number | null;
  setSelectedTodo: (id: number | null) => void;
  deleteTodo?: (id: number) => void; // Optional delete function
}

function TodoList({ todos, selectedTodo, setSelectedTodo, deleteTodo }: TodoListProps) {
    const [searchItem, setSearcItem] = useState<string>('');
 const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <>
    {/* search todos */}

    <input 
    placeholder="Search todos..."
    type="text"
    value={searchItem}
    onChange={(e) => setSearcItem(e.target.value)}
    />
        <ul>
      {filteredTodos.map((todo) => {
        const isSelected = selectedTodo === todo.id;
        return (
          <li
            key={todo.id}
            onClick={() => setSelectedTodo(todo.id)}
            className={`text-2xl font-light cursor-pointer px-2 py-1 rounded-md transition-colors duration-200 flex justify-between items-center gap-2 ${
              isSelected
                ? 'bg-blue-500 text-white'
                : 'bg-transparent text-gray-500 hover:bg-gray-100'
            }`}
          >
            <span>{todo.text}</span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(todo.id);
                }}
                className="text-red-500 text-sm font-bold px-2 rounded hover:bg-red-100"
              >
                ×
              </button>
          </li>
        );
      })}
    </ul>
    </>

  );
}

export default TodoList;
