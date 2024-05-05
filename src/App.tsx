import { useEffect, useState } from "react"
import { Data } from "./datas/todo"
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoSummary from "./TodoSummary";
import { Todo } from "./types/todo";


function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]")
    return savedTodos.length > 0 ? savedTodos : Data
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])




  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => prevTodos.map(todo => (
      todo.id === id ? {...todo, completed} : todo)));
  }


  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        id: Date.now(),
        title,
        completed: false
      },
      ...prevTodos
    ])
  }

  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function deleteAllCompletedTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }
 

  return (
   <main className="py-7 h-screen space-y-5 overflow-y-auto">
    <h1 className="font-bold text-center text-4xl text-red-400">Teendőid</h1>
    <div className="max-w-md mx-auto  bg-slate-500 rounded-sm space-y-5">
      <TodoList
      todos={todos}
      onCompletedChange={setTodoCompleted}
      onDelete={deleteTodo}
      />
     
    </div>
   <AddTodo
   onSubmit={addTodo}
   />

   <TodoSummary 
   todos={todos}
   deleteAllCompleted={() => {deleteAllCompletedTodos}}
   />
   </main>
  )
}

export default App
