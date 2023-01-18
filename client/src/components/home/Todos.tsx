import React from "react";
import Todo from "./Todo";

export default function Todos({
  todos,
  handleRemove,
  handleEdit,
  selectTodo,
}: {
  todos: {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  }[];
  handleRemove: (id: string) => void;
  handleEdit: (id: string) => void;
  selectTodo: (id: string) => void;
}) {
  return (
    <ol>
      {todos.map((data, i) => (
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
