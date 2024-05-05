import { Todo } from "./types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}


export default function TodoSummary({
    todos,
    deleteAllCompleted

}: TodoSummaryProps) {

    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p>
                {completedTodos.length}/ {todos.length} feladat kész.
            </p>
            {completedTodos.length > 0 && (
                <button onClick={deleteAllCompleted} className="text-emerald-900 hover:underline">Mindjárt kész!</button>
            )}
        </div>
    )

}