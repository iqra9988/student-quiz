const options = document.querySelectorAll('input[type="radio"]');

options.forEach((option) => {
  option.addEventListener('click', () => {
    const question = option.closest('.question-container');
    const otherOptions = question.querySelectorAll('input[type="radio"]');
    otherOptions.forEach((otherOption) => {
      if (otherOption !== option) {
        otherOption.checked = false;
      }
    });
  });
});


           