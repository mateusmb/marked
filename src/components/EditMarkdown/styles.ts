import styled from "styled-components";

export const Editor = styled.textarea`
  width: 80vh;
  height: 80vh;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 10px #000;
  font-size: 100%;
  line-height: inherit;
  padding: 8px 16px;
  resize: none;
  overflow: auto;
  &:focus {
    outline: none;
  }
`