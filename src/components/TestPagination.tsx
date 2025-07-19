import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const TestPagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 10;
  const { data: todos } = useQuery({
    queryKey: ["todos", currentPage, limit],
    queryFn: async () => {
      const skip = limit * (currentPage - 1);
      const response = await fetch(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      );
      const { todos } = await response.json();
      return todos;
    },
  });

  console.log(todos);

  return (
    <React.Fragment>
      <section>
        <div className="flex justify-center items-center w-full h-[600px] text-white bg-slate-500 mt-5">
          <div>
            {todos &&
              Array.isArray(todos) &&
              todos?.map((todo) => {
                return (
                  <p
                    className="p-2 text-green-400/90 bg-slate-50 my-2 rounded text-2xl"
                    key={todo.id}
                  >
                    {todo.id} - {todo.todo}
                  </p>
                );
              })}
          </div>
        </div>
        <div className="text-center p-4 mt-4">
          <button
            className="px-4 py-2 text-center mx-2 rounded bg-red-500"
            type="button"
            onClick={() => setCurrentPage((pre) => (pre > 1 ? pre - 1 : 1))}
          >
            Back
          </button>
          <button
            className="px-4 py-2 text-center mx-2 rounded bg-red-500"
            type="button"
            onClick={() => setCurrentPage((pre) => (pre < 26 ? pre + 1 : 1))}
          >
            Next
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestPagination;
