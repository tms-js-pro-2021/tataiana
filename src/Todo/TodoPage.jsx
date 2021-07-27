import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function TodoPage() {
  const [todo, setTodo] = useState([
    {
      id: '1',
      title: 'hhhhh',
      status: true,
    },
    {
      id: '2',
      title: 'jjjj',
      status: true,
    },
    {
      id: '3',
      title: 'oooo',
      status: false,
    },
  ]);

  return (
    <Container
      m={1}
      style={{
        height: '40vh',
        width: '100vw',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default TodoPage;
