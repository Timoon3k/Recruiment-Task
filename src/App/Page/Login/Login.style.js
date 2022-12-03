import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
  text-align: center;

  @media (max-width: 868px) {
    width: 80vw;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  text-align: left;
`;
