import { cloneDeep } from "lodash";
export const TodoActions = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE"
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD: {
      return { todos: [...state.todos, action.todo] };
    }
    case TodoActions.DELETE: {
      let newTodos = cloneDeep(
        state.todos.filter((todo) => todo.label !== action.todo.label)
      );
      return {
        todos: newTodos
      };
    }
    case TodoActions.TOGGLE: {
      let newTodos = cloneDeep(state.todos);
      const updatedTodo = newTodos.find((x) => x.label === action.todo.label);
      updatedTodo.isComplete = !updatedTodo.isComplete;
      return {
        todos: newTodos
      };
    }
  }
};
