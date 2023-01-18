import React, { useEffect, useState } from "react";

const useEdit = (state: {
  title: string;
  content: string;
}): [
  { title: string; content: string },
  React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >,
] => {
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
