import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { UserContextProvider } from "./contexts/user/UserContextProvider";
import { TodoContextProvider } from "./contexts/todo/TodoContextProvider";

const App = () => {
  return (
    <>
      <TodoContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="todos" element={<Todo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
      </TodoContextProvider>
    </>
  );
};

export default App;
