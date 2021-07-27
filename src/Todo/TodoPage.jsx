import React from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function TodoPage() {
  return (
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
  );
}

export default TodoPage;
