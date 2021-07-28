import React, { useState } from 'react';

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState('');
  const [value, setValue] = useState('');

  function deleteTodo(id) {
    const newTodoList = [...todo].filter((item) => item.id !== id);
    setTodo(newTodoList);
  }

  function statusTodo(id) {
    const newTodoList = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodoList);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    const newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit('');
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <button onClick={() => saveTodo(item.id)}>save</button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}>delete</button>
              <button onClick={() => editTodo(item.id, item.title)}>
                edit
              </button>
              <button onClick={() => statusTodo(item.id)}>open/done</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
