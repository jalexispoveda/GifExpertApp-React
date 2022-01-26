import { useEffect, useState } from "react";
import getGifs from "../helper/getGifs";

export const useFetchGif = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((response) => {
      setState({
        data: response,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
