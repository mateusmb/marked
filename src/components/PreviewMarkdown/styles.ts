import styled from "styled-components";

export const Preview = styled.div`
  width: 80vh;
  height: 80vh;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 10px #000;
  background-color: white;
  font-size: 100%;
  line-height: inherit;
  padding: 8px 16px;
  resize: none;
  overflow: auto;
  &:focus {
    outline: none;
  }
`