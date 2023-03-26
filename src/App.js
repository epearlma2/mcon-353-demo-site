import React, { useReducer } from "react";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Header } from "./components/header/header";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { TodoContext } from "./state/todo/todo-context";
import { TodoReducer } from "./state/todo/todo-reducer";
import { TodoProvider } from "./state/todo/todo-context";
import { Chat } from "./components/chat/chat";

export const App = () => {
  //const [TodoState, TodoDispatch] = useReducer(TodoReducer, { todos: [] });
  const pages = [
    { name: 'Todo', path: 'todo' },
    { name: 'Chat', path: 'chat' },
  ];
  return (
    <TodoProvider >
      <Header pages={pages} navigate={useNavigate()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<Todo />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </TodoProvider>
  );
};

export const AppWithHashRouter = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};

export default AppWithHashRouter;
