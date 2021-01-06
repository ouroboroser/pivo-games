export const getFinishPicture = (questionsQuantityCorrect) => {
  const questionsQuantity: any = localStorage.getItem('questionsQuantity');

  let finish = {
    finishPictureName: '',
    finishTitle: '',
  };

  const result = Math.round(
    (questionsQuantityCorrect * 100) / questionsQuantity
  );

  if (result <= 20) {
    (finish.finishPictureName = 'business-meeting.png'),
      (finish.finishTitle = 'It will be better in future (no)');
  }

  if (result > 20 && result <= 60) {
    (finish.finishPictureName = 'giveaway.png'),
      (finish.finishTitle = 'You are cool like pivo');
  }

  if (result > 60 && result < 100) {
    (finish.finishPictureName = 'special-deals.png'),
      (finish.finishTitle = 'You were close');
  }

  if (result === 100) {
    (finish.finishPictureName = 'save-money.png'),
      (finish.finishTitle = "No comments, you're even better than beer");
  }
  return finish;
};
