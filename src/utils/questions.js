import questions from "./../data/AIquestions.json";
import customQuestions from "./../data/customQuestions.json";
import originalQuestions from "./../data/actualQuestions.json";

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

export const getOriginalQuestions = () => {
  shuffle(originalQuestions);
  return originalQuestions;
};
