import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import TextContext from "../../context/text";
import { Preview, PreviewContainer, PreviewHeader } from "./styles";

const PreviewMarkdown: React.FC = () => {
  const { state } = useContext(TextContext);

  return (
    <PreviewContainer>
      <PreviewHeader>Preview</PreviewHeader>
      <Preview>
        <ReactMarkdown>{state.content}</ReactMarkdown>
      </Preview>
    </PreviewContainer>
  );
};

export default PreviewMarkdown;
