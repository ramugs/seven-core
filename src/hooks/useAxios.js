import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = ({ method, path, body = {} }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  console.log(path, method);

  const fetch = () => {
    setLoading(true);
    axios
      .get(`${path}`)
      .then((response) => {
        setLoading(false);
        setError(null);
        setData(response?.data);
      })
      .catch((error) => {
        setLoading(false);
        setData(null);
        setError(error?.response);
      });
  };

  return { data, error, loading, fetch };
};

export default useAxios;
