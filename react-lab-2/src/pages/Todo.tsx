import { useUser } from "../contexts/user/useUser";
import { useTodos } from "../contexts/todo/useTodos";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const { fullName, setFullName, setIsLoggedIn } = useUser();
  const { todos, setTodos } = useTodos();
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  interface HandleAddEvent extends React.FormEvent<HTMLFormElement> {}
  const handleAddTodo = (e: HandleAddEvent) => {
    e.preventDefault();
    if (newTodo === "") {
        setError("Add Task Lazy boy")
    } else {
        const newTask = {
            id: uuidv4(),
            task: newTodo,
          };
      
          setTodos([...todos, newTask]);
          setNewTodo("");
          setError("")
    }
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleLogout = () => {
    if (fullName) {
      setIsLoggedIn(false);
      navigate("/");
      setFullName("");
      setTodos([]);
    }
  };

  return (
    <div className="bg-white my-4 py-10 px-20 rounded-2xl shadow-md text-center">
      <div className="flex items-center gap-4 mb-4 justify-between">
        <h1 className="text-2xl font-bold mb-2">Welcome, {fullName}!</h1>
        <button onClick={handleLogout} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-300 whitespace-nowrap">Log out</button>
      </div>

      <p className="mb-4 text-gray-600">Make a good day and set your Todos!</p>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 bg-amber-200 rounded"
          >
            <span>{todo.task}</span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <div className="flex mb-4 mt-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 p-2 border rounded mr-2"
          />
          <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-orange-400">
            Add
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
    </div>
  );
};

export default Todo;
