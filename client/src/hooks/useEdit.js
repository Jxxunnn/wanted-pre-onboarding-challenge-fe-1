import { useEffect, useState } from "react";

const useEdit = (state = {}) => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    setData({ title: state.title, content: state.content });
  }, []);

  return [data, setData];
};

export default useEdit;
