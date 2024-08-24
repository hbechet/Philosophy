import { useEffect, useState } from "react";
import HandleFetch from "../components/HandleFetch";

export const useElements = () => {
  const [data, setData] = useState([]);

  const res = HandleFetch();

  useEffect(() => {
    setTimeout(() => {
      res.then((data) => {
        setData(data);
      })
        .catch((error) => {
          console.error(`Could not get data: ${error}`);
        })
    }, 2500);
  }, [res]);

  const updateElement = (id, newData) => {
    setData(prevData => {
      return prevData.map(element => {
        if (element.id === id) {
          return { ...element, ...newData };
        }
        return element;
      });
    });
  };

  return { data, updateElement };
};
