import React from "react";
import Todo from "./components/Todo";
// import TestRefreshInterval from "./components/test/TestRefreshIntervel";
// import AddQuote from "./components/AddQuote";
// import TestAll from "./components/test/TestAll";
// import TestServerAction from "./components/test/TestServerAction";
// import MultipleFetch from "./components/MultipleFetch";
// import TestTodo from "./components/test/TestTodo";
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
        {/* <TestTodo /> */}
        {/* <MultipleFetch /> */}
        {/* <TestAll /> */}
        {/* <TestServerAction /> */}
        {/* <AddQuote /> */}

        <Todo />
      </section>
    </React.Fragment>
  );
};

export default App;
