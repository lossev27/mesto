export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    
  }

  open() {
    console.log("open", this);
    this._popupSelector.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    console.log("_handleEscClose", this);
    if (e.key === "Escape") {
      this.close();
    }
  }

  _setEventListeners(e) {
    this._popupSelector.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup_open") ||
        e.target.classList.contains("popup_close")
      ) {
        this.close();
      }
    });
  }
}
