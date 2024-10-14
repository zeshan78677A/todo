import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from './slice/todoSlice';
import './App.css';

function App() {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="d-flex flex-column text-center m-5">
      <h1>ＴＯ-ＤＯ📝ＡＰＰ</h1>
      <div className="bg-dark p-4 d-flex justify-content-center align-items-center">
        <input
          type="text"
          className='form-control w-25'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}a
          placeholder="Add a new todo"
        />
        <button className='btn btn-success ms-3' onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul className="bg-secondary border border-black">
        {todos.map((todo) => (
           <li key={todo.id} className={`d-flex justify-content-between align-items-center p-2 ${todo.completed ? 'completed' : ''}`}>
           <span onClick={() => handleToggleComplete(todo.id)}>{todo.text}</span>
           <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>
             Delete
           </button>
         </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
