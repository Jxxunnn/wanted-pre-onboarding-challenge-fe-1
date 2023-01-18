import React, { ChangeEvent, FormEvent, useState } from "react";

interface formType {
  title: string;
  content: string;
}

export default function Post({
  onSaveData,
}: {
  onSaveData: (data: formType) => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e: FormEvent) => {
    if (e.target instanceof HTMLFormElement) {
      e.preventDefault();
      onSaveData(formData);
      setFormData({
        title: "",
        content: "",
      });
    }
  };
  const handleChange = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 10px" }}>
      <label style={{ display: "block" }} htmlFor="title">
        TITLE
        <input
          onChange={handleChange}
          type="text"
          name="title"
          id="title"
          value={formData.title || ""}
        />
      </label>
      <label>
        CONTENT
        <textarea
          onChange={handleChange}
          style={{ height: "100px" }}
          name="content"
          id="title"
          value={formData.content || ""}
        />
      </label>
      <button type="submit">저장</button>
    </form>
  );
}
