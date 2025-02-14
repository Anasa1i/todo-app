import { addTodo } from "@/actions/todos";
import TodoForm from "@/components/Todoform";
import Link from "next/link";
// import { useRef } from "react";


export default async function Todos() {
    // const ref = useRef(null);
    let res = await fetch('http://localhost:3000/api/todos', {
        cache: "no-cache",
    });
    res = await res.json();

    return (
        <div className="min-h-screen p-10">
            <h1 className="text-3xl text-center font-bold">Todos</h1>
            <TodoForm />



            {res.data?.map((todo) => (
                <Link key={todo.id} href={`/todos/${todo.id}`}>
                    <h1 className="border p-2 text-center text-3xl w-2/3 mx-auto my-1">
                        {todo.todo}
                    </h1>
                </Link>
            ))}
        </div>
    );
} 
