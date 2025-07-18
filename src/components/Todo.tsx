import { useMutation, useQuery, QueryClient } from "@tanstack/react-query";
import React from "react";

interface Todo {
  id?: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const queryClient = new QueryClient();

const fetchTodos = async () => {
  const response = await fetch(`https://dummyjson.com/todos`);
  if (!response.ok) throw new Error("error todo fetchin!");
  return await response.json();
};

const Todo = () => {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const {
    mutate,
    data: addTodo,
    status,
  } = useMutation({
    mutationFn: async (newTodo: Todo) => {
      const response = await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  console.log(addTodo?.todo);
  console.log(status);

  return (
    <React.Fragment>
      <pre>{JSON.stringify(addTodo, null, 2)}</pre>
      <section>
        <button
          type="button"
          onClick={() =>
            mutate({ todo: "test todo", completed: true, userId: 4 })
          }
        >
          {" "}
          Add Todo
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    </React.Fragment>
  );
};

export default Todo;

// pagination
// page= ?, limit =10  skip= limit * page-1;
