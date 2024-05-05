import { useState } from "react"

interface addTodoProps {
    onSubmit: (title: string) => void;
}

export default function AddTodo({onSubmit} : addTodoProps) {

    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput("");


    }

   return (
        <form className="flex" onSubmit={handleSubmit}>
            <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            placeholder="Ide írhatod az új feladatot"
            className="rounded-sm  grow border border-cyan-800 p-3 items-start ms-1"
            />
            <button type="submit"
            className="w-20 rounded-sm bg-red-800 text-white  p-2 hover:bg-red-600"

            
            >
                Felvesz
            </button>
        </form>
       )
}