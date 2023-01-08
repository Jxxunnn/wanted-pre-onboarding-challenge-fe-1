import { useEffect, useState } from "react";

import API from "../apis/api";
import { getToken } from "../utils/handleToken";

const useFetch = (path, deps = []) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API(`${path}`, {
      headers: {
        Authorization: getToken(),
      },
    }).then((res) => setData(res.data.data));
  }, deps);

  return [data];
};

export default useFetch;
