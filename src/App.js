import * as React from "react";
import { useReducer } from "react";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Header } from "./components/header/header";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { TodoContext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo-reducer";
import { Chat } from "./components/chat/chat";

export const App = () => {
  const [todoState, TodoDispatch] = useReducer(todoReducer, { todos: [] });
  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, TodoDispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}
export default App;
