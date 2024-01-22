import {FC} from 'react'

import { GoTrash } from "react-icons/go";
import { BiSolidEditAlt } from "react-icons/bi";
import Check from '../item/Check';
  interface Itodo {
    todoChange: () => void
    removeTodo: () => void
    toggleIsCompleted: () => void
    todo: {
      title: string,
      isCompleted: boolean,
      id: number
    }
  }

const Todo:FC<Itodo> = ({todo,todoChange,removeTodo,toggleIsCompleted}) => {
  return (
    <div className='bg-zinc-800 py-3 px-4 w-80 flex rounded-2xl mb-4 justify-between  items-center'>
      <Check toggleIsCompleted={toggleIsCompleted} isCompleted={todo.isCompleted} />
      <h1 className={todo.isCompleted ? 'ml-3 w-[200px] truncate  flex-auto text-left line-through' : 'ml-3 w-[200px] truncate  flex-auto text-left'}>{todo.title}</h1>
      <BiSolidEditAlt onClick={todoChange} className='mr-3 hover:text-[#5667c0] transition duration-150 cursor-pointer' size={22} />
      <GoTrash onClick={removeTodo} className='cursor-pointer transition duration-150 hover:text-[#c45959]' size={18} />
    </div>
  )
}

export default Todo