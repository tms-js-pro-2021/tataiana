import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState('');

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: Date.now(),
        title: value,
        status: true,
      },
    ]);
    setValue('');
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: '24px',
        padding: '6px',
        background: 'lavender',
      }}
    >
      <TextField
        id="standard-basic"
        label=""
        placeholder="add todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        style={{ marginLeft: '12px' }}
        variant="contained"
        color="primary"
        onClick={saveTodo}
      >
        save
      </Button>
    </div>
  );
}
export default AddTodo;
