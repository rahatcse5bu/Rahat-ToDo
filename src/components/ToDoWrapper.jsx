/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-undef
// import React from 'react'
import { useState } from 'react';
import ToDoForm from './ToDoForm'
import ToDo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditToDoForm';
uuidv4(); 
// import React from 'react'

function ToDoWrapper() {
  const [todos,setTodos]= useState([]);
  const addTodo = todo =>{
setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
console.log(todos)
  }
  const editTodo = id =>{
setTodos(todos.map(todo => todo.id===id?{...todo,isEditing: !todo.isEditing}:todo))

  }
  const updateTodo = (todoContent,id) =>{
setTodos(todos.map(todo => todo.id===id?{...todo,task:todoContent,isEditing: !todo.isEditing}:todo))

  }
  const deleteTodo = id =>{
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  return (
  <div className="container mx-auto bg-slate--400 w-[400px] bg-[#1C1A42] rounded-md mt-4 py-4 px-4">
  <p className='text-center text-3xl text-white py-4'>Rahat ToDo:</p>
     {todos.length<11? (<ToDoForm addTodo={addTodo}/>):<p className='w-[400px] text-center text-3xl py-4 bg-red-400 text-white my-4'> you can not add more than 10</p>}
    
{ todos.map((todo,index) =>
     todo.isEditing? (<EditTodoForm key={index} updateTodo={updateTodo} todo={todo} id={todo.id}/>): ( <ToDo key={index} task={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>))}
    </div>
  
)}

export default ToDoWrapper;