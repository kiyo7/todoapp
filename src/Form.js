import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (value === "") return alert("タスクを入力してください");
    e.preventDefault();
    addTodo(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="タスクを入力"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
