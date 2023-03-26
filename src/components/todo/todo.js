import React, { useState, useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/icons-material/Check';
import { TodoContext } from '../../state/todo/todo-context';
import { TodoActions } from '../../state/todo/todo-reducer';
import {
  Box,
  Container,
  Input,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';


export const Todo = () => {
  const [input, setInput] = useState('');
  const { todos, dispatch: TodoDispatch } = useContext(TodoContext);


  const addTodo = () => {
    if (input.length > 0) {
      TodoDispatch({
        type: TodoActions.ADD,
        Todo: { label: input, isComplete: false },
      });
      setInput('');
    }
  }

  const deleteTodo = (Todo) => {
    TodoDispatch({
      type: TodoActions.DELETE,
      Todo,
    });
  }

  const toggleChecked = (Todo) => {
    TodoDispatch({
      type: TodoActions.TOGGLE,
      Todo,
    });
  }
  const onInput = (event) => {
    setInput(event.target.value);
  }

  return (
    <div>
      <Container maxWidth="lg" sx={{ textAlign: 'center', backgroundColor: 'white' }}>
        <h1>
          To Do
        </h1>
        <br />
        <Box align="center" sx={{ fontSize: "12px", fontFamily: "fantasy", color: "pink", backgroundColor: "white" }}>
          <Input
            align="center"
            onChange={onInput}
            value={input}
            id="standard-basic"
            placeholder="Enter a task."
            variant="standard"
            sx={{ alignItems: "center", }}
          />
          <AddIcon fontSize="large" onClick={addTodo} />
        </Box>
        <Box
          sx={{
            background: 'pink',
            borderRadius: '0.8rem',
            padding: '0.5rem',
          }}
        >
          <List
            sx={{

              borderRadius: '0.4rem',
              minHeight: '55vh',
              width: '70%'
            }}
          >
            {todos.map((Todo, index) => (

              <TodoListItem
                key={index}
                Todo={Todo}
                deleteTodo={deleteTodo}
                toggleChecked={toggleChecked}
              />

            ))}
          </List>


        </Box>
      </Container>
    </div >
  );
};
const TodoListItem = ({
  Todo,
  deleteTodo,
  toggleChecked
}) => {
  return (
    <div>

      <ListItem disabled={Todo.isComplete}>
        <ListItemText primary={Todo.label} />

        <DeleteIcon onClick={() => deleteTodo(Todo)}
        />
        {Todo.isComplete ? (
          <Checkbox onClick={() => toggleChecked(Todo)}
          />
        ) : (
          <Checkbox onClick={() => toggleChecked(Todo)}
          />

        )}
      </ListItem>

    </div>
  );

};

