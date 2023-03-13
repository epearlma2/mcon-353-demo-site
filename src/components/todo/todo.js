import React, { useState, useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Check from '@mui/icons-material/Check';
import { TodoContext } from '../../state/todo/todo-context';
import { TodoActions } from '../../state/todo/todo-reducer';
import {
  Box,
  IconButton,
  Container,
  Divider,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const Todo = () => {
  const { todos, dispatch: todoDispatch } = useContext(TodoContext);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.length >0 ) {
      todoDispatch({
        type: TodoActions.ADD,
        todo: { label: input, completed: false },
      });
      setInput('');
    }
  }

  const deleteTodo = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
  }

  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  }
  const onInput = (event) => {
    setInput(event.target.value);
  }

  const onInputKeyUp = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  return (
    <div>
      <Container maxWidth="lg" sx={{textAlign:'center'}}>
        <h1>
          To Do
          </h1>

        <Box sx={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '50rem', textAlign: 'center', align: 'center' }}>
          <Box sx={{ marginLeft: 'auto', marginRight: 'auto', margin: '2rem', alignItems: 'center' }}>
            <Input
              placeholder=" Enter a task."
              onChange={onInput}
              value={input}
              onKeyUp={onInputKeyUp}
              sx={{borderRadius: '0.8rem', width: '60%', marginRight: '0.5rem', backgroundColor: 'pink' }}
            />
            <IconButton sx={{ color: 'white'}} onClick={addTodo}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              background: 'pink',
              borderRadius: '0.8rem',
              padding: '0.5rem',
            }}
          >
                {(provided) => (
                  <List
                    sx={{
                      background: 'pink',
                      borderRadius: '0.4rem',
                      minHeight: '55vh',
                      width: '70%'
                    }}
                  >
                    {todos.map((todo, index) => (
                      <div
                        key={todo.id}
                        index={index}
                      >
                      </div>
                    ))}
                    {provided.placeholder}
                  </List>
                )}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

const TodoListItem = ({
  todo,
  deleteTodo,
  toggleChecked
}) => {
  return (
    <div>
      <ListItem disabled={todo.complete}>
        <ListItemText />
        <ListItemIcon
          onClick={() => deleteTodo(todo)}
        >
          <DeleteIcon
            sx={{
              '&:hover': { color: 'red' },
              cursor: 'pointer',
            }}
          />
        </ListItemIcon>
        {todo.complete ? (
          <ListItemIcon
            onClick={() => toggleChecked(todo)}
          >
            <Check
              sx={{
                color: 'green',
                cursor: 'pointer',
              }}
            />
          </ListItemIcon>
        ) : (
          <ListItemIcon
            onClick={() => toggleChecked(todo)}
          >
            <Check
              sx={{
                '&:hover': { color: 'green' },
                cursor: 'pointer',
              }}
            />
          </ListItemIcon>
        )}
      </ListItem>
      <Divider />
    </div>
  );
};

