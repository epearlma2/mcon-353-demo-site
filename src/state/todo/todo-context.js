import React, { useReducer, createContext } from 'react';
import { TodoReducer } from './todo-reducer';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todoState, TodoDispatch] = useReducer(TodoReducer, {
    todos: [],
  });

  return (
    <TodoContext.Provider
      value={{
        todos: todoState.todos,
        dispatch: TodoDispatch,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
