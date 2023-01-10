import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, handleRemove, handleEdit, selectTodo }) {
  console.log(todos);
  return (
    <ol>
      {todos.map((data) => (
        <Todo
          {...data}
          key={data.id}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          selectTodo={selectTodo}
        />
      ))}
    </ol>
  );
}
