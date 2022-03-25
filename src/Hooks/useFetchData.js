import axios from "axios";
import { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const useFetchdata = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = axios
      .get(URL)
      .then((response) => setUsers(response.data))
      .catch((err) => {
        setError(err);
      });
    return () => {
      fetchData();
    };
  }, 
  []);

  return { users, error };
};
export default useFetchdata;