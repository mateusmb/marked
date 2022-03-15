import React from "react";
import ReactMarkdown from "react-markdown";
import { Preview, PreviewContainer, PreviewHeader } from "./styles";

interface IProps {
  markdownText: string;
}

const PreviewMarkdown: React.FC<IProps> = ({ markdownText }) => {
  return (
    <PreviewContainer>
      <PreviewHeader>Preview</PreviewHeader>
      <Preview>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </Preview>
    </PreviewContainer>
  );
};

export default PreviewMarkdown;
