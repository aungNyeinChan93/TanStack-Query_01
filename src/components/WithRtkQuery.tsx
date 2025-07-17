/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGetProductsQuery } from "../services/productApi";

const WithRtkQuery = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data?.products);

  if (isLoading) return <>Loading . . .</>;
  if (error) return <>{error}</>;
  return (
    <React.Fragment>
      <section>
        €
        {data.products &&
          Array.isArray(data.products) &&
          data?.products?.map((p: any) => {
            return <div key={p.id}>{p.title}</div>;
          })}
      </section>
    </React.Fragment>
  );
};

export default WithRtkQuery;
