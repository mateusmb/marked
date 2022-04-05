import React from "react";
import { TextContextProvider } from "./text";

const GlobalContext: React.FC = ({ children }) => {
  return <TextContextProvider>{children}</TextContextProvider>;
};

export default GlobalContext;
