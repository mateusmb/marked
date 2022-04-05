import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerHeader = styled.h2`
  padding: 10px;
  color: lightgray;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SaveButton = styled.button`
  margin-top: 20px;
  background-color: #f7702a;
  border-radius: 4px;
  box-shadow: 2px 2px 10px #000;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;
