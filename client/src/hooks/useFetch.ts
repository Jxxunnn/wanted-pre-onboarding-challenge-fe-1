import React, { useEffect, useState } from "react";

import API from "../apis/api";
import { getToken } from "../utils/handleToken";

const useFetch = (
  path: string,
): [
  {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  }[],
  React.Dispatch<
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
] => {
  const [data, setData] = useState<
    {
      title: string;
      content: string;
      id: string;
      createdAt: string;
      updatedAt: string;
    }[]
  >([]);

  useEffect(() => {
    API(`${path}`, {
      headers: {
        Authorization: getToken(),
      },
    }).then((res) => setData(res.data.data));
  }, []);

  return [data, setData];
};

export default useFetch;
