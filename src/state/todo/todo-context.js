import React, { useReducer, createContext } from 'react';
import { todoReducer } from './todo-reducer';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [],
  });

  return (
    <TodoContext.Provider
      // context value has the todos state and also the dispatch function
      // so the todos can be updated from any part of the app
      value={{
        todos: todoState.todos,
        dispatch: todoDispatch,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
