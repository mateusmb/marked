import React, { ChangeEvent, useContext } from "react";
import TextContext from "../../context/text";
import { Editor, EditorContainer, EditorHeader } from "./styles";

const EditMarkdown: React.FC = () => {
  const { state, setState } = useContext(TextContext);

  const handleTextInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setState({ content: event.target.value });
  };

  return (
    <EditorContainer>
      <EditorHeader>Editor</EditorHeader>
      <Editor rows={9} value={state.content} onChange={handleTextInput} />
    </EditorContainer>
  );
};

export default EditMarkdown;
