import React, { useState } from "react";
import Todos from "../../components/home/Todos";
import Detail from "../../components/home/Detail";
import Post from "../../components/home/Post";
import useFetch from "../../hooks/useFetch";
import { getTodo, deleteTodo } from "../../apis/home/handleTodo";

export default function HomePage() {
  const [todos, setTodos] = useFetch("/todos");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
    id: "",
  });

  const handlePost = () => {
    setIsEdit(!isEdit);
  };

  const handleRemove = (id) => {
    setTodos(...[todos.filter((item) => item.id !== id)]);
    deleteTodo(id);
  };

  const handleEdit = (title, content) => {
    setIsEdit(true);
    setSelectedTodo({
      title,
      content,
    });
  };

  const onSaveData = (data) => {
    setTodos(
      todos.map((item) =>
        data.id === item.id
          ? { title: item.title, content: item.content }
          : item,
      ),
    );
  };

  const selectTodo = (id) => {
    getTodo(id);
  };

  return (
    <section>
      <h1>투두 리스트</h1>
      <Todos
        todos={todos}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
        selectTodo={selectTodo}
      />
      <button onClick={handlePost} type="button">
        {isEdit ? "닫기" : "추가"}
      </button>
      {isEdit ? <Post setTodos={setTodos} /> : null}
      <hr />
      <Detail {...selectedTodo} />
    </section>
  );
}
