import React from 'react';

function TodoList({ todo, setTodo }) {
  function deleteTodo(id) {
    const newTodoList = [...todo].filter((item) => item.id != id);
    setTodo(newTodoList);
  }

  return (
    <div>
      {
      todo.map((item) => (
        <div key={item.id}>
          <div>{ item.title }</div>
          <button onClick={() => deleteTodo(item.id)}>удалить</button>
        </div>
      ))
      }
    </div>
  );
}

export default TodoList;
