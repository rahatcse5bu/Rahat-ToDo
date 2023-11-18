
import { useState} from 'react';

// eslint-disable-next-line react/prop-types
export const ToDoForm =({addTodo}) =>{
  const [output,setToDo]= useState('');
  function handleSubmit(e){
    e.preventDefault();
  //  alert(output)
  if(output==='' || output===' '|| output.length<1){
alert("You can't add empty note")
  }
  else{
   addTodo(output)
  }
   setToDo('')
    console.log('hvgh errrr')
  }
  return (
    <div className='flex justify-center items-center border rounded-sm'>
     <form className='w-[400px] todo-form bg-slate--700 my-2 py-4  flex justify-center items-center rounded-md' onSubmit={handleSubmit}>
     
      <input value={output} className='todo-input border py-2 rounded-md' onChange={(e) => {setToDo(e.target.value)}} placeholder='what is going on?' />
      <button className='todo-add bg-[#855AFD] hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded'>Add</button>
    
     </form>
    </div>
  );
}

export default ToDoForm;
