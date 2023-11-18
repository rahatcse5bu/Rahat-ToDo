
import { useState} from 'react';

// eslint-disable-next-line react/prop-types
export const EditTodoForm =({updateTodo,todo,id}) =>{
  const [updatedTodo,setToDo]= useState(todo.task);
  function handleSubmit(e){
    e.preventDefault();
  //  alert(updatedTodo)
  if(updatedTodo==='' || updatedTodo===' '|| updatedTodo.length<1){
alert("You can't add empty note")
  }
  else{
   updateTodo(updatedTodo,id)
  }
   setToDo('')
    console.log('hvgh errrr')
  }
  return (
    <div className='flex justify-center items-center border rounded-sm'>
     <form className='w-[400px] todo-form bg-slate-700 my-2 py-4  flex justify-center items-center rounded-md' onSubmit={handleSubmit}>
     
      <input value={updatedTodo} className='todo-input border py-1 rounded-sm' onChange={(e) => {setToDo(e.target.value)}}  />
      <button className='todo-add bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded'>Update</button>
    
     </form>
    </div>
  );
}

export default EditTodoForm;
