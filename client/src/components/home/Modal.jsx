import React from "react";
import useEdit from "../../hooks/useEdit";

export default function Modal({ selectedTodo, cancelEdit, onEditData }) {
  const [formData, setFormData] = useEdit(selectedTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditData(formData, selectedTodo.id);
    cancelEdit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <article
      style={{
        position: "fixed",
        inset: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        backgroundColor: "rgba( 0, 0, 0, 0.9 )",
        color: "white",
      }}
    >
      <h2>투두 수정하기</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block" }} htmlFor="title">
          TITLE
          <input
            onChange={handleChange}
            defaultValue={selectedTodo.title}
            type="text"
            name="title"
            id="title"
          />
        </label>
        <label style={{ display: "block" }} htmlFor="content">
          CONTENT
          <textarea
            onChange={handleChange}
            defaultValue={selectedTodo.content}
            type="text"
            name="content"
            id="content"
          />
        </label>
        <button style={{ marginRight: "100px" }} type="submit">
          수정
        </button>
        <button onClick={cancelEdit} type="button">
          취소
        </button>
      </form>
    </article>
  );
}
