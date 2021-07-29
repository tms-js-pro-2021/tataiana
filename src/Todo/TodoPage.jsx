import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function TodoPage() {
  const [todo, setTodo] = useState([]);

  return (
    <Container
      m={2}
      style={{
        height: '40vh',
        width: '100vw',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1>Todo List</h1>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default TodoPage;
