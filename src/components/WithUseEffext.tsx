/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

const WithUseEffect = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const { products } = await response.json();
    if (products) setData(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [setData]);
  return (
    <React.Fragment>
      <section>
        {data &&
          Array.isArray(data) &&
          data?.map((product: any) => (
            <div key={product.id}>{product.title}</div>
          ))}
      </section>
    </React.Fragment>
  );
};

export default WithUseEffect;
