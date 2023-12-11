import { useState } from "react"
import Todo from "./component/Todo"
import { IoAdd } from "react-icons/io5";
const App = () => {


  const [todo,setTodo] = useState<Itodo[]>([])
  const [text,setText] = useState('')
  
  const todoChange = (id:number) => {
    const text = prompt('новый текст')
    const copy = [...todo]
    const result = copy.find(el => el.id === id)
    if(text?.length === 0)
      return
    else
    // @ts-ignore
      result.title = text
      setTodo(copy)
/*    setTodo([...todo].map(el => {
      if(el.id === id){
        el.title = text
      }
      return el
    }
      ))*/
  }


  const removeTodo = (id:number) => {
/*    const copy = [...todo]
    const result = copy.filter(el => el.id !== id)
    setTodo(result)*/
    setTodo(todo.filter(el => el.id !== id))
  }

  const addTodo = () => {
    const obj = {
      id: Date.now(),
      title: text,
      isCompleted: false
    }
    if(text.length > 1)
    setTodo([obj,...todo])
    setText('')
  }


  interface Itodo {
    title: string,
    isCompleted: boolean,
    id: number
  }

  const toggleIsCompleted = (id:number) => {
    const copy = [...todo]
    const result = copy.find(el => el.id === id)
    // @ts-ignore
    result.isCompleted = !result?.isCompleted
    setTodo(copy)
  }


  return (
    <div className="flex items-center justify-center">
      <div className="w-[800px] my-20 py-5">
        <div className="flex justify-center items-center flex-col">
          <h1 className=" text-4xl mb-7">Todo List</h1>
          <div className="mb-5 flex rounded-xl  items-center bg-zinc-800 py-3 px-6">
          <input className="" type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Добавить задачу" />
          <IoAdd onClick={addTodo} className=' cursor-pointer' size={25} />
          </div>
        {todo.length ? todo.map((el) => {
        return <Todo toggleIsCompleted={() => toggleIsCompleted(el.id)} removeTodo={() => removeTodo(el.id)} todoChange={() => todoChange(el.id)} key={el.id} todo={el}/>
      }): <div><h2>Список дел пуст</h2></div> }
        </div>
      </div>
    </div>
    )
}

export default App