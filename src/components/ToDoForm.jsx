import React, {useState} from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ToDoForm = (props) => {

  const [inputData, setInputData] = useState("");

  const inputOnChangeHandler = (event) => {
    setInputData(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    props.fnAddTodos(inputData);
    //kosongan input todo input setelah do klik
    setInputData("");
  };

  return (
    <Box sx={{ p:2, border: '1px dashed grey'}}>
      <Typography variant='h5'>Component ToDo Form</Typography>
      <form
        style=
        {{
          margin: '0.5em 0em',
          display: 'flex'
        }}
        onSubmit={formOnSubmitHandler}>
        { /* berarti untuk input hartus memiliki statu state untuk menampung value dari input */}
        <TextField 
          type="text" 
          style={{ marginRight: '0.5em' }}
          value={inputData}  
          onChange={inputOnChangeHandler} 
          label="Input ToDo Baru"
          size='small'
          variant='filled'
        />
        <Button type="submit" variant='contained' size='large'>Tambah Todo</Button>
    </form>
    </Box>
  );
};

export default ToDoForm;
