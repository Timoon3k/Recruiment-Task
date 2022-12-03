import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-color: ${({ error }) => (error ? "red" : "gray")};

  &:focus {
    outline: none;
    border: 1px solid ${({ error }) => (error ? "red" : "gray")};
  }
`;
