import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState('');
  const [value, setValue] = useState('');
  // eslint-disable-next-line no-console
  console.log(todo);

  function deleteTodo(id) {
    const newTodoList = [...todo].filter((item) => item.id !== id);
    setTodo(newTodoList);
  }

  function statusTodo(id) {
    const newTodoList = [...todo].filter((item) => {
      if (item.id === id) {
        // eslint-disable-next-line no-param-reassign
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
        // eslint-disable-next-line no-param-reassign
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
        <div
          key={item.id}
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
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: '24px',
                padding: '6px',
              }}
            >
              {item.title}
            </div>
          )}
          {edit === item.id ? (
            <div>
              <Button
                style={{ marginRight: '12px' }}
                variant="contained"
                color="primary"
                onClick={() => saveTodo(item.id)}
              >
                save
              </Button>
            </div>
          ) : (
            <div>
              <Button
                style={{ marginLeft: '12px' }}
                variant="contained"
                color="primary"
                onClick={() => deleteTodo(item.id)}
              >
                delete
              </Button>
              <Button
                style={{ marginLeft: '12px' }}
                variant="contained"
                color="primary"
                onClick={() => editTodo(item.id, item.title)}
              >
                edit
              </Button>
              <Button
                style={{ marginLeft: '12px' }}
                variant="contained"
                color="primary"
                onClick={() => statusTodo(item.id)}
              >
                done
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
