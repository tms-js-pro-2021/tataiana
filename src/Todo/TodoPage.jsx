import React from 'react';
import { Container } from '@material-ui/core';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function TodoPage() {
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
      <TodoList />
    </Container>
  );
}

export default TodoPage;
