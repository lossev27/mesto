export class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(
      this._validationConfig.submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validationConfig.inputSelector)
    );
  }

  //функция навешивает слушатель на каждый инпут
  _setEventListeners() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault;
    });
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement); //на каждое нажатие вызываем функции и далее передаем рест
        this.toggleButtonState();
      });
    });
  }

  //функция получает данные из свойства инпута и возвращает true или false, далее коллбэк нужной функции
  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideErrorMessage(inputElement);
    } else {
      this._showErrorMessage(inputElement);
    }
  }

  //функция показывает ошибку инпута
  _showErrorMessage(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.classList.add(this._validationConfig.errorClass);

    errorElement.textContent = inputElement.validationMessage;
  }

  //функция скрывает ошибку инпута
  _hideErrorMessage(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.classList.remove(this._validationConfig.errorClass);

    errorElement.textContent = "";
  }

  //функция для проверки хотя бы одного невалидного инпута
  _hasInvalidInput() {
    return this._inputList.some((item) => {
      if (item.validity.valid) {
        return false;
      } else {
        return true;
      }
    });
  }

  //функция включает или выключает кнопку сабмит
  toggleButtonState() {
    if (!this._hasInvalidInput()) {
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.disabled = true;
    }
  }

  enableValidation() {
    this._setEventListeners();
  }
}
