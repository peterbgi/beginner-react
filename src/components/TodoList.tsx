import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void

}


export default function TodoList({
    todos,
    onCompletedChange,
    onDelete

} : TodoListProps) {

    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return a.id - b.id
        }
        return a.completed ? 1 : -1;
    })

    return (

       <>

      <div className="space-y-3">
        {todosSorted.map(todo => 
          <TodoItem
          key={todo.id}
          onCompletedChange={onCompletedChange}
          todo={todo}
          onDelete={onDelete} />
        )}
      </div>
      {todos.length === 0 && (
        <p className="text-red-950 font-bold text-sm text-center">Nincs mentve feladatod</p>
      )}
       
       </>
    )
}