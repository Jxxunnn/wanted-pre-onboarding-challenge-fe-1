import React from "react";
import { useNavigate } from "react-router-dom";

export default function Todo({
  title,
  content,
  id,
  createdAt,
  updatedAt,
  handleRemove,
  handleEdit,
  selectTodo,
}: {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  handleRemove: (x: string) => void;
  handleEdit: (x: string) => void;
  selectTodo: (x: string) => void;
}) {
  const navigate = useNavigate();
  const onRemove = () => {
    handleRemove(id);
  };
  const onEdit = () => {
    handleEdit(id);
  };
  const onSelect = () => {
    selectTodo(id);

    navigate(`/${id}`);
  };

  return (
    <li style={{ margin: "10px 0" }}>
      <strong onClick={onSelect}>{title}</strong>
      <button onClick={onEdit} style={{ padding: "4px 8px" }} type="button">
        수정
      </button>
      <button onClick={onRemove} style={{ padding: "4px 8px" }} type="button">
        삭제
      </button>
    </li>
  );
}
