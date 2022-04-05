import jsPDF from "jspdf";
import React, { useContext, useRef } from "react";
import ReactMarkdown from "react-markdown";
import TextContext from "../../context/text";
import {
  ButtonContainer,
  ContainerHeader,
  SaveButton,
  TextContainer,
} from "../../styles/styles";
import { Preview } from "./styles";

const PreviewMarkdown: React.FC = () => {
  const { state } = useContext(TextContext);
  const previewRef = useRef<HTMLDivElement>(null);

  const saveToPDF = async () => {
    const element = previewRef.current;
    if (element) {
      const pdf = new jsPDF("p", "pt", "a4");
      await pdf.html(element);
      pdf.save("your_awesome_markdown.pdf");
    }
  };

  return (
    <TextContainer>
      <ContainerHeader>Preview</ContainerHeader>
      <Preview ref={previewRef}>
        <ReactMarkdown>{state.content}</ReactMarkdown>
      </Preview>
      <ButtonContainer>
        <SaveButton onClick={saveToPDF}>Save to .PDF</SaveButton>
      </ButtonContainer>
    </TextContainer>
  );
};

export default PreviewMarkdown;
