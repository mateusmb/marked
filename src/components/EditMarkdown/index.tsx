import React, { ChangeEvent, useContext } from "react";
import TextContext from "../../context/text";
import {
  ButtonContainer,
  ContainerHeader,
  SaveButton,
  TextContainer,
} from "../../styles/styles";
import { Editor } from "./styles";

const EditMarkdown: React.FC = () => {
  const { state, setState } = useContext(TextContext);

  const handleTextInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setState({ content: event.target.value });
  };

  const saveMarkdownFile = () => {
    const link = document.createElement("a");
    const file = new Blob([state.content], {
      type: "text/plain"
    });
    link.href = URL.createObjectURL(file);
    link.download = "your_awesome_markdown.md";
    document.body.appendChild(link);
    link.click();
  }

  return (
    <TextContainer>
      <ContainerHeader>Editor</ContainerHeader>
      <Editor rows={9} value={state.content} onChange={handleTextInput} />
      <ButtonContainer>
        <SaveButton onClick={saveMarkdownFile}>Save to .MD</SaveButton>
      </ButtonContainer>
    </TextContainer>
  );
};

export default EditMarkdown;
