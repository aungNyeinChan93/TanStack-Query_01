import React from "react";
import TestTodo from "./components/test/TestTodo";
// import TestRefreshInterval from "./components/test/TestRefreshIntervel";
// import TestStaleTime from "./components/test/TestStaleTime";
// import TestQuote from "./components/test/TestQuote";
// import WithReduxQuery from "./components/WithReduxQuery";
// import WithRtkQuery from "./components/WithRtkQuery";
// import WithUseEffect from "./components/WithUseEffext";
// import WithTanStackQuery from "./components/WithTanStackQuery";

const App = () => {
  return (
    <React.Fragment>
      <section>
        {/* <WithUseEffect />
        <WithTanStackQuery />
        <WithRtkQuery />
        <WithReduxQuery /> */}
        {/* <TestQuote /> */}
        {/* <TestStaleTime /> */}

        {/* <section className="flex space-x-0">
          <TestRefreshInterval />
          <TestRefreshInterval recipeId={2} />
          <TestRefreshInterval recipeId={3} />
          <TestRefreshInterval recipeId={4} />
        </section> */}

        <TestTodo />
      </section>
    </React.Fragment>
  );
};

export default App;
