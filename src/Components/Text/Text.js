import styled from "styled-components";

export const Text = styled.span`
  color: ${({ color }) => (color ? color : "black")};
  font-size: ${({ size }) => (size ? size : "1rem")};
  font-weight: 700;
`;
