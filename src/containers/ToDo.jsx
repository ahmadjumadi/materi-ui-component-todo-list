import React, { useEffect, useState} from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoTable from '../components/ToDoTable';

import {Box, Typography} from '@mui/material';

function ToDo()
{
  const [todos, setTodos] = useState([
    { id: 1, name: 'Review DOM', isCompleted: true },
    { id: 2, name: 'Belajar Nge-React', isCompleted: false },
    { id: 3, name: 'Belajar Component React', isCompleted: false },
  ]);

  const addTodos = (newTodo) => {
    const newId = todos[todos.length - 1].id + 1;

    const objTodo = {
      id : newId,
      name : newTodo,
      isCompleted : false,
    };
    
    const newTodos = [...todos, objTodo];
    setTodos(newTodos);
  };

  useEffect( () => {
    let setTitle = 'Todos : ' + todos.length;
    console.log(setTitle);
    document.title = setTitle;
  });
  

  const conpleteTodo = (idTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === idTodo) {
        todo.isCompleted = true;
      }

      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      p: 2,
      border: '1px dashed grey',
      backgroundColor: '#f1f1f1',
      gap: 2,
      }}>
        <Typography variant='h5'>Container To Do</Typography>
        <ToDoForm fnAddTodos={addTodos} />
        <ToDoTable todos={todos} fnCompleteTodos={conpleteTodo} />
    </Box>
  )
}

export default ToDo;
