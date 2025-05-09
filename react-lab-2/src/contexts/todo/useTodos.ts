import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export const useTodos = () => {
    const context = useContext(TodoContext);
    if(!context) throw Error("useTodo must be used inside UserContextProvider")
        return context;
}