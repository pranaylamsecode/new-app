import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssTransition from "./pages/css-transition/CssTransition";
import OutIn from "./pages/out-in-page/OutIn";
import PhotoCollage from "./pages/PhotoCollage";

import ReactRouterAnimation from "./pages/react-router-animation/ReactRouterAnimation";

const App = () => {
  return (
    <>
      <PhotoCollage />
    </>
  );
};

export default App;
