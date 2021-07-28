import React, { useState } from 'react';

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
    <div>
      <input
        placeholder="add todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>сохранить</button>
    </div>
  );
}
export default AddTodo;
