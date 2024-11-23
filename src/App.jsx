import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoListitem } from './components'


function App() {
  const [todos, setTodos] = useState([])

const addTodo = (todo) =>{
  setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
}
const updateTodo = (id, todo) =>  {
  setTodos((prev)=> prev.map((todoitem) => todoitem.id === id ? {id, ...todo} : todoitem))
}
const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todoitem) => todoitem.id !== id))
}

const toggleComplete = (id) => {
  setTodos((prev) => prev.map((todoitem) => todoitem.id === id ?
  {...todoitem, completed: !todoitem.completed} : todoitem))
  }

useEffect(() => {
const storedTodos = JSON.parse(localStorage.getItem('todos'))
if (storedTodos && storedTodos.length > 0) {
  setTodos(storedTodos)
  } 
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#09172c] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoListitem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
