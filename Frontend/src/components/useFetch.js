import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, dataState] = useState("");
  const [isPending, isPendingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          dataState(res.data);
          isPendingState(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending };
};

export default useFetch;
