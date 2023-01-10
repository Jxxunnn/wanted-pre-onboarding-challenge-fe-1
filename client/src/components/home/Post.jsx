import React, { useState } from "react";
import { createTodo, updateTodo } from "../../apis/home/handleTodo";

export default function Modal() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <label style={{ display: "block" }} htmlFor="title">
        TITLE
        <input
          onChange={handleChange}
          style={{ marginLeft: "35px", width: "200px" }}
          type="text"
          name="title"
          id="title"
        />
      </label>
      <label>
        CONTENT
        <textarea
          onChange={handleChange}
          style={{ width: "200px", height: "50px" }}
          type="text"
          name="content"
          id="title"
        />
      </label>
      <button type="button">저장</button>
    </form>
  );
}
