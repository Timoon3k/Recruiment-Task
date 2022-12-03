import React, { useContext } from "react";
import { GameContext } from "../../../App";
import { Button } from "../../../Components/Button/Button";
import { Text } from "../../../Components/Text/Text";
import { ScoreWrapper, ButtonWrapper } from "./Score.style";
import { useNavigate } from "react-router-dom";

export const Score = () => {
  const navigate = useNavigate();
  const { name, result } = useContext(GameContext);

  const refreshPage = () => {
    navigate("/");
  };
  return (
    <ScoreWrapper>
      <Text size="1.9rem">Congratulations, {name}</Text>
      <Text size="1.5rem">Your score:</Text>
      <Text size={"1.4rem"}>
        {result}{" "}
        <Text size={"1.4rem"} color="#00BFFF">
          points
        </Text>
      </Text>
      <ButtonWrapper>
        <Button onClick={refreshPage}>Restart</Button>
      </ButtonWrapper>
    </ScoreWrapper>
  );
};
