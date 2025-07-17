import React from "react";
import { useQuery } from "@tanstack/react-query";

const WithTanStackQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/products");
      const { products } = await response.json();
      return products;
    },
  });

  if (isLoading) return <>Loading . . .</>;
  if (error) return <>{error}</>;
  return (
    <React.Fragment>
      <section>
        {data &&
          Array.isArray(data) &&
          data?.map((p) => {
            return <div key={p.id}>{p.title}</div>;
          })}
      </section>
    </React.Fragment>
  );
};

export default WithTanStackQuery;
