import React from "react";

import { RomanNumbersProvider } from "./romanNumbers";

const AppProvider: React.FC = ({ children }) => {
  return <RomanNumbersProvider>{children}</RomanNumbersProvider>;
};

export default AppProvider;
