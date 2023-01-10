import API from "../api";
import { getToken } from "../../utils/handleToken";

const createTodo = async (state = {}, setState = () => {}) => {
  API.post(
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
};
const deleteTodo = async (id) => {
  API.delete(`/todos/${id}`, {
    headers: {
      Authorization: getToken(),
    },
  });
};
const updateTodo = async (state = {}) => {
  API.put(
    `/todos/${state.id}`,
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
};

const getTodo = async (id, setState = (nextState) => {}) => {
  try {
    const res = await API.get(`/todos/${id}`);

    setState(res.data.data);
  } catch (error) {
    throw new Error("투두 가져오기를 실패했습니다.");
  }
};

export { createTodo, deleteTodo, updateTodo, getTodo };
