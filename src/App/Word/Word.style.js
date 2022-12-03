import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Info = styled.div`
  text-align: center;
  top: -10px;
  left: 40%;
  margin: 0 auto;
`;
