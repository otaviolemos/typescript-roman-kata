import React from "react";

import Landing from "./components/Landing";
import Converter from "./components/Converter";

import "./assets/styles/global.css";

function App(): JSX.Element {
  return (
    <>
      <Landing />
      <Converter />
    </>
  );
}

export default App;
