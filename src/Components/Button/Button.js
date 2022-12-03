import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  background: none;
  border: 2px solid #87cefa;
  font-weight: 700;
  border-radius: 5px;
  color: #87cefa;
  cursor: pointer;

  ${(secondary) =>
    secondary &&
    css`
      padding: 10px 50px;
    `}
`;
