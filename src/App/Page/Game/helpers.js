export const getRandomNumbers = (length) => {
  const numbers = [];

  const getNum = () => Math.floor(Math.random() * length) + 1;

  while (numbers.length !== length - 1) {
    let num = getNum();

    numbers.includes(num) ? getNum() : numbers.push(num);
  }

  return numbers;
};

export const handleAddFileds = (data) => ({
  ...data,
  allwords: data.allwords.map((item, index) => {
    return {
      id: index,
      item,
      isSelected: false,
      isChecked: false,
    };
  }),
});
