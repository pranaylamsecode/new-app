import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactRouterAnimation from "./pages/react-router-animation/ReactRouterAnimation";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ReactRouterAnimation />
      </BrowserRouter>
    </>
  );
};

export default App;
