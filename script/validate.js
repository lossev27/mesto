//исходный объект с настройками (селекторами), для удобства будем использовать деструктуризацию и rest объект
const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

// передаем формы и рест объект в функцию навешивания обработчика
const enableValidation = (config) => {
  const { formSelector, ...restConfig } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig);
  });
};

//функция навешивает слушатель на каждый инпут
const setEventListeners = (formElement, config) => {
  const { inputSelector, submitButtonSelector, ...restConfig } = config;
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault; //удалить из индекс
  });

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, restConfig); //на каждое нажатие вызываем функции и далее передаем рест
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//функция получает данные из свойства инпута и возвращает true или false, далее коллбэк нужной функции
const checkInputValidity = (formElement, inputElement, config) => {
  if (inputElement.validity.valid) {
    hideErrorMessage(formElement, inputElement, config);
  } else {
    showErrorMessage(formElement, inputElement, config);
  }
};

//функция показывает ошибку инпута
const showErrorMessage = (formElement, inputElement, config) => {
  const { inputErrorClass, errorClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);

  errorElement.textContent = inputElement.validationMessage;
};

//функция скрывает ошибку инпута
const hideErrorMessage = (formElement, inputElement, config) => {
  const { inputErrorClass, errorClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);

  errorElement.textContent = "";
};

//функция для проверки хотя бы одного невалидного инпута
const hasInvalidInput = (inputList) => {
  return inputList.some((item) => {
    if (item.validity.valid) {
      return false;
    } else {
      return true;
    }
  });
};
//функция включает или выключает кнопку сабмит
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
};

enableValidation(config); // вызов функции включения валидации с объектом config
