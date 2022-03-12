import { Popup } from "./Popup.js";

class PopupWithImage extends Popup{
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = popupSelector.querySelector('form');

  }

}
