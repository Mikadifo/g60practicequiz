import questions from "./../data/questions.json";
import customQuestions from "./../data/customQuestions.json";

const shuffle = (array) => {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

export const getQuestions = () => {
  shuffle(questions);
  return questions;
};

export const getCustomQuestions = (number) => {
  shuffle(customQuestions);
  return customQuestions.slice(0, number);
};
