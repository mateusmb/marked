import React from "react";
import EditMarkdown from "./components/EditMarkdown";
import PreviewMarkdown from "./components/PreviewMarkdown";
import GlobalContext from "./context";
import { Page } from "./styles/styles";
import "./styles/global";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <GlobalContext>
      <GlobalStyle />
      <Page>
        <EditMarkdown />
        <PreviewMarkdown />
      </Page>
    </GlobalContext>
  );
};

export default App;
