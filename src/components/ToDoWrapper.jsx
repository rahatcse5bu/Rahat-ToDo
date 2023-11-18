// eslint-disable-next-line react/jsx-no-undef
import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditToDoForm';

function ToDoWrapper() {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  const updateTodo = (todoContent, id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: todoContent, isEditing: !todo.isEditing } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    // Save todos to localStorage whenever the todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
const handleClear = () =>{
// Clear 'todos' from local storage
localStorage.removeItem('todos');
setTodos([]);

}
  return (
    <div className="container mx-auto bg-slate--400 w-[400px] bg-[#1C1A42] relative rounded-md mt-4 py-4 px-4">
      <div className='absolute top-0 right-0 text-white px-4 py-2 bg-[#855AFD] cursor-pointer' onClick={handleClear}>Clear</div>
      <p className="text-center text-3xl text-white py-4">Rahat ToDo:</p>
      {todos.length < 11 ? (
        <ToDoForm addTodo={addTodo} />
      ) : (
        <p className="w-[400px] text-center text-3xl py-4 bg-red-400 text-white my-4">
          You cannot add more than 10! Delete some to add more
        </p>
      )}

      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} updateTodo={updateTodo} todo={todo} id={todo.id} />
        ) : (
          <ToDo key={index} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      )}
    </div>
  );
}

export default ToDoWrapper;
