import React, { useState } from "react";
import { Wrapper, Info } from "./Word.style";
import { Text } from "../../Components/Text/Text";
import { ANSWER } from "../../Constant/constant";

export const Word = ({ row, col, handleSetSelectedWord, data }) => {
  const [select, setSelected] = useState(false);

  const { item, id, isCorrect } = data;

  const getColor =
    isCorrect === ANSWER.correct
      ? "green"
      : isCorrect === ANSWER.uncorrect
      ? "red"
      : select
      ? "black"
      : "grey";

  const description = isCorrect === ANSWER.correct ? "Good" : "Bad";

  const handleCheckWord = () => {
    handleSetSelectedWord(id);
    setSelected((prev) => !prev);
  };

  return (
    <Wrapper row={row} col={col} onClick={handleCheckWord}>
      <Info>
        {isCorrect && (
          <Text size="1.2rem" color={getColor}>
            {description}
          </Text>
        )}
      </Info>
      <Text size=".8rem" color={getColor}>
        {item}
      </Text>
    </Wrapper>
  );
};
