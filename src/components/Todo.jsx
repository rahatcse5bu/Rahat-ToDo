import {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


// eslint-disable-next-line react/prop-types
function ToDo ({task, deleteTodo,editTodo})  {
  // const  [todos,setTodos]= useState([]);
  const hangleEditTodo = (id) => {
// alert("Edittt"+id)
editTodo(id);
  }
  const hangleDeleteTodo = (id) => {
    deleteTodo(id)
// alert("Delete"+id)
  }
  return (
    <div className='flex items-center justify-center '>
    <div className='text-center w-[400px] text-white bg-[#855AFD] rounded-sm py-2 my-2'>
      {task.task}   <FontAwesomeIcon className='cursor-pointer px-2' onClick={()=>hangleEditTodo(task.id)} icon={faPenToSquare} /> <FontAwesomeIcon className='cursor-pointer' onClick={()=>hangleDeleteTodo(task.id)} icon={faTrash} />
      {/* gg{todos.value} */}
    </div>
    </div>
  );
}

export default ToDo;