import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open = (title, imageUrl) => {
    super.open();
    this._popup.querySelector(".popup__img").src = imageUrl;
    this._popup.querySelector(".popup__img").alt = `фото ${title}`;
    this._popup.querySelector(".popup__img-description").textContent = title;
  };
}
