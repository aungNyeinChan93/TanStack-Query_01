import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const TestTodo = () => {
  const [currentId, setCurrentId] = useState<number>(1);
  const { data } = useQuery({
    queryKey: ["todo", currentId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/todos/${currentId}`
      );
      return data;
    },
    // staleTime: 2000,
    // refetchInterval: 6000,
  });
  return (
    <React.Fragment>
      <section>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button
          className="px-4 py-2 bg-indigo-400 rounded-2xl me-3"
          type="button"
          onClick={() => setCurrentId((pre) => (pre > 1 ? pre - 1 : 1))}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-indigo-400 rounded-2xl"
          type="button"
          onClick={() => setCurrentId((pre) => (pre < 10 ? pre + 1 : 1))}
        >
          Next
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestTodo;
