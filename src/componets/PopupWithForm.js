import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { submitCallBack }) {
    super(popupSelector);
    this._submitCallBack = submitCallBack;
    this._formElement = this._popup.querySelector(".form");
  }

  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll(".form__input");
    this._result = {};
    this._inputList.forEach((item) => {
      this._result[item.name] = item.value;
    });
    return this._result;
  }

  _formSubmit() {
    this._submitCallBack(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._formSubmit();
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
