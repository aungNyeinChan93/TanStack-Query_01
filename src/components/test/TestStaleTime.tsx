import { useQuery } from "@tanstack/react-query";
import React from "react";

const TestStaleTime = () => {
  const { data } = useQuery({
    queryKey: ["test-stale-time"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/users");
      const { users } = await response.json();
      return users;
    },
    staleTime: 5000,
  });
  return (
    <React.Fragment>
      <section>
        {data &&
          Array.isArray(data) &&
          data?.map((user) => {
            return <div key={user.id}>{user.username}</div>;
          })}
      </section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </React.Fragment>
  );
};

export default TestStaleTime;
