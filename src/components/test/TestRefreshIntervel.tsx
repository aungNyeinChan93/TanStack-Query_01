/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const TestRefreshInterval: React.FC<{ recipeId?: number }> = ({ recipeId }) => {
  const [currentId, setId] = useState<number>(recipeId || 1);

  const fetchRecipe = async (id: number) => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    return data;
  };

  const { data } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => fetchRecipe(recipeId ? Number(recipeId) : currentId),
    refetchInterval: 3000,
    // staleTime: 1000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setId((pre) => (pre < 30 ? pre + 1 : recipeId ? recipeId : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <React.Fragment>
      <section className="flex justify-center items-center w-full h-screen bg-slate-600">
        <div>
          <pre className="text-2xl text-green-500 text-center"></pre>
          <img
            src={data?.image}
            className="w-88 h-88 object-center rounded-2xl"
            alt=""
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestRefreshInterval;
