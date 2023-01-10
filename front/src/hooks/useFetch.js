import { useEffect, useState } from "react";

import API from "../apis/api";
import { getToken } from "../utils/handleToken";

const useFetch = (path) => {
  const [data, setData] = useState([]);

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
