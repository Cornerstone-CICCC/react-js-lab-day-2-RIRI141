import { createContext } from "react";
import type { Todo } from "../../types/Todos";


export type TodoContextType = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    setTodos: () => {}
})