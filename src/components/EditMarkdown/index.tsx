import React, { ChangeEvent } from "react";
import { Editor, EditorContainer, EditorHeader } from "./styles";

interface IProps {
  markdownText: string;
  setMarkdownText: (text: string) => void;
}

const EditMarkdown: React.FC<IProps> = ({ markdownText, setMarkdownText }) => {
  const handleTextInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(event.target.value);
  };

  return (
    <EditorContainer>
      <EditorHeader>Editor</EditorHeader>
      <Editor rows={9} value={markdownText} onChange={handleTextInput}/>
    </EditorContainer>
  );
};

export default EditMarkdown;
