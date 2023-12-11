import { IoIosCheckmark } from "react-icons/io";
import {FC} from 'react'

  interface Icompl {
    isCompleted: boolean,
    toggleIsCompleted: () => void
  }

const Check:FC<Icompl> = ({isCompleted,toggleIsCompleted}) => {
  return (
    <div onClick={toggleIsCompleted} className={isCompleted ? 'border-fuchsia-500 bg-fuchsia-500 border-solid rounded w-6 h-6 cursor-pointer' : "border-fuchsia-500 border-solid rounded w-6 h-6 cursor-pointer"}>
      {isCompleted && 
        <IoIosCheckmark size={35} className='text-white text-xl' />
      }
    </div>
  )
}

export default Check