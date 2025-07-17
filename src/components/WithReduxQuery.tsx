import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import type { AppDispatch, RootState } from "../store";
import { fetchProducts } from "../features/productSlice";

const WithReduxQuery = () => {
  const { products, isLoading, error } = useAppSelector(
    (store: RootState) => store.products
  );
  const appDispatch: AppDispatch = useAppDispatch();

  console.log(products);

  useEffect(() => {
    appDispatch(fetchProducts());
  }, [appDispatch]);

  if (isLoading) return <>Loading</>;
  if (error) return <>{error}</>;
  return (
    <React.Fragment>
      <section>
        {products &&
          Array.isArray(products) &&
          products?.map((p) => {
            return <div key={p.id}>{p.title}</div>;
          })}
      </section>
    </React.Fragment>
  );
};

export default WithReduxQuery;
