const questionAnswerButtons = document.querySelectorAll('.question-answer__item-button-uncover');

questionAnswerButtons.forEach((button) => button.addEventListener('click', () => {
  const parent = button.parentElement;
  const praParent = parent.parentElement;

  praParent.classList.toggle('opened');
  praParent.classList.toggle('closed');
})
);
