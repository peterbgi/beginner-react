import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;

}

export default function TodoItem({todo, onCompletedChange, onDelete }: TodoItemProps)
{
    return (
        <div className="flex item-center gap-1">
           <label className="flex items-center gap-2 border rounded-md p-3 border-sky-300 hover:bg-red-500">
            <input type="checkbox"
            checked={todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)} 
            className="scale-125" />
            <span className={todo.completed ? "line-through text-red-700" : ""}>
                {todo.title}
            </span>
           </label>
           <button className="p-1"
           onClick={() => onDelete(todo.id)} >
            <Trash2 size={20} className="text-red-800"/>
           </button>
        </div>
    )
}