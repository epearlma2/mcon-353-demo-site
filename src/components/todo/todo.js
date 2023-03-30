import React, { useState, useContext } from 'react';
import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import { TodoContext } from '../../state/todo/todo-context';
import { TodoActions } from '../../state/todo/todo-reducer';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Checkbox,
  Typography
} from '@mui/material';
import "./todo.css";

export const Todo = () => {
  const [input, setInput] = useState('');
  const { todoState, TodoDispatch } = useContext(TodoContext);

  const addTodo = () => {
    if (input.length > 0) {
      TodoDispatch({
        type: TodoActions.ADD,
        todo: { label: input, isComplete: false },
      });
      setInput('');
    }
  }

  const deleteTodo = (todo) => {
    TodoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
  }

  const toggleChecked = (todo) => {
    TodoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  }

  const onInput = (event) => {
    setInput(event.target.value);
  }

  return (
    <center>
      <div className='background'>
        <h3>
          TO DO:
        </h3>
        <Box>
          <TextField
            onInput={onInput}
            value={input}
            sx={{ width: "100%", maxWidth: 320 }}
          />
          <IconButton color="black " onClick={addTodo} size="large">
            <Add />
          </IconButton>
          <List
            sx={{ width: "100%", maxWidth: 400 }}
          >
            {todoState.todos.map((todo, index) => {
              return (
                <ListItem
                  disabled={todo.isComplete}
                  key={index}
                >
                  <ListItemText sx={{ color: "#eb349e" }}><Typography sx={{ fontFamily: "cursive" }}>{todo.label}</Typography></ListItemText>
                  <IconButton onClick={() => toggleChecked(todo)}>
                    <Checkbox
                      checked={todo.isComplete}
                    />
                  </IconButton>
                  <IconButton onClick={() => deleteTodo(todo)}>
                    <Delete />
                  </IconButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </div>
    </center >
  );
};
