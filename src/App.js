// Import Use states 
import React, { useState } from 'react';
import Card from './card';

function App() {
  // Use states 
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

// arrow function
  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  return (
    <div className="App">
      <h1 className='font-extrabold justify-center items-center'>Todo App</h1>
      <div className='flex flex-col border-2 w-[500px] justify-center mx-auto mt-20'>
        {todos.map((todo, index) => (
          <Card key={index} todo={todo} />
        ))}
        <div className="flex flex-row justify-between items-center mt-5">
          <input 
            type="text" 
            value={todoInput} 
            onChange={(e) => setTodoInput(e.target.value)} 
            placeholder="Enter your todo item" 
            className="p-2 border border-gray-300 rounded-md mr-3" 
          />
          <button 
            onClick={handleAddTodo} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" 
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
