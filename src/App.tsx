import React from "react";
import TestRefreshInterval from "./components/test/TestRefreshIntervel";
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

        <TestRefreshInterval />
      </section>
    </React.Fragment>
  );
};

export default App;
