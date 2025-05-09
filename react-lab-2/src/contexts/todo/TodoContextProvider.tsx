import { useState, type ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import type { Todo } from "../../types/Todos";

export function TodoContextProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
