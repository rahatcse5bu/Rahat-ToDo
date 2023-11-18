import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line react/prop-types
function ToDo ({task,isCompleted, deleteTodo,editTodo,updateTodoComplete})  {
  const [isChecked, setIsChecked] = useState(isCompleted);

  // const  [todos,setTodos]= useState([]);
  const hangleEditTodo = (id) => {
// alert("Edittt"+id)
editTodo(id);
  }
  const hangleDeleteTodo = (id) => {
    deleteTodo(id)
// alert("Delete"+id)
  }
  const handleCheckBoxClick = (id) => {
// alert("id"+id)
setIsChecked(!isChecked);
updateTodoComplete(id);
  }
  return (
    <div className='flex items-center justify-center '>
    <div className='text-center w-[400px] text-white bg-[#855AFD] rounded-sm py-2 my-2'>
  <input className='p-2 mr-2' type='checkbox' checked={isChecked} onClick={()=> handleCheckBoxClick(task.id)}/>   {task.isCompleted? (<span className="line-through">{task.task}</span>):(task.task)}   <FontAwesomeIcon className='cursor-pointer px-2' onClick={()=>hangleEditTodo(task.id)} icon={faPenToSquare} /> <FontAwesomeIcon className='cursor-pointer' onClick={()=>hangleDeleteTodo(task.id)} icon={faTrash} />
    </div>
    </div>
  );
}

export default ToDo;