import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../../../Data/Data";
import { Wrapper, TextHeading, GameWrapper } from "./Game.styles";
import { Button } from "../../../Components/Button/Button";
import { Word } from "../../Word/Word";
import { GameContext } from "../../../App";
import { ANSWER } from "../../../Constant/constant";

import { handleAddFileds, getRandomNumbers } from "./helpers";

const Game = () => {
  const { setResult } = useContext(GameContext);
  const navigate = useNavigate();
  const [checkedWords, setCheckedWords] = useState(handleAddFileds(data));
  const [isCLickedChecked, setIsClickedChecked] = useState(false);

  const wordsLength = checkedWords.allwords.length;

  const [grid] = useState({
    col: getRandomNumbers(wordsLength),
    row: getRandomNumbers(wordsLength),
  });

  const handleSetSelectedWord = (id) => {
    setCheckedWords((prevState) => ({
      ...prevState,
      allwords: prevState.allwords.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        }
        return item;
      }),
    }));
  };

  const handleCheckCorrectWord = () => {
    const filteredAllwords = [...checkedWords.allwords].filter(
      (word) => word.isSelected
    );

    filteredAllwords.map((word) => {
      return setCheckedWords((prevState) => ({
        ...prevState,
        allwords: prevState.allwords.map((item) => {
          if (item.item === word.item) {
            return {
              ...item,
              isCorrect: prevState.goodwords.includes(item.item)
                ? "correct"
                : "uncorrect",
            };
          }
          return item;
        }),
      }));
    });

    setIsClickedChecked(true);
  };

  const calcualteResult = () => {
    const goodAnswerCount = checkedWords.allwords.filter(
      (word) => word.isCorrect === ANSWER.correct
    ).length;

    const badAnswerCount = checkedWords.allwords.filter(
      (word) => word.isCorrect === ANSWER.uncorrect
    ).length;

    const goodWordsCount = checkedWords.goodwords.length;

    const numberCorrectCheckedAnswer = goodAnswerCount * 2;
    const numberNotCheckedCorrectAnswer = goodWordsCount - goodAnswerCount;

    return (
      numberCorrectCheckedAnswer -
      (badAnswerCount + numberNotCheckedCorrectAnswer)
    );
  };

  useEffect(() => {
    setResult(calcualteResult());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedWords]);

  const handleNavigate = () => {
    if (isCLickedChecked) {
      navigate("/score");
    } else {
      handleCheckCorrectWord();
    }
  };

  return (
    <GameWrapper>
      <TextHeading>{checkedWords.question}</TextHeading>
      <Wrapper isCLickedChecked={isCLickedChecked} length={10}>
        {checkedWords.allwords.map((word, index) => (
          <Word
            col={grid.col[index]}
            row={grid.row[index]}
            key={word.id}
            data={word}
            handleSetSelectedWord={handleSetSelectedWord}
          />
        ))}
      </Wrapper>
      <Button onClick={handleNavigate}>
        {isCLickedChecked ? "Finish game" : "Check answers"}
      </Button>
    </GameWrapper>
  );
};

export default Game;
