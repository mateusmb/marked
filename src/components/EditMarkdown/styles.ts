import styled from "styled-components";

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const EditorHeader = styled.h2`
  padding: 16px;
`

export const Editor = styled.textarea`
  width: 80vh;
  height: 80vh;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 10px #888;
  font-size: 100%;
  line-height: inherit;
  padding: 8px 16px;
  resize: none;
  overflow: auto;
  &:focus {
    outline: none;
  }
`