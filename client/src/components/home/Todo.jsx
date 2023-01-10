import React from "react";

export default function Todo({
  title,
  content,
  id,
  createdAt,
  updatedAt,
  handleRemove,
  handleEdit,
  selectTodo,
}) {
  const onRemove = () => {
    handleRemove(id);
  };
  const onEdit = () => {
    handleEdit(id);
  };
  const onSelect = () => {
    selectTodo(id);
  };

  return (
    <li style={{ margin: "10px 0" }}>
      <strong onClick={onSelect}>{title}</strong>
      <button onClick={onEdit} type="button">
        수정
      </button>
      <button onClick={onRemove} type="button">
        삭제
      </button>
    </li>
  );
}
