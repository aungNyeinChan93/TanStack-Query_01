/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

export interface TodoForm {
  todo: string;
  completed: boolean;
  userId: number;
}

const TestServerAction = () => {
  const addTodo = async (todo: TodoForm) => {
    const response = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    return data;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TodoForm>();

  const queryClient = new QueryClient();

  const { mutate, data, status } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // refresh list
    },
  });

  const todoSubmit: SubmitHandler<TodoForm> = (data) => {
    const newTodo: TodoForm = {
      todo: data.todo,
      completed: false,
      userId: 3,
    };
    mutate(newTodo);
  };

  console.log(data);
  console.log(status);

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(todoSubmit)}>
          <input
            className="border-2 border-red-400 p-2"
            type="text"
            placeholder="task"
            {...register("todo", {
              required: { value: true, message: "Task fileds is required" },
            })}
          />
          <div className="text-sm text-red-600 p-2">
            {errors?.todo && <>{errors.todo?.message}</>}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="px-4 py-2 bg-indigo-400 rounded "
          >
            Add Todo
          </button>
        </form>
      </section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </React.Fragment>
  );
};

export default TestServerAction;
