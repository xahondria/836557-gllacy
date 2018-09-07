var FeedbackBlock__button = document.querySelector('.feedback-block__button');
var PopupFeedbackWrapper = document.querySelector('.popup-feedback-wrapper');
var PopupFeedback = document.querySelector('.popup-feedback');
var PopupFeedback__CloseButton = PopupFeedback.querySelector('.popup-feedback__close');
var PopupFeedbackName = PopupFeedback.querySelector('.popup-feedback__input[name=name]');
var PopupFeedbackEmail = PopupFeedback.querySelector('.popup-feedback__input[name=email]');
var PopupFeedbackForm = PopupFeedback.querySelector('.popup-feedback-form');
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem('PopupFeedbackName');
} catch (err) {
  isStorageSupport = false;
}

FeedbackBlock__button.addEventListener('click', function (evt) {
  evt.preventDefault();
  PopupFeedbackWrapper.classList.remove('hidden');
  PopupFeedback.classList.remove('hidden');
  PopupFeedbackName.focus();

  if (storage) {
    PopupFeedbackName.value = storage;
    PopupFeedbackEmail.focus();
  } else {
    PopupFeedbackName.focus();
  }
});

PopupFeedback__CloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  PopupFeedbackWrapper.classList.add('hidden');
  PopupFeedback.classList.add('hidden');
});

PopupFeedbackWrapper.addEventListener('click', function (evt) {
  evt.preventDefault();
  PopupFeedbackWrapper.classList.add('hidden');
  PopupFeedback.classList.add('hidden');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!PopupFeedback.classList.contains('hidden') && !PopupFeedbackWrapper.classList.contains('hidden')) {
      PopupFeedbackWrapper.classList.add('hidden');
      PopupFeedback.classList.add('hidden');
    }
  }
});

PopupFeedbackForm.addEventListener('submit', function (evt) {
  if (!PopupFeedbackName.value || !PopupFeedbackEmail.value) {
    evt.preventDefault();
    console.log('Нужно ввести логин и пароль');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('PopupFeedbackName', PopupFeedbackName.value);
    }
  }
});
