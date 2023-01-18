import React from "react";
import API from "../api";
import { getToken } from "../../utils/handleToken";

const createTodo = async (
  state = { title: "", content: "" },
  setState: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        content: string;
        id: string;
        createdAt: string;
        updatedAt: string;
      }[]
    >
  >,
) => {
  try {
    await API.post(
      "/todos",
      {
        title: state.title,
        content: state.content,
      },
      {
        headers: {
          Authorization: getToken(),
        },
      },
    );

    getTodos(setState);
  } catch (error) {
    throw new Error("투두 생성을 실패했습니다.");
  }
};
const deleteTodo = async (
  id: string,
  setState: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        content: string;
        id: string;
        createdAt: string;
        updatedAt: string;
      }[]
    >
  >,
) => {
  try {
    await API.delete(`/todos/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    getTodos(setState);
  } catch (error) {
    throw new Error("투두 삭제를 실패했습니다.");
  }
};
const updateTodo = async (
  state = { title: "", content: "" },
  id: string,
  setState: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        content: string;
        id: string;
        createdAt: string;
        updatedAt: string;
      }[]
    >
  >,
) => {
  try {
    await API.put(
      `/todos/${id}`,
      {
        title: state.title,
        content: state.content,
      },
      {
        headers: {
          Authorization: getToken(),
        },
      },
    );

    getTodos(setState);
  } catch (error) {
    throw new Error("투두 업데이트를 실패했습니다.");
  }
};

const getTodo = async (
  id: string | undefined,
  setState: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
      id: string;
      createdAt: string;
      updatedAt: string;
    }>
  >,
) => {
  try {
    const res = await API.get(`/todos/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    setState(res.data.data);
  } catch (error) {
    throw new Error("투두 가져오기를 실패했습니다.");
  }
};

const getTodos = async (
  setState: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        content: string;
        id: string;
        createdAt: string;
        updatedAt: string;
      }[]
    >
  >,
) => {
  try {
    const res = await API.get("/todos", {
      headers: {
        Authorization: getToken(),
      },
    });

    setState(res.data.data);
  } catch (error) {
    throw new Error("투두 가져오기를 실패했습니다.");
  }
};

export { createTodo, deleteTodo, updateTodo, getTodo };
