import React, {useRef, useState} from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const[todoList, setTodoList] = useState([]);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        
        if (inputText === "") {
            return null;
        }

        const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
    }
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
}
  return (
    <div className='bg-blue-300 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-3xl'>
        
    {/* title */}

        <div className='flex items-center mt-0'>
            <h1 className='text-4xl font-bold'>KORA</h1>
        </div>

        <div className='flex items-center mt-2 gap-2'>
            <img className='w-7' src={todo_icon} alt=''/>
        <h2 className='text-3xl font-semibold'>To-Do List</h2>
        </div>


    {/* input box  */}

        <div className='flex items-center my-3 bg-yellow-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-3 placeholder:text-slate-600' type='text' placeholder='Add your task'/>
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-10 text-white'>ADD +</button>
        </div>

    {/* list of added items */}

        <div>
            {todoList.map((item, index) => {
                return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete}/>
            })}
    
        </div>

    </div>
  )
}

export default Todo