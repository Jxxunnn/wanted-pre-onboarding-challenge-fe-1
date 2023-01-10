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
        backgroundColor: "rgba( 255, 255, 255, 0.7 )",
      }}
    >
      <h2>투두 수정하기</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block" }} htmlFor="title">
          TITLE
          <input
            onChange={handleChange}
            style={{ marginLeft: "35px", width: "200px" }}
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
            style={{ width: "200px", height: "50px" }}
            defaultValue={selectedTodo.content}
            type="text"
            name="content"
            id="content"
          />
        </label>
        <button type="submit">수정</button>
        <button onClick={cancelEdit} type="button">
          취소
        </button>
      </form>
    </article>
  );
}
