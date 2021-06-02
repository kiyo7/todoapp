import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import shortid from "shortid";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate(),
        isDone: false,
      },
    ]);
  };

  const changeIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id !== todo.id) {
          return todo;
        } else {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
      })
    );
  }; //[false,false,false]
  //[{id:"",content:"",isDone:false},{id:"",content:"",isDone:true}]

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} changeIsDone={changeIsDone} />
    </>
  );
};

export default App;
