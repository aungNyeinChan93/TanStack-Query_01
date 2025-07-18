import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchTodos = async () => {
  const { data: todos } = await axios.get(`https://dummyjson.com/todos`);
  return todos;
};

const fetchQuotes = async () => {
  const { data: quotes } = await axios.get(`https://dummyjson.com/quotes`);
  return quotes;
};

const MultipleFetch = () => {
  const [todos, quotes] = useQueries({
    queries: [
      { queryKey: ["todos"], queryFn: fetchTodos },
      { queryKey: ["quotes"], queryFn: fetchQuotes },
    ],
  });
  return (
    <React.Fragment>
      <section>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
        <hr className="h-6 bg-red-500 text-red-600" />
        <pre>{JSON.stringify(quotes, null, 2)}</pre>
      </section>
    </React.Fragment>
  );
};

export default MultipleFetch;
