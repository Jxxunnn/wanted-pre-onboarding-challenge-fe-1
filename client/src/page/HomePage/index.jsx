import React, { useState } from "react";
import Todos from "../../components/home/Todos";
import Detail from "../../components/home/Detail";
import Post from "../../components/home/Post";
import Modal from "../../components/home/Modal";
import useFetch from "../../hooks/useFetch";
import {
  getTodo,
  deleteTodo,
  createTodo,
  updateTodo,
} from "../../apis/home/handleTodo";
import { removeToken } from "../../utils/handleToken";

export default function HomePage() {
  const [todos, setTodos] = useFetch("/todos");
  const [isEditOn, setIsEditOn] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
    id: "",
  });

  const handleRemove = (id) => {
    deleteTodo(id, setTodos);
  };

  const handleEdit = (id) => {
    getTodo(id, setSelectedTodo).then(() => {
      setIsEditOn(true);
    });
  };
  const cancelEdit = () => {
    setIsEditOn(false);
  };

  const onSaveData = (data) => {
    createTodo(data, setTodos);
  };

  const onEditData = (data, id) => {
    updateTodo(data, id, setTodos);
  };

  const selectTodo = (id) => {
    getTodo(id, setSelectedTodo);
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
      <Post onSaveData={onSaveData} />
      <hr />
      <Detail {...selectedTodo} />
      {isEditOn === true ? (
        <Modal
          selectedTodo={selectedTodo}
          onEditData={onEditData}
          cancelEdit={cancelEdit}
        ></Modal>
      ) : null}
      <hr />
      <button onClick={removeToken}>로그아웃</button>
    </section>
  );
}
