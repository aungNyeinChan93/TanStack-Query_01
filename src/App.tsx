import React from "react";
import WithReduxQuery from "./components/WithReduxQuery";
// import WithRtkQuery from "./components/WithRtkQuery";
// import WithUseEffect from "./components/WithUseEffext";
// import WithTanStackQuery from "./components/WithTanStackQuery";

const App = () => {
  return (
    <React.Fragment>
      <section>
        {/* <WithUseEffect /> */}
        {/* <WithTanStackQuery /> */}
        {/* <WithRtkQuery /> */}

        <WithReduxQuery />
      </section>
    </React.Fragment>
  );
};

export default App;
