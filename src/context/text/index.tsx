import React, { createContext, useState } from "react";

type TextType = {
  content: string;
};

type PropsTextContext = {
  state: TextType;
  setState: React.Dispatch<React.SetStateAction<TextType>>;
};

const initialValue = {
  state: {
    content: "# Start editing using Markdown",
  },
  setState: () => {},
};

const TextContext = createContext<PropsTextContext>(initialValue);

const TextContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialValue.state);
  return (
    <TextContext.Provider value={{ state, setState }}>
      {children}
    </TextContext.Provider>
  );
};

export { TextContextProvider };
export default TextContext;
