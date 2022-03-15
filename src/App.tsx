import React, { useState } from "react";
import EditMarkdown from "./components/EditMarkdown";
import PreviewMarkdown from "./components/PreviewMarkdown";
import { Page } from "./styles/styles";

const App: React.FC = () => {
  const [markdownText, setMarkdownText] = useState("");

  return (
    <Page>
      <EditMarkdown
        markdownText={markdownText}
        setMarkdownText={setMarkdownText}
      />
      <PreviewMarkdown markdownText={markdownText} />
    </Page>
  );
};

export default App;
