/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useQuery } from "@tanstack/react-query";
const TestQuote = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/quotes");
      const { quotes } = await response.json();
      return quotes;
    },
  });

  if (isLoading) return isLoading && <>Loading . . .</>;

  if (error) return error && <>Loading . . .</>;

  return (
    <React.Fragment>
      <section>
        {data?.map((quote: any) => {
          return <div key={quote.id}>{quote.quote}</div>;
        })}
      </section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </React.Fragment>
  );
};

export default TestQuote;
