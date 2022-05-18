export class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplateCard() {
    const postTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return postTemplate;
  }

  _handleClickLike(e) {
    const eventTargetLike = e.target;
    eventTargetLike.classList.toggle("card__icon-heart_active");
  }

  _deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    const elementImg = this._element.querySelector(".card__image");
    const buttonLike = this._element.querySelector(".card__icon-heart");
    const buttonDeleteCard = this._element.querySelector(
      ".card__button-delete"
    );

    buttonLike.addEventListener("click", (e) => this._handleClickLike(e));
    buttonDeleteCard.addEventListener("click", () => this._deleteCard());
    elementImg.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  createCard() {
    this._element = this._getTemplateCard();
    const elementImg = this._element.querySelector(".card__image");
    const elemetTitle = this._element.querySelector(".card__tiltle");
    elemetTitle.textContent = this._name;
    elementImg.alt = `фото ${this._name}`;
    elementImg.src = this._link;
  }

  render() {
    return this._element;
  }
}
